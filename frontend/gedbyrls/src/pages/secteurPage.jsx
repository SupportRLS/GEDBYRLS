import { useParams } from "react-router-dom";
import data from "../data/data.json";  
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import FonctionnaliteSlider from "../components/SectorSlider"; 

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
        <h1>{secteur.titre}</h1>
        <h2>{secteur.accroche}</h2>
        <p>{secteur.description}</p>
      </div>

      <div className="sectionEnjeux">
        <h3>{secteur.titreEnjeux}</h3>
        <p>{secteur.descriptionEnjeux}</p>
        <p>{secteur.titreEnjeux2}</p>
        <ul>
          {secteur.enjeux.map((enjeu, index) => (
            <li key={index}>{enjeu}</li>
          ))}
        </ul>
        <p>{secteur.paragrapheEnjeux}</p>
      </div>

      <div className="sectionThreePage">
        <h3>{secteur.titreFonctionnalité}</h3>
        <FonctionnaliteSlider fonctionnalites={secteur.fonctionnalites} />
      </div>

      <div className="sectionFourPage">
        <h3>{secteur.conformite.titre}</h3>
        <p>{secteur.conformite.contenu}</p>
      </div>

      <div className="sectionFivePage">
        <h3>{secteur.titrebenefices}</h3>
        <ul>
          {secteur.benefices.map((benefice, index) => (
            <li key={index}>{benefice}</li>
          ))}
        </ul>
      </div>

      <div className="sectionSixPage">
        <h3>{secteur.prise_en_main.titre}</h3>
        <p>{secteur.prise_en_main.contenu}</p>
      </div>

      <div className="sectionSevenPage">
        <h3>{secteur.formation.titre}</h3>
        <ul>
          {secteur.formation.contenu.map((formationItem, index) => (
            <li key={index}>{formationItem}</li>
          ))}
        </ul>
      </div>

      <div className="ctaSection">
        <h3>{secteur.cta}</h3>
        <p>{secteur.contenu}</p>
      </div>

      <Footer />
    </>
  );
}

export default SecteurPage;