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
import TextImageLeft from "../components/TextImageLeft";
//icons
import { FaCloudUploadAlt, FaSearch, FaLock, FaCog, FaCheckCircle, FaSignature, FaTags, FaFileAlt, FaMobileAlt, FaHistory, FaBell, FaPlug, FaDatabase,} from "react-icons/fa";
import LogoRLS from "../assets/logoRLS.webp";


function HomePage() {
const avantagesListe = [
  "Travaillez en toute flexibilité : que vous soyez au bureau, en télétravail ou en déplacement, vos fichiers restent accessibles à tout moment via une plateforme cloud sécurisée.",
"Accédez instantanément à vos données : retrouvez en quelques secondes n’importe quel document grâce à un moteur de recherche intelligent.",
"Gagnez en productivité : automatisez les tâches répétitives, fluidifiez vos processus de validation et réduisez le temps de traitement de vos flux documentaires.",
"Réduisez vos coûts : diminuez les dépenses liées à l’impression, au stockage papier et à la gestion manuelle des documents." 


];

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
 <div className="sectionThreePage">
  <h2>Optimisez votre efficacité et réduisez vos coûts opérationnels</h2>
  <p>Centralisez l’ensemble de vos documents professionnels dans un espace sécurisé, accessible à tout moment et depuis n’importe où. Notre solution de Gestion Électronique de Documents vous permet de gagner un temps précieux en facilitant la recherche, la consultation et le partage d’informations critiques.</p>
          </div>
          <TextImageLeft 
          list={avantagesListe}
          imageSrc="https://www.zeendoc.com/wp-content/uploads/2022/10/edition-en-ligne-office-ged.jpg"
          imageAlt={"Image de la solution GED"}

          />


       
        
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

      <div className="SectionFivePage">
        <h2>Les principales fonctionnalités </h2>
        <div className="featureCardsMap">
         <FeatureCard icon={<FaCloudUploadAlt />} title="Archivage électronique sécurisé" />
      <FeatureCard icon={<FaSearch />} title="Recherche intelligente" />
      <FeatureCard icon={<FaLock />} title="Gestion des droits d’accès" />
      <FeatureCard icon={<FaCheckCircle />} title="Workflow de validation" />
      <FeatureCard icon={<FaSignature />} title="Signature électronique" />
      <FeatureCard icon={<FaTags />} title="Indexation automatique" />
      <FeatureCard icon={<FaFileAlt />} title="Compatibilité multi-formats" />
      <FeatureCard icon={<FaMobileAlt />} title="Accès mobile et à distance" />
      <FeatureCard icon={<FaHistory />} title="Historique et traçabilité" />
      <FeatureCard icon={<FaBell />} title="Notifications automatiques" />
      <FeatureCard icon={<FaPlug />} title="Connexion avec outils métiers" />
      <FeatureCard icon={<FaDatabase />} title="Sauvegarde et redondance" />
          </div>
           </div>

           
          <h2> Prêt à simplifier la gestion de vos documents ?</h2>
          <div className="display-grid">
            <div className="sectionConvesion">
              <h3>Rejoignez les milliers d'entreprises qui nous font confiance</h3>
          <p> Faites le choix d'une solution moderne, performante et 100% sécurisée. Reprenez le contrôle sur vos informations, réduisez les tâches administratives et boostez la productivité de vos équipes.  
    Nos experts sont à votre écoute pour analyser vos besoins et vous accompagner dans votre transition numérique.
  </p>
  <div className="buttonSection">
    <ButtonContactHeader />
 <Button text="Demander une démonstration" />
  
  </div>
  </div>
  <FormHomePage />
   </div>
  
       
    </>
  )


}
export default HomePage;