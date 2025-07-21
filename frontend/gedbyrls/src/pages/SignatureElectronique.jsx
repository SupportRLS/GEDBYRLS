import React from "react";
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";
import { iconMap } from "../components/iconMap";
import "../components/style/signatureElec.css";
import Timeline from "../components/Timeline";
import TextImageRight from "../components/TextImageRight";
import MockupSign from "../assets/mockup_sign.png";
import ButtonComponentRed from "../components/ButtonComponentsRed";
import ButtonComponent from "../components/ButtonComponents"

const sections = [
  {
    content: [
      "La signature électronique s’impose aujourd’hui comme un pilier essentiel de toute stratégie de gestion électronique des documents. Que ce soit pour signer un contrat, valider une facture ou approuver un document interne, elle permet une validation rapide, sécurisée et conforme aux exigences légales actuelles.",
      "Sa valeur juridique est désormais équivalente à celle d’une signature manuscrite, notamment grâce au règlement eIDAS en vigueur dans l’Union européenne. En réduisant drastiquement les temps de traitement, elle contribue à fluidifier les workflows documentaires. Pour les utilisateurs de Zeendoc, cela signifie une intégration directe dans les processus métiers, sans rupture de chaîne, et avec une traçabilité complète. La signature électronique devient ainsi un levier stratégique pour gagner en efficacité et renforcer la conformité documentaire.",
    ],
  },
  {
    title: "Quels bénéfices concrets pour mon entreprise ?",
    content: [
      "La signature électronique ne se limite pas à une simple innovation technique : elle génère des gains mesurables. En moyenne, une entreprise économise jusqu’à 22 € par document signé lorsqu’elle adopte cette solution, selon une étude de l’Association Européenne de la Dématérialisation. Zeendoc, en l'intégrant de façon native, permet une adoption fluide et sans surcharge logicielle.",
      "Au-delà de l’aspect financier, la rapidité de traitement transforme la réactivité commerciale. Les bons de commande, devis et documents RH sont signés en quelques minutes, quel que soit le lieu où se trouvent les parties. L’expérience utilisateur est simplifiée, tout en renforçant la sécurité des échanges grâce à l’authentification forte et au chiffrement. Une GED bien pensée, combinée à la signature électronique, structure l’ensemble du cycle documentaire.",
    ],
  },
  {
    title: "La signature électronique est-elle vraiment sécurisée ?",
    content: [
      "La signature électronique repose sur des protocoles cryptographiques robustes et conformes aux normes internationales. Elle garantit l’intégrité du document et l’identité du signataire grâce à des certificats numériques délivrés par des autorités de confiance. Zeendoc intègre ces dispositifs avec rigueur, sans complexifier la prise en main pour les collaborateurs.",
      "Chaque signature apposée est horodatée et journalisée, ce qui permet une vérification à tout moment, même plusieurs années après. Cette traçabilité devient un argument majeur lors d’un contrôle ou d’un audit. De plus, la centralisation des documents signés dans l’espace sécurisé Zeendoc évite toute perte ou altération. La signature électronique, bien utilisée, devient donc un gage de conformité et de sérénité juridique pour l’entreprise.",
    ],
  },
  {
    title: "Comment l’intégrer efficacement dans ma GED ?",
    content: [
      "Intégrer la signature électronique dans une démarche de GED nécessite une approche structurée. Zeendoc facilite cette transition grâce à des workflows préconfigurés et adaptables selon les besoins métiers. Il suffit de quelques clics pour envoyer un document à signer, suivre son statut en temps réel, puis l’archiver automatiquement dans le bon dossier.",
      "Il est recommandé de former les utilisateurs aux bonnes pratiques, comme l’identification des signataires ou la gestion des droits d’accès. Une politique claire, définie dès l’amont, permet d’éviter les erreurs et d’optimiser les délais. En associant automatisation, sécurité et accessibilité, la signature électronique devient un vecteur d’agilité au cœur de votre GED.",
    ],
  },
  {
    title: "Quelles évolutions attendre dans les prochaines années ?",
    content: [
      "La signature électronique continue de se perfectionner avec l’essor de technologies comme la blockchain, l’identité numérique souveraine et l’IA. Ces innovations visent à renforcer encore plus la fiabilité et la transparence des processus de validation. Zeendoc anticipe ces mutations en intégrant progressivement ces outils dans ses services.",
      "Les entreprises doivent dès aujourd’hui préparer leur gouvernance documentaire pour accueillir ces évolutions. Une veille régulière, des mises à jour de conformité et une collaboration étroite avec leur fournisseur GED garantissent une adaptation fluide. La signature électronique, loin d’être figée, s’affirme comme une solution évolutive au service de la performance documentaire.",
    ],
  },
];


const steps = [
  {
    title: "1. Envoi du document",
    text: "Choisissez un document à signer et envoyez-le à votre destinataire en quelques clics.",
    icon: "send",
  },
  {
    title: "2. Signature électronique",
    text: "Le destinataire reçoit un lien sécurisé pour signer électroniquement le document.",
    icon: "sign",
  },
  {
    title: "3. Archivage automatique",
    text: "Le document signé est horodaté et classé automatiquement dans votre GED Zeendoc.",
    icon: "archive",
  },
];

function PageSignatureElectronique() {
  return (
  <>
    <div className="page-content">
      <Header />
      <main className="page-main">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-section"
        >
          <h1 className="page-title">
            Pourquoi la <span className="highlight-signature">signature électronique</span> devient-elle incontournable ?
          </h1>
          <TextImageRight
            imageSrc={MockupSign}
            imageAlt={"Mockup de la signature électronique"}
            text={"ZeenDoc vous permet de digitaliser vos documents en un temps record, sans complexité technique. Hébergée en France et conforme aux normes RGPD et NF Z42-013, la solution garantit la sécurité, la traçabilité et la valeur légale de vos fichiers. Gagnez en efficacité tout en assurant la conformité de votre entreprise."}
          />
          <div className="Button">
            <ButtonComponentRed
              text={"Demander une démo gratuite"}
  href={"/contact"} />
            <ButtonComponent
              text={"Découvrir ZeenDoc"}
              href={"https://www.zeendoc.com/"}
              />
              
          </div>
        </motion.section>

        <Timeline steps={steps} />

        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section"
          >
            {section.title && <h2 className="section-title">{section.title}</h2>}
            <div className="section-content">
              {section.content.map((paragraph, idx) => {
                const highlighted = paragraph.replaceAll(
                  /signature électronique/gi,
                  (match) => `<span class="highlight-signature">${match}</span>`
                );
                return (
                  <p
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: highlighted }}
                    className="paragraph"
                  />
                );
              })}
            </div>
          </motion.section>
        ))}

        <motion.div
          className="conclusion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          La <span className="highlight-signature">signature électronique</span> n’est plus un simple outil : c’est une réponse technique, légale et stratégique aux enjeux modernes de gestion documentaire.

          <div className="Button" style={{ marginTop: "25px" }}>
            <ButtonComponentRed
              text={"Zeendoc pour les TPE-PME"}
  href={"/secteur/tpe-pme"} />
            <ButtonComponent
              text={"Contacter un conseiller"}
  href={"/contact"} />
          </div>
        </motion.div>

      </main>
      <Footer />
    </div>
  </>
  );
}

export default PageSignatureElectronique;