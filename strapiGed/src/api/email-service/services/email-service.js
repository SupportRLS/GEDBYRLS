"use strict";
const fs = require("fs");
const path = require("path");

module.exports = ({ strapi }) => ({
  async sendInternalNotification(data, documents = [], leadId = null) {
    try {
      if (!process.env.SUPPORT_EMAIL) {
        strapi.log.warn(
          "SUPPORT_EMAIL non défini dans .env, notification interne ignorée."
        );
        return false;
      }

      const docsText = documents.length
        ? documents.map((d, i) => `${i + 1}. ${d.titre} — ${d.url}`).join("\n")
        : "Aucun document trouvé";

      const text = `
Nouvelle demande de cas client.

ID Lead : ${leadId || "Non défini"}
Nom : ${data.fullName || `${data.prenom || ""} ${data.nom || ""}`}
Email : ${data.email || "Non renseigné"}
Entreprise : ${data.entreprise || "Non renseignée"}
Taille : ${data.taille || "Non renseignée"}
Secteur : ${data.secteur || "Non renseigné"}
Téléphone : ${data.telephone || "Non renseigné"}
Message : ${data.message || "Aucun message"}

Documents demandés :
${docsText}

Date de demande : ${new Date().toLocaleString("fr-FR")}
      `;

      await strapi
        .plugin("email")
        .service("email")
        .send({
          to: process.env.SUPPORT_EMAIL,
          from: process.env.SMTP_DEFAULT_FROM,
          subject: `📩 Nouvelle demande de cas client — ${data.fullName || data.email} (ID: ${leadId})`,
          text,
        });

      strapi.log.info("✅ Notification interne envoyée.");
      return true;
    } catch (err) {
      strapi.log.error("❌ Erreur sendInternalNotification:", err);
      throw err;
    }
  },

  async sendClientWithDocuments(data, documents = []) {
    try {
      if (!data.email) {
        strapi.log.warn("Aucun email client fourni, envoi ignoré.");
        return false;
      }

      const docsHtml = documents.length
        ? `<ul>${documents
            .map(
              (d) =>
                `<li><strong>${escapeHtml(d.titre)}</strong> — <a href="${d.url}" target="_blank" rel="noopener">Télécharger</a></li>`
            )
            .join("")}</ul>`
        : `<p>Aucun document disponible.</p>`;

      const attachments = documents
        .map((d) => {
          if (!d.localPath) {
            strapi.log.warn(
              `Chemin local manquant pour le document: ${d.titre}`
            );
            return null;
          }

          // Construction du chemin complet
          let fullPath;
          if (d.localPath.startsWith("/")) {
            // Si le chemin commence par '/', on le joint directement à public
            fullPath = path.join(
              strapi.dirs.static.public,
              d.localPath.substring(1)
            );
          } else {
            // Sinon on l'ajoute tel quel
            fullPath = path.join(strapi.dirs.static.public, d.localPath);
          }

          strapi.log.info(`Tentative d'accès au fichier: ${fullPath}`);

          if (!fs.existsSync(fullPath)) {
            strapi.log.warn(`Fichier joint non trouvé: ${fullPath}`);
            return null;
          }

          return {
            filename: d.pdfName,
            path: fullPath,
            contentType: "application/pdf",
          };
        })
        .filter(Boolean);

      const html = `
        <p>Bonjour ${escapeHtml(data.prenom || data.nom || data.fullName || "")},</p>
        <p>Merci pour votre demande. Voici les documents demandés :</p>
        ${docsHtml}
        <p>Bonne lecture,<br>L'équipe ReproLanguedoc</p>
      `;

      const subject =
        documents.length === 1
          ? `Votre cas client : ${documents[0].titre}`
          : `Vos cas clients demandés`;

      await strapi.plugin("email").service("email").send({
        to: data.email,
        from: process.env.SMTP_DEFAULT_FROM,
        subject,
        html,
        attachments,
      });

      strapi.log.info(`✅ Email client envoyé à ${data.email}`);
      return true;
    } catch (err) {
      strapi.log.error("❌ Erreur sendClientWithDocuments:", err);
      throw err;
    }
  },
});

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
