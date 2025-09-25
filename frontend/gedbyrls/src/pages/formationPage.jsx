import React from "react";
// import des components
import { Helmet } from "react-helmet";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TextImageRight from "../components/TextImageRight.jsx";
import TextImageLeft from "../components/TextImageLeft";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/ButtonComponents";
import ButtonRed from "../components/ButtonComponentsRed.jsx";
//images
import imageFormation from "../assets/close-up.png";
import computerGed from "../assets/computer-ged.png";

import "../components/style/formationPage.css";

//icons
import {
  FaShieldAlt,
  FaSearch,
  FaFileAlt,
  FaClock,
  FaUsers,
} from "react-icons/fa";

function FormationPage() {
  const formationListe = [
    "Formation assurée par un expert de la solution",
    "Pédagogie orientée métier",
    "Mise en situation concrète",
    "Gain de temps et d'efficacité au quotidien",
    "Valorisation des pratiques internes ",
  ];
  return (
    <>
      <Helmet>
        <title>Formation - RLS </title>
        <meta
          name="description"
          content="Découvrez nos formations ZeenDoc pour maîtriser la gestion électronique de documents (GED) et optimiser l'archivage, la sécurité et l'accès à vos documents professionnels."
        />
      </Helmet>
      <div className="formationPage">
        <Header />
        <h1 className="font-bold">
          Formation ZeenDoc : Accompagner tous les professionnels dans la
          maîtrise de leur GED
        </h1>

        <div className="SectionOne">
          <TextImageRight
            imageSrc={imageFormation}
            imageAlt={"Image de la solution GED"}
            title="Formation ZeenDoc"
            text="Notre formation ZeenDoc est conçue pour accompagner tous les professionnels, qu'ils soient novices ou expérimentés, dans la maîtrise de leur GED. Grâce à une approche pédagogique adaptée, nous vous guidons pas à pas pour exploiter pleinement les fonctionnalités de notre solution et optimiser votre gestion documentaire."
          >
            <div className="buttonOneSection">
              <Button text={"Je souhaite une démo"} href={"/contact"} />
              <ButtonRed text={"Voir la FAQ"} href={"/ressources/faq"} />
            </div>
          </TextImageRight>
        </div>

        <div className="sectionOneText">
          <h2>Un formateur dédié</h2>
          <p>
            Nos formations sont assurées par un expert ZeenDoc membre de notre
            équipe, qui connaît les problématiques terrain et vous accompagne
            pas à pas, avec un langage clair et accessible.
          </p>
          <p className="poppins-medium-italic">
            “Notre objectif n’est pas de vous surcharger d’informations
            techniques, mais de vous permettre de tirer un vrai bénéfice métier
            de ZeenDoc, dès la première utilisation.”{" "}
          </p>
          <p>— Rémy, formateur GED</p>
        </div>

        <div className="feature-cards ">
          <div className="lineOne">
            <FeatureCard
              icon={<FaShieldAlt />}
              title="Sécurité et confidentialité des données"
            />
            <FeatureCard
              icon={<FaSearch />}
              title="Accès rapide à l'information pertinente"
            />
            <FeatureCard
              icon={<FaFileAlt />}
              title="Archivage légal des documents"
            />
          </div>
          <div className="lineTwo">
            <FeatureCard
              icon={<FaClock />}
              title="Gain de temps sur les tâches administratives"
            />
            <FeatureCard
              icon={<FaUsers />}
              title="Gestion collaborative des dossiers"
            />
          </div>
        </div>

        <div className="sectionTwo">
          <TextImageLeft
            imageSrc={computerGed}
            imageAlt="Ordinateur avec interface GED"
            title="Maîtrisez les outils ZeenDoc"
            list={formationListe}
          >
            <div className="buttonTwoSection">
              <ButtonRed
                text="Télécharger un Cas Client"
                href="/ressources/cas-client"
              />
              <Button text="Je souhaite une démo" href="/contact" />
            </div>
          </TextImageLeft>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FormationPage;
