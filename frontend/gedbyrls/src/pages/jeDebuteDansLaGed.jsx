import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import UseCaseCard from "../components/UseCaseCard";
import FaqComponents from "../components/FaqComponents";
import CardSlider from "../components/CardSlider";

import { Helmet } from "react-helmet";
import "../components/iconMap";
import "../components/style/debuteDansLaGed.css";
import Interface from "../assets/mockuphomeboard.webp";
import PhotoPersonne from "../assets/personne_devant_pc.webp";
import ButtonComponentRed from "../components/ButtonComponentsRed";
import ButtonComponent from "../components/ButtonComponents";
import Image3 from "../assets/imageGed.webp";
function JeDebuteDansLaGed() {
  const items = [
    {
      title: "1. Vous déposez vos documents",
      description:
        "Par glisser-déposer, Par scanner connecté, Par e-mail ou synchronisation automatique",
      icon: "iconeUpload",
    },
    {
      title: "2. Zeendoc les classe pour vous",
      description:
        "La plateforme reconnaît le type de document (facture, bulletin de paie, contrat...), en extrait les informations importantes (date, montant, client...) et le range dans le bon dossier.",
      icon: "iconeMagie",
    },
    {
      title: "3. Vous retrouvez tout en un clic",
      description:
        "Besoin de retrouver une facture EDF de janvier 2023 ? Tapez 'EDF janvier 2023' et Zeendoc la retrouve instantanément, même si c’est un PDF scanné.",
      icon: "FiSiconeRechercheearch",
    },
    {
      title: "4. Vous partagez ou signez en toute sécurité",
      description:
        "Partagez un contrat avec un collaborateur ou un client, faites-le signer électroniquement, tout en gardant une traçabilité complète.",
      icon: "iconeRecherche",
    },
    {
      title: "5. Vos documents sont archivés légalement",
      description:
        "Zeendoc garantit l’intégrité et la conservation de vos documents selon les normes en vigueur (NF Z42-013, RGPD...).",
      icon: "iconeCadenas",
    },
  ];
  const startGed = [
    "D’une interface claire et intuitive, pensée pour les utilisateurs non techniques",
    "D’un classement automatique des documents grâce à l’intelligence embarquée",
    "D’une recherche instantanée grâce à l’OCR (reconnaissance du texte) ",
    "D’un accès sécurisé en ligne, depuis n’importe quel appareil",
    "D’un accompagnement humain avec nos formateurs et support dédié",
  ];

  return (
    <>
      <Helmet>
        <title> Je débute dans la Ged - RLS </title>
        <meta
          name="description"
          content="Tout ce qu’il faut savoir pour comprendre et adopter la Gestion Électronique de Documents (GED) simplement avec Zeendoc."
        />
      </Helmet>
      <div className="jeDebuteDansLaGed">
        <Header />
        <div className="sectionTitle">
          <h1 className=" font-bold">
            Tout ce qu’il faut savoir pour comprendre et adopter la Gestion
            Électronique de Documents simplement
          </h1>
          <TextImageRight
            title="La GED, c’est quoi ?"
            text="La GED (Gestion Électronique de Documents) permet de stocker, classer, rechercher, partager et sécuriser tous vos documents professionnels sous format numérique. Grâce à elle, vous centralisez toutes vos informations au même endroit, accessibles en quelques clics. Fini les papiers éparpillés, les armoires surchargées, les doublons ou les pertes de documents importants. Vous gagnez du temps au quotidien, améliorez votre organisation, et répondez plus facilement aux exigences légales en matière d’archivage et de confidentialité."
            imageSrc={PhotoPersonne}
            imageAlt="Une personne devant un ordinateur, se prennant la tête avec la gestion de ses documents"
          />
        </div>

        <p>
          La Gestion Électronique de Documents, ou GED, peut sembler complexe
          lorsqu’on débute. Pourtant, il s’agit d’un outil précieux pour toutes
          les organisations, petites ou grandes, qui souhaitent gagner du temps,
          sécuriser leurs documents et améliorer leur productivité.
        </p>
        <p>
          Avec Zeendoc, la GED devient accessible à tous. Vous n’avez pas besoin
          d’être informaticien ou expert en dématérialisation : la solution a
          été conçue pour être simple, intuitive et efficace.
        </p>
        <div className="buttonSection">
          <ButtonComponentRed
            text={"Contactez-nous pour débuter"}
            href={"/contact"}
          />
          <ButtonComponent
            text={"En savoir plus sur Zeendoc"}
            href={"https://www.zeendoc.com/"}
          />
        </div>
        <div className="feature-cards">
          <div className="lineOne">
            <FeatureCard
              icon={"iconeCloud"}
              title={
                "Centraliser tous vos documents (factures, contrats, bulletins de paie, courriers, etc.)"
              }
            />
            <FeatureCard
              icon={"iconeDossier"}
              title={"Classer automatiquement selon des règles intelligentes"}
            />
            <FeatureCard
              icon={"iconeRechercheAlt"}
              title={
                "Rechercher en quelques secondes n’importe quel document ou information"
              }
            />
          </div>
          <div className="lineTwo">
            <FeatureCard
              icon={"iconeFichierArchive"}
              title={
                "Partager de façon sécurisée avec vos équipes, clients ou partenaires"
              }
            />
            <FeatureCard
              icon={"iconeUtilisateurVerifie"}
              title={
                "Archiver en respectant les obligations légales (URSSAF, CNIL, CNCC, etc.)"
              }
            />
          </div>
        </div>

        <p>
          En résumé, la GED vous aide à remplacer les classeurs poussiéreux, les
          documents égarés et les processus manuels par un système numérique
          intelligent.
        </p>

        <TextImageLeft
          title={"Pourquoi débuter la GED avec Zeendoc ?"}
          text={
            "Parce que Zeendoc simplifie tout. Dès la première utilisation, vous profitez :"
          }
          list={startGed}
          imageSrc={Interface}
          imageAlt={
            "Interface de Zeendoc, la solution GED intuitive et accessible pour les débutants"
          }
        />
        <p>
          Vous commencez doucement, à votre rythme, avec des outils puissants
          mais faciles à prendre en main.
        </p>

        <div className="SliderSection">
          <h2 className="font-bold">
            Comment fonctionne Zeendoc en pratique ?
          </h2>
          <p> Découvrez les étapes simples pour gérer vos documents.</p>
          <CardSlider items={items} />
        </div>

        <TextImageRight
          title="Les bénéfices immédiats, même pour les débutants"
          text="Découvrez tous les avantages concrets de la GED dès la première utilisation."
          list={[
            "Fini les pertes de documents",
            "Moins de papier, moins de stress",
            "Gain de temps administratif",
            "Collaboration facilitée",
            "Conformité assurée",
          ]}
          imageSrc={Image3}
          imageAlt={"Bénéfices de la GED pour les débutants"}
        />
        <p>
          Et surtout : vous gardez le contrôle total sur vos documents sans être
          un expert en informatique.
        </p>
        <div className="buttonSection">
          <ButtonComponentRed
            text={"Obtenez plus d’informations"}
            href={"/contact"}
          />
          <ButtonComponent
            text={"Notre FAQ pour les débutants"}
            href={"/ressources/faq"}
          />
        </div>
        <div className="bg-white w-full py-16 mt-15">
          <div className="max-w-[1440px] mx-auto px-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <UseCaseCard
                title={"Une formation personnalisée "}
                description={
                  "Une formation, entièrement conçue pour s’adapter à vos besoins spécifiques et à votre propre rythme. "
                }
                buttonText={"Découvrir la formation"}
                href={"/formation"}
              />
              <UseCaseCard
                title={"Un support technique en France"}
                description={
                  "Disponible pour vous guider pas à pas dans la prise en main de Zeendoc"
                }
                buttonText={"Contacter maintenant"}
                href={"/contact"}
              />
              <UseCaseCard
                title={"Des parcours d'intégration simplifiés"}
                description={
                  "Prendre en main les fonctionnalités essentielles de Zeendoc en quelques minutes"
                }
                buttonText={"Commencer mon intégration"}
                href={"/intégration"}
              />
            </div>
          </div>
        </div>

        <div className="sectionAvis">
          <h2 className="font-bold">
            Ils ont débuté comme vous, ils ne reviendraient en arrière pour rien
            au monde
          </h2>

          <div className="avis-wrapper">
            <div className="displayGridAvis1">
              <p>
                "Je pensais que la GED, c’était uniquement pour les grosses
                structures. Zeendoc m’a prouvé le contraire. En une semaine,
                j’avais tout centralisé !"
              </p>
              <p>— Lucie, gérante d’une TPE de 4 salariés</p>
            </div>

            <div className="displayGridAvis2">
              <p>
                "Enfin une solution simple à prendre en main, qui me fait
                vraiment gagner du temps au quotidien, même sans être expert en
                informatique."
              </p>
              <p>– Michel, responsable administratif </p>
            </div>
          </div>
        </div>
        <div className="buttonSection">
          <ButtonComponentRed
            text={"Téléchargez un cas client"}
            href={"/ressources/cas-client"}
          />
          <ButtonComponent
            text={"Les informations pour les PME "}
            href={"/secteur/Tpe-Pme"}
          />
        </div>
        <div className="featureCardsStartGed">
          <FeatureCard
            icon={"iconeCloud"}
            title={"Démo gratuite et sans engagement"}
          />
          <FeatureCard
            icon={"iconeDossier"}
            title={"Formation personnalisée pour débutants"}
          />
          <FeatureCard
            icon={"iconeUtilisateur"}
            title={"Conseiller dédié pour vous accompagner"}
          />
        </div>
        <div className="sectionFaq">
          <h2 className="font-bold pb-8">
            Questions fréquentes sur la GED pour les débutants
          </h2>
          <FaqComponents
            question={
              "Je n’ai jamais utilisé de logiciel de GED, est-ce compliqué ?"
            }
            answer={
              "Non. Zeendoc a été conçu pour les débutants. Vous n’avez pas besoin de compétences techniques, l’interface est intuitive."
            }
          />
          <FaqComponents
            question={"Et mes documents, sont-ils en sécurité ?"}
            answer={
              "Oui. Zeendoc est hébergé en France, dans des datacenters certifiés HDS et ISO 27001, et respecte le RGPD."
            }
          />
          <FaqComponents
            question={"Puis-je former mes collaborateurs ?"}
            answer={
              "Bien sûr. Nous proposons des formations pour les utilisateurs, en présentiel ou à distance."
            }
          />
          <FaqComponents
            question={"Combien de temps faut-il pour se lancer ?"}
            answer={
              "Quelques minutes suffisent pour démarrer. L’interface est prête à l’emploi et l’accompagnement est inclus."
            }
          />
        </div>

        <div className="buttonSection pb-8">
          <ButtonComponentRed
            text={"Commencer mon intégration"}
            href={"/contact"}
          />
          <ButtonComponent
            text={"Plus d'informations ? "}
            href={"/ressources/faq"}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default JeDebuteDansLaGed;
