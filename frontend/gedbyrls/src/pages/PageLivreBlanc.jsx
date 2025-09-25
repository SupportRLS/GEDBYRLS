import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonComponentsRed from "../components/ButtonComponentsRed";
import { Helmet } from "react-helmet";
function LivresBlancs() {
  const [livresBlancs, setLivresBlancs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchLivresBlancs = async () => {
      try {
        let response = await fetch(
          `${apiUrl}/api/livre-blancs?populate=image&pagination[pageSize]=100`
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }

        const json = await response.json();
        console.log("Données reçues:", json); // Debug pour voir la structure
        setLivresBlancs(json.data || []);
      } catch (error) {
        console.error("Erreur lors du chargement des livres blancs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLivresBlancs();
  }, [apiUrl]);

  const getImageUrl = (livreBlanc) => {
    if (!livreBlanc.image) return null;

    // Priorité : taille small, sinon originale
    return livreBlanc.image.formats?.small?.url
      ? `${apiUrl}${livreBlanc.image.formats.small.url}`
      : `${apiUrl}${livreBlanc.image.url}`;
  };

  // Fonction pour formater le nom du secteur
  const formatSecteur = (secteur) => {
    if (!secteur) return "Non spécifié";
    return secteur
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Fonction pour générer une couleur de fond basée sur le secteur

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F71344] mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des livres blancs...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-500 mb-4">
              <svg
                className="w-12 h-12 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              Erreur lors du chargement : {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#F71344] text-white px-4 py-2 rounded-lg hover:bg-[#9C0526] transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title> Livre Blanc - RLS </title>
        <meta
          name="description"
          content="Découvrez notre collection de livres blancs spécialisés pour approfondir vos connaissances dans différents domaines d'expertise. Chaque publication vous apporte des insights précieux et des analyses détaillées."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Nos Livres Blancs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre collection de livres blancs spécialisés pour
              approfondir vos connaissances dans différents domaines
              d'expertise. Chaque publication vous apporte des insights précieux
              et des analyses détaillées.
            </p>
          </div>

          {livresBlancs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">
                Aucun livre blanc disponible pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {livresBlancs.map((livreBlanc) => (
                <div
                  key={livreBlanc.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                >
                  {/* Image de couverture */}
                  <div className="relative h-50 overflow-hidden">
                    {getImageUrl(livreBlanc) ? (
                      <img
                        src={getImageUrl(livreBlanc)}
                        alt={
                          livreBlanc.image?.alternativeText || livreBlanc.Titre
                        }
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : livreBlanc.PDF && livreBlanc.PDF.url ? (
                      <div className="text-center text-white h-full flex items-center justify-center bg-gray-700">
                        <p className="text-sm font-medium opacity-90">
                          Livre Blanc PDF
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Contenu de la card */}
                  <div className="p-8">
                    {/* Titre */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#F71344] transition-colors duration-300">
                      {livreBlanc.Titre || "Titre non défini"}
                    </h3>

                    {/* Description courte si disponible */}
                    {livreBlanc.Description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {livreBlanc.Description}
                      </p>
                    )}

                    {/* Bouton d'action */}
                    <div className="mt-auto">
                      <ButtonComponentsRed
                        text="Télécharger ce livre"
                        href="/ressources/form-livre-blanc"
                        target="_self"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section CTA */}
          <div className="mt-16 text-center bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Besoin d'un livre blanc spécifique ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vous ne trouvez pas le livre blanc qui correspond à vos besoins ?
              Contactez-nous directement pour discuter de vos attentes.
            </p>
            <ButtonComponentsRed
              text="Nous contacter"
              href="/contact"
              target="_self"
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default LivresBlancs;
