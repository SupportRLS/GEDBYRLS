import React from "react";
import { useParams } from "react-router-dom";
import DynamicComponent from "../components/DynamicComponent";
import { useArticleBySlug } from "../hooks/useStrapi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ArticleDetail = () => {
  // Récupérer l'ID depuis les paramètres de l'URL
  const { slug } = useParams(); // ou { id } selon votre route

  // Vous pouvez adapter selon si vous utilisez slug ou id
  // Si vous utilisez le slug, il faudra modifier le hook useArticle
  // Pour l'instant, on va utiliser un ID fixe ou le slug comme ID
  const articleId = slug || 1;

  // Utiliser le hook personnalisé
  const { data: articleData, loading, error, refetch } = useArticleBySlug(slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de l'article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md">
          <h2 className="font-bold mb-2">❌ Erreur de chargement</h2>
          <p className="mb-4">{error}</p>
          <div className="flex space-x-2">
            <button
              onClick={refetch}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Réessayer
            </button>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!articleData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Article non trouvé
          </h2>
          <p className="text-gray-600 mb-4">
            L'article demandé n'existe pas ou a été supprimé.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  // Adaptation pour la structure de données Strapi V5
  const attributes = articleData.attributes || articleData;

  return (
    <div className="min-h-screen">
      <Header />
      {/* Header de l'article */}
      <div className="shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
              <span>Accueil</span>
              <span className="mx-2">/</span>
              <span>Articles</span>
              <span className="mx-2">/</span>
              <span className="text-gray-800">
                {attributes.title || `Article ${articleId}`}
              </span>
            </nav>

            {attributes.title && (
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {attributes.title}
              </h1>
            )}

            {attributes.description && (
              <p className="text-gray-600 text-lg leading-relaxed">
                {attributes.description}
              </p>
            )}

            {/* Image de couverture */}
            {attributes.cover?.url && (
              <div className="mt-6">
                <img
                  src={
                    attributes.cover.url.startsWith("http")
                      ? attributes.cover.url
                      : `${
                          import.meta.env.VITE_API_URL ||
                          "http://localhost:1337"
                        }${attributes.cover.url}`
                  }
                  alt={attributes.cover.alt || attributes.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4 space-x-4">
              {attributes.createdAt && (
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {new Date(attributes.createdAt).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}

              {attributes.updatedAt &&
                attributes.updatedAt !== attributes.createdAt && (
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Mis à jour le{" "}
                    {new Date(attributes.updatedAt).toLocaleDateString("fr-FR")}
                  </span>
                )}

              {/* Indicateur des composants dynamiques */}
              {attributes.components && attributes.components.length > 0 && (
                <span className="flex items-center text-green-600">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {attributes.components.length} composant
                  {attributes.components.length > 1 ? "s" : ""} dynamique
                  {attributes.components.length > 1 ? "s" : ""}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Contenu statique de l'article */}
          {attributes.content && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                Contenu de l'article
              </h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: attributes.content }}
              />
            </div>
          )}
          {/* Texte1 */}
          {attributes.texte1 && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="prose max-w-none">
                <p>{attributes.texte1}</p>
              </div>
            </div>
          )}

          {/* Texte2 */}
          {attributes.texte2 && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: attributes.texte2.replace(/\n/g, "<br>"),
                }}
              />
            </div>
          )}
          {/* Sections personnalisées (TexteImageGauche, etc.) */}
          {attributes.TexteImageGauche &&
            attributes.TexteImageGauche.length > 0 && (
              <div className="space-y-6">
                {attributes.TexteImageGauche.map((section, index) => (
                  <DynamicComponent key={index} component={section} />
                ))}
              </div>
            )}

          {/* Section pour les composants dynamiques */}
          {attributes.components && attributes.components.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Composants dynamiques
                </h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {attributes.components.length} élément
                  {attributes.components.length > 1 ? "s" : ""}
                </span>
              </div>

              {attributes.components.map((component, index) => (
                <div
                  key={`${component.__component}-${index}`}
                  className="relative"
                >
                  {/* Numéro du composant pour le debug */}
                  {import.meta.env.MODE === "development" && (
                    <div className="absolute -left-2 -top-2 w-6 h-6 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold z-10">
                      {index + 1}
                    </div>
                  )}
                  <DynamicComponent component={component} />
                </div>
              ))}
            </div>
          )}

          {/* Message si aucun composant dynamique */}
          {(!attributes.components || attributes.components.length === 0) && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <svg
                className="w-12 h-12 text-blue-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14-5H5m10 10H5m4-2l3 3m0 0l3-3"
                />
              </svg>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Aucun composant dynamique
              </h3>
              <p className="text-blue-600">
                Cet article ne contient pas encore de composants dynamiques.
              </p>
              <p className="text-sm text-blue-500 mt-2">
                💡 Ajoutez des composants via l'interface d'administration
                Strapi pour enrichir le contenu.
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Retour
            </button>

            <button
              onClick={refetch}
              className="flex items-center px-4 py-2 text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Actualiser
            </button>
          </div>

          {/* Debug info (uniquement en développement) */}
          {import.meta.env.MODE === "development" && (
            <details className="mt-8 bg-gray-100 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                🔍 Debug - Données de l'article
              </summary>
              <pre className="text-xs overflow-x-auto bg-white p-4 rounded border mt-2 max-h-96">
                {JSON.stringify(articleData, null, 2)}
              </pre>
            </details>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
