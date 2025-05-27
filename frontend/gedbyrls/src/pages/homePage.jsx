import React from "react";
//css
import "../components/style/homePage.css";
//components
import FormHomePage from "../components/formHomePage";
import Header from "../components/header";
import ButtonContactHeader from "../components/ButtonContactHeader";
import Button from "../components/ButtonComponents";
import FeatureCard from "../components/FeatureCard";
import UseCaseCard from "../components/UseCaseCard";
import TestimonialSlider from "../components/testimonialSlider";
//icons
import { FaCloudUploadAlt, FaSearch, FaCog, FaLock } from "react-icons/fa";
import LogoRLS from "../assets/logoRLS.webp";


function HomePage() {


  return (
    <>
      <Header />
      <div className="SectionOnePage">
        <div className="textBlock">
          <h1>La solution GED qui simplifie votre quotidien</h1>
          <p>
            Simplifiez la gestion de vos documents et boostez votre productivité grâce à notre solution de GED intuitive et sécurisée.
            Centralisez l'ensemble de vos fichiers, accédez-y en quelques clics, automatisez vos processus administratifs et assurez la conformité de vos données.
            Notre objectif : vous faire gagner du temps, réduire vos coûts et libérer vos équipes des tâches répétitives.
            Découvrez dès maintenant comment transformer votre gestion documentaire en véritable levier de performance.
          </p>
          <div className="buttonSection">
            <ButtonContactHeader />
            <Button text="Télécharger le livre blanc" />

          </div>
        </div>

        <FormHomePage />
      </div>
      <div className="SectionTwoPage">
        <h2>Pourquoi choisir notre solution GED ?</h2>

        <div className="featureCards">
          <FeatureCard icon={<FaCloudUploadAlt />} title="Centralisation des documents" />
          <FeatureCard icon={<FaSearch />} title="Recherche rapide et efficace" />
          <FeatureCard icon={<FaCog />} title="Automatisation des processus" />
          <FeatureCard icon={<FaLock />} title="Sécurité renforcée des données" />
        </div>
      </div>

      <div className="SectionThreePage">
        <h2>Cas d'utilisation</h2>
        <div className="useCaseCards">
          <UseCaseCard
            logo={<img src={LogoRLS} alt="Logo Use Case 1" />}
            title="Gestion des factures"
            description="Centralisez et automatisez le traitement de vos factures fournisseurs."
            buttonText="Solution Comptable"
          />

          <UseCaseCard
             className="useCaseCardMiddle"
            logo={<img src={LogoRLS} alt="Logo Use Case 2" />}
            title="Archivage des contrats"
            description="Assurez la conformité et la traçabilité de vos contrats en un clic."
            buttonText="Solution PME"
          />
          <UseCaseCard
            logo={<img src={LogoRLS} alt="Logo Use Case 1" />}
            title="Gestion des ressources humaines"
            description="Simplifiez la gestion des dossiers du personnel et des documents RH."
            buttonText="Solution RH"
          />
        </div>
      </div>
      <div className="SectionFourPage">
        <TestimonialSlider />
      </div>
    </>
  )


}
export default HomePage;