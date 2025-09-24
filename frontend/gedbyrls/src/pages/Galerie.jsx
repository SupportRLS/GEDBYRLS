import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "../components/style/gallery.css";
import Header from "../components/header";
import Footer from "../components/footer";

// Accueil
import ClasseurChiffre from "../assets/capture_ged/accueil/classeur-en-chiffre.webp";
import ConnectionAppMobile from "../assets/capture_ged/accueil/connection_phone_zeendoc.webp";
import dernierDocAjout from "../assets/capture_ged/accueil/derniers_docs_ajoutés.webp";
import exportExcel from "../assets/capture_ged/accueil/export_ecel_document.webp";
import accueil from "../assets/capture_ged/accueil/page_accueil.webp";
import rechercheClasseur from "../assets/capture_ged/accueil/recherche_classeur.webp";
import rechercheExpert from "../assets/capture_ged/accueil/recherche_expert.webp";
import rechercheDossierFerme from "../assets/capture_ged/accueil/recherche_ferme.webp";
import rechercheSimple from "../assets/capture_ged/accueil/recherche_simple.webp";

// Client
import exportXlsClient from "../assets/capture_ged/client/export_xls_client.webp";
import factureDiffusion from "../assets/capture_ged/client/facture_a_diffuser.webp";
import pageAccueilClient from "../assets/capture_ged/client/page_accueil_client.webp";
import selectionFacile from "../assets/capture_ged/client/selection_facile_client.webp";

// Fournisseur
import appercuChiffre from "../assets/capture_ged/fournisseur/appercu_chiffre_fournisseur.webp";
import appercuDocument from "../assets/capture_ged/fournisseur/appercu_document_fournisseur.webp";
import appercuFacture from "../assets/capture_ged/fournisseur/appercu_facture.webp";
import documentTrouve from "../assets/capture_ged/fournisseur/document_trouve.webp";
import exportXlsFournisseur from "../assets/capture_ged/fournisseur/export_xls_fournisseur.webp";
import indexationDocument from "../assets/capture_ged/fournisseur/indexation_doc.webp";
import menuFournisseur from "../assets/capture_ged/fournisseur/menu_fournisseur.webp";
import pageAccueilFournisseur from "../assets/capture_ged/fournisseur/page_d'accueil_fournisseurs.webp";
import rechercheDocumentFournisseur from "../assets/capture_ged/fournisseur/recherche_document_fournisseur.webp";
import rechercheDocumentFournisseurGeneral from "../assets/capture_ged/fournisseur/recherche_document_fournisseur_general.webp";
import telechargementDocumentFournisseur from "../assets/capture_ged/fournisseur/telechargement_document_fournisseur.webp";

// Données
const accueilPhotos = [
  {
    src: accueil,
    alt: "Page d'accueil Zeendoc",
    description: "Tableau de bord principal de Zeendoc",
  },
];

const detailsAccueil = [
  {
    src: ClasseurChiffre,
    alt: "Classeur en chiffre",
    description: "Aperçu des statistiques des classeurs.",
  },
  {
    src: dernierDocAjout,
    alt: "Derniers documents ajoutés",
    description: "Liste des documents récemment ajoutés.",
  },
  {
    src: rechercheClasseur,
    alt: "Recherche par classeur",
    description: "Fonction de recherche par classeur.",
  },
  {
    src: rechercheExpert,
    alt: "Recherche experte",
    description: "Recherche avancée dans Zeendoc.",
  },
  {
    src: rechercheDossierFerme,
    alt: "Recherche dans dossier fermé",
    description: "Filtrage dans les archives.",
  },
  {
    src: rechercheSimple,
    alt: "Recherche simple",
    description: "Recherche rapide dans la GED.",
  },
  {
    src: ConnectionAppMobile,
    alt: "Connexion mobile",
    description: "Accès via l'application mobile Zeendoc.",
  },
  {
    src: exportExcel,
    alt: "Export Excel",
    description: "Exporter des données vers Excel.",
  },
];

const clientPhotos = [
  {
    src: pageAccueilClient,
    alt: "Page client",
    description: "Tableau de bord client.",
  },
  {
    src: factureDiffusion,
    alt: "Factures à diffuser",
    description: "Liste des factures en attente de diffusion.",
  },
  {
    src: exportXlsClient,
    alt: "Export client XLS",
    description: "Export des données clients vers Excel.",
  },
  {
    src: selectionFacile,
    alt: "Sélection de documents",
    description: "Sélection rapide de documents client.",
  },
];

const fournisseurPhotos = [
  {
    src: pageAccueilFournisseur,
    alt: "Page fournisseur",
    description: "Page d'accueil du module fournisseur.",
  },
  {
    src: menuFournisseur,
    alt: "Menu fournisseur",
    description: "Navigation dans les options fournisseurs.",
  },
  {
    src: appercuChiffre,
    alt: "Aperçu des chiffres",
    description: "Vue d'ensemble des indicateurs fournisseurs.",
  },
  {
    src: appercuDocument,
    alt: "Aperçu documents",
    description: "Affichage des documents fournisseurs.",
  },
  {
    src: appercuFacture,
    alt: "Aperçu factures",
    description: "Visualisation des factures fournisseurs.",
  },
  {
    src: documentTrouve,
    alt: "Document trouvé",
    description: "Exemple de recherche réussie.",
  },
  {
    src: exportXlsFournisseur,
    alt: "Export fournisseur XLS",
    description: "Exporter les données fournisseurs.",
  },
  {
    src: indexationDocument,
    alt: "Indexation document",
    description: "Ajout d'index sur documents.",
  },
  {
    src: rechercheDocumentFournisseur,
    alt: "Recherche document fournisseur",
    description: "Recherche par fournisseur.",
  },
  {
    src: rechercheDocumentFournisseurGeneral,
    alt: "Recherche générale",
    description: "Recherche dans tous les documents.",
  },
  {
    src: telechargementDocumentFournisseur,
    alt: "Téléchargement document",
    description: "Téléchargement des documents.",
  },
];

const GalleryBlock = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className={`gallery-grid ${images.length === 1 ? "single" : ""}`}>
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img src={img.src} alt={img.alt || `Image ${i}`} />
            {img.description && (
              <p className="image-description">{img.description}</p>
            )}
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images}
        plugins={[Thumbnails]}
      />
    </>
  );
};

export default function Gallery() {
  return (
    <div className="page-gallery">
      <Header />
      <div className="gallery-container">
        <h1 className="font-bold">Galerie Zeendoc</h1>

        <section>
          <h2>Page d’accueil</h2>
          <p>Vue principale du tableau de bord Zeendoc.</p>
          <GalleryBlock images={accueilPhotos} />
        </section>

        <section>
          <h2>Détails de l’accueil</h2>
          <p>
            Fonctionnalités et composants visibles depuis la page d’accueil.
          </p>
          <GalleryBlock images={detailsAccueil} />
        </section>

        <section>
          <h2>Classeur Client</h2>
          <p>Visualisation des documents liés aux clients dans Zeendoc.</p>
          <GalleryBlock images={clientPhotos} />
        </section>

        <section>
          <h2>Classeur Fournisseur</h2>
          <p>
            Interface dédiée aux documents fournisseurs avec options de
            recherche, export, et indexation.
          </p>
          <GalleryBlock images={fournisseurPhotos} />
        </section>
      </div>
      <Footer />
    </div>
  );
}
