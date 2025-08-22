import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ButtonComponentsRed from "../components/ButtonComponentsRed";

function CasClients() {
  const [casClients, setCasClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCasClients = async () => {
      try {
        // Test 1: Sans populate pour voir si l'endpoint fonctionne
        let response = await fetch(
          `${apiUrl}/api/cas-clients?populate=image&pagination[pageSize]=100`
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }

        const json = await response.json();
        console.log("Données reçues:", json); // Debug pour voir la structure
        setCasClients(json.data || []);
      } catch (error) {
        console.error("Erreur lors du chargement des cas clients:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCasClients();
  }, [apiUrl]);

  const getImageUrl = (casClient) => {
    if (!casClient.image) return null;

    // Priorité : taille small, sinon originale
    return casClient.image.formats?.small?.url
      ? `${apiUrl}${casClient.image.formats.small.url}`
      : `${apiUrl}${casClient.image.url}`;
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
  const getSecteurColor = (secteur) => {
    const colors = {
      avocat: "bg-blue-100 text-blue-800",
      notaire: "bg-green-100 text-green-800",
      industrie: "bg-gray-100 text-gray-800",
      comptable: "bg-yellow-100 text-yellow-800",
      association: "bg-purple-100 text-purple-800",
      "tpe-pme": "bg-pink-100 text-pink-800",
      "grands-groupes": "bg-indigo-100 text-indigo-800",
      santé: "bg-red-100 text-red-800",
      architecte: "bg-cyan-100 text-cyan-800",
      btp: "bg-orange-100 text-orange-800",
      "secteur public": "bg-teal-100 text-teal-800",
      finance: "bg-emerald-100 text-emerald-800",
      commercial: "bg-lime-100 text-lime-800",
      freelance: "bg-violet-100 text-violet-800",
      médical: "bg-rose-100 text-rose-800",
      distribution: "bg-sky-100 text-sky-800",
      immobilier: "bg-amber-100 text-amber-800",
      portuaire: "bg-slate-100 text-slate-800",
      reglementation: "bg-stone-100 text-stone-800",
      logistique: "bg-zinc-100 text-zinc-800",
    };
    return colors[secteur] || "bg-gray-100 text-gray-800";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F71344] mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des cas clients...</p>
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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Cas Clients
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos réalisations à travers une sélection de cas clients
            dans différents secteurs d'activité. Chaque projet illustre notre
            expertise et notre capacité d'adaptation.
          </p>
        </div>

        {casClients.length === 0 ? (
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
              Aucun cas client disponible pour le moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {casClients.map((casClient) => (
              <div
                key={casClient.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                {/* Image de couverture */}
                <div className="relative h-40  overflow-hidden">
                  {getImageUrl(casClient) ? (
                    <img
                      src={getImageUrl(casClient)}
                      alt={casClient.image?.alternativeText || casClient.Titre}
                    />
                  ) : casClient.PDF && casClient.PDF.url ? (
                    <div className="h-full flex items-center justify-center bg-gradient-to-br from-[#F71344] to-[#9C0526]">
                      <div className="text-center text-white">
                        <svg
                          className="w-16 h-16 mx-auto mb-2 opacity-80"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm font-medium opacity-90">
                          Document PDF
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <svg
                          className="w-16 h-16 mx-auto mb-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm">Pas d'aperçu</p>
                      </div>
                    </div>
                  )}

                  {/* Fallback caché pour les erreurs de chargement d'image */}
                  <div className="h-full items-center justify-center bg-gradient-to-br from-[#F71344] to-[#9C0526] hidden">
                    <div className="text-center text-white">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 opacity-80"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-medium opacity-90">
                        Document PDF
                      </p>
                    </div>
                  </div>

                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>

                {/* Contenu de la card */}
                <div className="p-6">
                  {/* Badge secteur */}
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getSecteurColor(
                        casClient.Secteur
                      )}`}
                    >
                      {formatSecteur(casClient.Secteur)}
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-2 group-hover:text-[#F71344] transition-colors duration-300">
                    {casClient.Titre || "Titre non défini"}
                  </h3>

                  {/* Bouton d'action */}
                  <div className="mt-auto">
                    <ButtonComponentsRed
                      text="Demander ce cas"
                      href="http://localhost:5173/ressources/form-cas-client"
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
            Besoin d'un cas client spécifique ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Vous ne trouvez pas le cas client qui correspond à vos besoins ?
            Contactez-nous directement pour discuter de votre projet.
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
  );
}

export default CasClients;
