import { useParams } from "react-router-dom";
import data from "../data/data.json";

import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import FonctionnaliteSlider from "../components/SectorSlider";
// import FeatureCard from "../components/FeatureCard.jsx";
import FeatureList from "../components/FeatureList.jsx";
import Button from "../components/ButtonComponents.jsx";
import ButtonRed from "../components/ButtonComponentsRed.jsx";
import TextImageLeft from "../components/TextImageLeft.jsx";
import TextImageRight from "../components/TextImageRight.jsx";


import "../components/style/secteurPage.css";

function SecteurPage() {
  const { slug } = useParams();
  const secteur = data.find((s) => s.slug === slug);

  if (!secteur) {
    return <div>Secteur non trouvé</div>;
  }

  return (
    <>
      <Header />

      <div className="sectionOnePage">
        <TextImageRight 
        title={secteur.titre}
        text={secteur.accroche}
        imageSrc={secteur.image}
        imageAlt={secteur.titre}
        />
        </div>
         <p className="descriptionSectionOne">{secteur.description}</p>

         
      <div className="sectionEnjeux">
        <div className="sectionEnjeuxBackground">
          <h3>{secteur.titreEnjeux}</h3>
          <p className="descriptionEnjeux">{secteur.descriptionEnjeux}</p>
         
        </div>
          <h2 className="titreEnjeux2">{secteur.titreEnjeux2}</h2>
<div className="displayGrid"> 
  <FeatureList type="enjeux" list={secteur.enjeux} />
</div>

        <p className="paragrapheEnjeux">{secteur.paragrapheEnjeux}</p>
      </div>

      <div className="sectionThreePage">
        <h3>{secteur.titreFonctionnalité}</h3>
        {/* Slider */}
        <FonctionnaliteSlider fonctionnalites={secteur.fonctionnalites} />
      </div>

      <div className="sectionFourPage">
        <h3>{secteur.conformite.titre}</h3>
        <p>{secteur.conformite.contenu}</p>
      </div>

      {/* TexteImageLeft  */}
      <div className="sectionFivePage">
        <TextImageLeft
          title={secteur.titrebenefices}
          text={secteur.benefices}
          imageSrc={secteur.imagebenefices}
          imageAlt={secteur.titrebenefices}
        
        />
      </div>
      {/* TexteImageRight  */}

      <div className="sectionSixPage">
        <TextImageRight
          title={secteur.prise_en_main.titre}
          text={secteur.prise_en_main.contenu}
          imageSrc={secteur.prise_en_main.image}
          imageAlt={secteur.prise_en_main.titre}
        />
      </div>

      {/* FeatureCard */}
      <div className="sectionSevenPage">
        <h3>{secteur.formation.titre}</h3>
        
       
<FeatureList type="formation" list={secteur.formation.contenu} />    
        
       
      </div>

      <div className="ctaSection">
        <h3>{secteur.cta}</h3>
        <p>{secteur.contenu}</p>
        <Button
          text="Je contacte"
          href="/contact" />

        <ButtonRed
          text="Télécharger le livre blanc"
        />

      </div>

      <Footer />
    </>
  );
}

export default SecteurPage;