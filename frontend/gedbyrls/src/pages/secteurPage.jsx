import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { iconMap } from "../components/iconMap";
import { Helmet } from "react-helmet";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FonctionnaliteSlider from "../components/SectorSlider";
import FeatureList from "../components/FeatureList.jsx";
import Button from "../components/ButtonComponents.jsx";
import ButtonRed from "../components/ButtonComponentsRed.jsx";
import TextImageLeft from "../components/TextImageLeft.jsx";
import TextImageRight from "../components/TextImageRight.jsx";

import "../components/style/secteurPage.css";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

function SecteurPage() {
  const { slug } = useParams();
  const [secteur, setSecteur] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSecteurBySlug = async (slug) => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `${STRAPI_URL}/api/secteurs?filters[slug][$eq]=${slug}` +
            `&populate[image]=true` +
            `&populate[imagebenefices]=true` +
            `&populate[prise_en_main][populate][image]=true` +
            `&populate[fonctionnalites]=true` +
            `&populate[enjeux]=true` +
            `&populate[formation][populate][contenu]=true`
        );

        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status}`);
        }

        const json = await res.json();

        if (!json.data || json.data.length === 0) {
          throw new Error("Secteur non trouvé");
        }

        setSecteur(json.data[0]);
      } catch (err) {
        console.error("Erreur récupération secteur:", err);
        setError(err.message);
        setSecteur(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchSecteurBySlug(slug);
    }
  }, [slug]);

  const getImageUrl = (imageData) => {
    if (!imageData) return "";
    if (typeof imageData === "string") return imageData; // si c'est juste une string
    if (imageData.url)
      return imageData.url.startsWith("http")
        ? imageData.url
        : `${STRAPI_URL}${imageData.url}`;
    return "";
  };

  if (loading) {
    return (
      <div>
        <Helmet>
          <title> La ged en fonction des métiers - RLS </title>
          <meta
            name="description"
            content="Découvrez comment la gestion électronique de documents (GED) s'adapte aux besoins spécifiques de différents secteurs d'activité, optimisant ainsi la productivité et la conformité réglementaire."
          />
        </Helmet>
        <Header />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <p>Chargement...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !secteur) {
    return (
      <div>
        <Header />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Secteur non trouvé</h1>
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  const attrs = secteur;
  console.log("FORMATION ATTRS:", attrs.formation);
  console.log("MODULES:", attrs.formation?.contenu);

  return (
    <>
      <Header />
      <div className="sectionOnePage">
        <TextImageRight
          title={attrs.titre}
          text={attrs.accroche}
          imageSrc={getImageUrl(attrs.image)}
          imageAlt={attrs.titre}
        />
      </div>
      <p className="descriptionSectionOne">{attrs.description}</p>
      <div className="sectionEnjeux">
        <div className="sectionEnjeuxBackground">
          <h3>{attrs.titreEnjeux}</h3>
          <p className="descriptionEnjeux">{attrs.descriptionEnjeux}</p>
        </div>

        <h2 className="titreEnjeux2 font-bold! mt-6!">{attrs.titreEnjeux2}</h2>

        <div className="displayGrid">
          <FeatureList type="enjeux" list={attrs.enjeux || []} />
        </div>

        <p className="paragrapheEnjeux">{attrs.paragrapheEnjeux}</p>
      </div>
      <div className="sectionThreePage">
        <h3>{attrs.titreFonctionnalite}</h3>
        <FonctionnaliteSlider fonctionnalites={attrs.fonctionnalites || []} />
      </div>
      {attrs.conformite && (
        <div className="sectionFourPage">
          <h3>{attrs.conformite.titre}</h3>
          <p>{attrs.conformite.contenu}</p>
        </div>
      )}
      <div className="sectionFivePage">
        <TextImageLeft
          title={attrs.titrebenefices}
          text={attrs.benefices}
          imageSrc={getImageUrl(attrs.imagebenefices)}
          imageAlt={attrs.titrebenefices}
        />
      </div>
      {attrs.prise_en_main && (
        <div className="sectionSixPage">
          <TextImageRight
            title={attrs.prise_en_main.titre}
            text={attrs.prise_en_main.contenu}
            imageSrc={getImageUrl(attrs.prise_en_main.image)}
            imageAlt={attrs.prise_en_main.titre}
          />
        </div>
      )}
      {attrs.formation && (
        <div className="sectionSevenPage">
          <h3>{attrs.formation.titre}</h3>
          <FeatureList
            type="formation"
            list={
              Array.isArray(attrs.formation.contenu)
                ? attrs.formation.contenu.map((module) => ({
                    title: module.title || module.titre || "",
                    icone: module.icone,
                  }))
                : []
            }
          />
        </div>
      )}

      <div className="ctaSection">
        <h3>{attrs.cta}</h3>
        <p>{attrs.contenu}</p>
        <Button text="Je contacte" href="/contact" />
        <ButtonRed
          text="Télécharger le livre blanc"
          href="/ressources/cas-client"
        />
      </div>
      <Footer />
    </>
  );
}

export default SecteurPage;
