"use strict";

module.exports = {
  async create(ctx) {
    try {
      const formData = ctx.request.body;

      // Validation des champs requis
      if (!formData.email || !formData.documentKey || !formData.type) {
        return ctx.badRequest("Email, documentKey et type sont requis");
      }

      // Détermine le type de document et les collections à utiliser
      let document,
        leadCollectionName,
        documentCollectionName,
        documentFieldName;

      if (formData.type === "cas-client") {
        documentCollectionName = "api::cas-client.cas-client";
        leadCollectionName = "api::lead-cas-client.lead-cas-client";
        documentFieldName = "cas_clients";
      } else if (formData.type === "livre-blanc") {
        documentCollectionName = "api::livre-blanc.livre-blanc";
        leadCollectionName = "api::lead-livre-blanc.lead-livre-blanc";
        documentFieldName = "livre_blancs";
      } else {
        return ctx.badRequest("Type de document non supporté");
      }

      // Récupération du document avec son PDF
      document = await strapi.entityService.findOne(
        documentCollectionName,
        formData.documentKey,
        {
          populate: ["PDF"], // Utilise "PDF" comme dans le schema
        }
      );

      if (!document) {
        return ctx.notFound(
          `${formData.type === "cas-client" ? "Cas client" : "Livre blanc"} non trouvé`
        );
      }

      if (!document.PDF || !document.PDF.url) {
        strapi.log.error(
          "Structure du document:",
          JSON.stringify(document, null, 2)
        );
        return ctx.badRequest(
          `Aucun PDF associé à ce ${formData.type === "cas-client" ? "cas client" : "livre blanc"}`
        );
      }

      strapi.log.info(`PDF trouvé: ${document.PDF.url} (${document.PDF.name})`);

      // Préparation des données du document pour le service
      const documents = [
        {
          titre: document.Titre,
          url: `${process.env.BACKEND_URL}${document.PDF.url}`,
          localPath: document.PDF.url.startsWith("/")
            ? document.PDF.url.substring(1)
            : document.PDF.url, // retire le / initial si présent
          pdfName: document.PDF.name || "document.pdf",
        },
      ];

      // Préparation des données pour le lead selon le type
      let leadData = {
        prenom: formData.prenom,
        nom: formData.nom,
        email: formData.email,
        entreprise: formData.entreprise,
        telephone: formData.telephone,
        message: formData.message,
        date_demande: new Date(),
        traitement_demande: false,
      };

      // Ajouter la relation appropriée
      leadData[documentFieldName] = [formData.documentKey];

      // Sauvegarde du lead dans la collection appropriée
      const savedLead = await strapi.entityService.create(leadCollectionName, {
        data: leadData,
        populate: [documentFieldName],
      });

      strapi.log.info(
        `✅ Lead sauvegardé avec l'ID: ${savedLead.id} pour ${formData.type}`
      );

      // Utilisation du service email-service pour l'envoi client
      await strapi
        .service("api::email-service.email-service")
        .sendClientWithDocuments(formData, documents, formData.type);

      // Envoi de la notification interne (optionnel)
      try {
        await strapi
          .service("api::email-service.email-service")
          .sendInternalNotification(
            formData,
            documents,
            savedLead.id,
            formData.type
          );
      } catch (notificationError) {
        strapi.log.warn(
          "Échec de l'envoi de la notification interne:",
          notificationError.message
        );
        // On continue même si la notification interne échoue
      }

      const documentTypeName =
        formData.type === "cas-client" ? "cas client" : "livre blanc";
      return ctx.send({
        success: true,
        message: `✅ Votre demande de ${documentTypeName} a été envoyée avec succès ! Vous allez recevoir le document par email.`,
        leadId: savedLead.id,
      });
    } catch (err) {
      strapi.log.error("Erreur dans email-service.create:", err);
      return ctx.internalServerError("Erreur lors de l'envoi de l'email");
    }
  },
};
