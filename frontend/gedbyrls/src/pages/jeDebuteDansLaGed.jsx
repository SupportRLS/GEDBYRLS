import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import FeatureCard from "../components/FeatureCard";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import UseCaseCard from "../components/UseCaseCard";
import FaqComponents from "../components/FaqComponents";
import CardSlider from "../components/CardSlider";

import "../components/iconMap";
import "../components/style/debuteDansLaGed.css";
import Interface from "../assets/interface_zeendoc.webp";
import phone from "../assets/phone.svg";

function JeDebuteDansLaGed() {
  const items = [
    



    { title: "1. Vous déposez vos documents", description: "Par glisser-déposer, Par scanner connecté, Par e-mail ou synchronisation automatique", icon: "GrCloudComputer" },
    { title: "2. Zeendoc les classe pour vous", description: "La plateforme reconnaît le type de document (facture, bulletin de paie, contrat...), en extrait les informations importantes (date, montant, client...) et le range dans le bon dossier.", icon: "GrCloudComputer"},
    { title: "3. Vous retrouvez tout en un clic", description: "Besoin de retrouver une facture EDF de janvier 2023 ? Tapez 'EDF janvier 2023' et Zeendoc la retrouve instantanément, même si c’est un PDF scanné.", icon: "GrCloudComputer" },
    { title: "4. Vous partagez ou signez en toute sécurité", description: "Partagez un contrat avec un collaborateur ou un client, faites-le signer électroniquement, tout en gardant une traçabilité complète.", icon: "GrCloudComputer"},
    { title: "5. Vos documents sont archivés légalement", description: "Zeendoc garantit l’intégrité et la conservation de vos documents selon les normes en vigueur (NF Z42-013, RGPD...).", icon: "GrCloudComputer"},

  ];
    const startGed=[
"D’une interface claire et intuitive, pensée pour les utilisateurs non techniques",
 "D’un classement automatique des documents grâce à l’intelligence embarquée",
 "D’une recherche instantanée grâce à l’OCR (reconnaissance du texte) ",
 "D’un accès sécurisé en ligne, depuis n’importe quel appareil",
 "D’un accompagnement humain avec nos formateurs et support dédié"];

 
  return (
    <div className="jeDebuteDansLaGed">
        <Header />
    <div className="sectionTitle">
      <h1>
Tout ce qu’il faut savoir pour comprendre et adopter la Gestion Électronique de Documents simplement
      </h1>
      </div>

      <p>
      La Gestion Électronique de Documents, ou GED, peut sembler complexe lorsqu’on débute. Pourtant, il s’agit d’un outil précieux pour toutes les organisations, petites ou grandes, qui souhaitent gagner du temps, sécuriser leurs documents et améliorer leur productivité.
      </p>
      <p>
Avec Zeendoc, la GED devient accessible à tous. Vous n’avez pas besoin d’être informaticien ou expert en dématérialisation : la solution a été conçue pour être simple, intuitive et efficace.
      </p>

      <div className="feature-cards">
        <div className="lineOne">
        <FeatureCard icon={'GrCloudComputer'} title={"Centraliser tous vos documents (factures, contrats, bulletins de paie, courriers, etc.)"} />
        <FeatureCard icon={'FaFolderOpen'} title={"Classer automatiquement selon des règles intelligentes"}/>
        <FeatureCard icon={'FaSearch'} title={"Rechercher en quelques secondes n’importe quel document ou information"}/>
        </div>      
        <div className="lineTwo"> 
        <FeatureCard icon={'FaFileArchive'} title={"Partager de façon sécurisée avec vos équipes, clients ou partenaires"}/>
        <FeatureCard icon={'MdVerifiedUser'} title={"Archiver en respectant les obligations légales (URSSAF, CNIL, CNCC, etc.)"}/>
        </div>
        </div>
<p>En résumé, la GED vous aide à remplacer les classeurs poussiéreux, les documents égarés et les processus manuels par un système numérique intelligent.</p>
   
     <TextImageLeft 
      title={"Pourquoi débuter la GED avec Zeendoc ?"}
      text={"Parce que Zeendoc simplifie tout. Dès la première utilisation, vous profitez :"}
      list={startGed}
      imageSrc={Interface}
        imageAlt={"Interface de Zeendoc, la solution GED intuitive et accessible pour les débutants"}
      />
      <p>Vous commencez doucement, à votre rythme, avec des outils puissants mais faciles à prendre en main.</p>
      

 











            
  <TextImageRight 
  title={"Les bénéfices immédiats, même pour les débutants"}
list={[
  "Fini les pertes de documents",
  "Moins de papier, moins de stress",
  "Gain de temps administratif",
  "Collaboration facilitée",
  "Conformité assurée",
]}
imageSrc={"https://www.zeendoc.com/wp-content/uploads/2024/06/service-financier-logiciel-ged.jpg"}
imageAlt={"Bénéfices de la GED pour les débutants"}
 
/>
<p>Et surtout : vous gardez le contrôle total sur vos documents sans être un expert en informatique.</p>
<div className="useCaseCards">
<UseCaseCard 
logo={<img src={phone} alt="Logo phone" />}
title={"Une formation personnalisée "}
description={"Adaptée à votre métier et à vos besoins"}
buttonText={"Découvrir la formation"}
href={"/formation"}
/>
<UseCaseCard
logo={<img src={phone} alt="Logo phone" />}
title={"Un support technique en France"}
description={"disponible pour vous guider pas à pas"}
buttonText={"Contacter maintenant"}
href={"/contact"}
/>
<UseCaseCard
logo={<img src={phone} alt="Logo phone" />}
title={"Des parcours d'intégration simplifiés"}
description={"Prendre en main les fonctionnalités essentielles de Zeendoc en quelques minutes"}
buttonText={"Commencer mon intégration"}
href={"/intégration"}
/>
</div>

<div className="sectionAvis">
  <h2>Ils ont débuté comme vous, ils ne reviendraient en arrière pour rien au monde</h2>
  <p>"Je pensais que la GED, c’était uniquement pour les grosses structures. Zeendoc m’a prouvé le contraire. En une semaine, j’avais tout centralisé !"</p>
  <p>— Lucie, gérante d’une TPE de 4 salariés</p>
  <p>"Enfin une solution simple, claire, et qui me fait vraiment gagner du temps."</p>
  <p>-Michel, responsable administratif dans une association</p>
  </div>
<div className="featureCardsStartGed">
<FeatureCard icon={'GrCloudComputer'} title={"Démo gratuite et sans engagement"} />
<FeatureCard icon={'FaFolderOpen'} title={"Formation personnalisée pour débutants"} />
<FeatureCard icon={'FaUsers'} title={"Conseiller dédié pour vous accompagner"} />

</div>
      <div className="sectionFaq">
        <h2>Questions fréquentes sur la GED pour les débutants</h2>
        <FaqComponents 
          question={"Je n’ai jamais utilisé de logiciel de GED, est-ce compliqué ?"}
          answer={"Non. Zeendoc a été conçu pour les débutants. Vous n’avez pas besoin de compétences techniques, l’interface est intuitive."}
        />
        <FaqComponents 
          question={"Et mes documents, sont-ils en sécurité ?"}
          answer={"Oui. Zeendoc est hébergé en France, dans des datacenters certifiés HDS et ISO 27001, et respecte le RGPD."}
        />
        <FaqComponents 
          question={"Puis-je former mes collaborateurs ?"}
          answer={"Bien sûr. Nous proposons des formations pour les utilisateurs, en présentiel ou à distance."}
        />
         <FaqComponents 
          question={"Combien de temps faut-il pour se lancer ?"}
          answer={"Quelques minutes suffisent pour démarrer. L’interface est prête à l’emploi et l’accompagnement est inclus."}
        />
        </div>

     <CardSlider
        title="Comment fonctionne Zeendoc en pratique ?"
        description="Découvrez les étapes simples pour gérer vos documents."
        items={items}
      />
        <Footer />
    </div>
  );
}
export default JeDebuteDansLaGed;