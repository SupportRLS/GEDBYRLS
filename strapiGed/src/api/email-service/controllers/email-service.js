"use strict";

module.exports = {
  async create(ctx) {
    try {
      const formData = ctx.request.body;

      // Validation des champs requis
      if (!formData.email || !formData.documentKey) {
        return ctx.badRequest("Email et documentKey sont requis");
      }

      // Récupération du cas client avec son PDF
      const casClient = await strapi.entityService.findOne(
        "api::cas-client.cas-client",
        formData.documentKey,
        {
          populate: ["PDF"], // Utilise "PDF" comme dans le schema
        }
      );

      if (!casClient) {
        return ctx.notFound("Cas client non trouvé");
      }

      if (!casClient.PDF || !casClient.PDF.url) {
        strapi.log.error(
          "Structure du cas client:",
          JSON.stringify(casClient, null, 2)
        );
        return ctx.badRequest("Aucun PDF associé à ce cas client");
      }

      strapi.log.info(
        `PDF trouvé: ${casClient.PDF.url} (${casClient.PDF.name})`
      );

      // Préparation des données du document pour le service
      const documents = [
        {
          titre: casClient.Titre,
          url: `${process.env.BACKEND_URL}${casClient.PDF.url}`,
          localPath: casClient.PDF.url.startsWith("/")
            ? casClient.PDF.url.substring(1)
            : casClient.PDF.url, // retire le / initial si présent
          pdfName: casClient.PDF.name || "document.pdf",
        },
      ];

      // Utilisation du service email-service pour l'envoi client
      await strapi
        .service("api::email-service.email-service")
        .sendClientWithDocuments(formData, documents);

      // Envoi de la notification interne
      try {
        await strapi
          .service("api::email-service.email-service")
          .sendInternalNotification(formData, documents);
      } catch (notificationError) {
        strapi.log.warn(
          "Échec de l'envoi de la notification interne:",
          notificationError.message
        );
        // On continue même si la notification interne échoue
      }

      return ctx.send({
        success: true,
        message:
          "Votre demande a été envoyée avec succès ! Vous allez recevoir le document par email.",
      });
    } catch (err) {
      strapi.log.error("Erreur dans email-service.create:", err);
      return ctx.internalServerError("Erreur lors de l'envoi de l'email");
    }
  },
};
