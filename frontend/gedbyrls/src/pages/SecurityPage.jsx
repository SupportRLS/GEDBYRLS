import React from "react";
import { motion } from "framer-motion";
import { CheckSquareIcon, ShieldCheckIcon, ClockIcon } from "lucide-react";

import Header from "../components/header";
import Footer from "../components/footer";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import ButtonComponentRed from "../components/ButtonComponentsRed";
import ButtonComponent from "../components/ButtonComponents";
import FormHomePage from "../components/formHomePage";
import RGPD1 from "../assets/rgpd1.webp";
import RGPD2 from "../assets/rgpd2.webp";
import RGPD3 from "../assets/rgpd3.webp";
import RGPD4 from "../assets/rgpd4.png";
// Animation de base pour chaque section
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const highlights = [
  {
    highlight: {
      text: "Selon une étude menée en 2024 par Archimag, seules ",
      stat: "38%",
      extra:
        " des PME françaises affirment avoir mis en œuvre une politique RGPD réellement opérationnelle.",
    },
  },
];

// Composant pour la section Bénéfices
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Sécurisation avancée",
      description:
        "Vos documents sont protégés grâce au chiffrement et à un stockage sécurisé certifié ISO 27001.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Conformité RGPD",
      description:
        "Respect total du RGPD : accès, modification, anonymisation et suppression des données garantis.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Traçabilité totale",
      description:
        "Chaque action sur un document est historisée pour un suivi complet et infalsifiable.",
      icon: <CheckSquareIcon className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Gain de temps",
      description:
        "Centralisation et automatisation des processus pour réduire la charge administrative.",
      icon: <ClockIcon className="w-6 h-6 text-red-500" />,
    },
  ];

  return (
    <div className="py-20" style={{ backgroundColor: "#fff5e9" }}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16!">
          Quels bénéfices concrets pour votre entreprise ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            En adoptant Zeendoc, vous bénéficiez d'une solution complète pour la{" "}
            <span className="text-red-500 font-medium">sécurisation</span>, la{" "}
            <span className="text-red-500 font-medium">conformité RGPD</span> et
            la <span className="text-red-500 font-medium">traçabilité</span> de
            vos documents. Vos équipes gagnent en efficacité tout en respectant
            les normes légales et réglementaires.
          </p>
        </div>
      </div>
    </div>
  );
};

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF4]">
      <Header />

      {/* Hero Section */}
      <motion.header
        className="pt-10 px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Sécurisation, conformité RGPD et traçabilité des documents avec{" "}
          <span className="text-[#F71344]">Zeendoc</span>
        </h1>
      </motion.header>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <TextImageRight
          title="Une solution complète pour protéger, gérer et tracer vos documents numériques en toute conformité."
          text="Zeendoc est une GED (Gestion Électronique de Documents) qui répond aux enjeux de sécurité, de conformité RGPD et de traçabilité des documents. Grâce à son infrastructure sécurisée et ses fonctionnalités avancées, Zeendoc garantit la protection de vos données tout en facilitant leur gestion au quotidien."
          imageSrc={RGPD3}
          imagesAlt="Sécurisation des documents"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <ButtonComponentRed
              text="Découvrir Zeendoc"
              href="/secteur/architect"
            />
            <ButtonComponent
              text="Demander une démo"
              href="/secteur/architect"
            />
          </div>
        </TextImageRight>
      </motion.div>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Section 1 */}
      <motion.div
        style={{ backgroundColor: "#fff5e9 " }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <TextImageLeft
          title="Comment Zeendoc garantit la sécurité des documents numériques ?"
          text="Zeendoc met en œuvre une protection avancée des données pour répondre aux exigences actuelles de cybersécurité. Chaque document est stocké, chiffré et géré dans un environnement sécurisé, certifié ISO 27001.
Grâce à l'hébergement en France sur des serveurs redondés, Zeendoc limite les risques liés à la perte de données ou à l'accès non autorisé.
Toutes les opérations (consultation, modification, suppression) sont historisées de manière inviolable.
En centralisant les documents dans une plateforme unique, l'entreprise supprime les silos d'information et réduit les erreurs humaines."
          imageSrc={RGPD1}
          imageAlt="sécurisation de vos documents"
        />
      </motion.div>

      {/* Section RGPD + highlight */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <TextImageRight
          title="Quels sont les engagements de Zeendoc en matière de RGPD ?"
          text="Zeendoc est pleinement conforme au Règlement Général sur la Protection des Données. Il intègre dès la conception des fonctionnalités pensées pour la protection de la vie privée.
L'utilisateur dispose à tout moment de droits clairs sur ses données : accès, modification, anonymisation et suppression.
Zeendoc respecte ainsi les principes fondamentaux du RGPD, tels que la minimisation des données et la limitation de finalité."
          imageSrc={RGPD2}
          imageAlt="Conformité RGPD"
        >
          {highlights.map((section, index) => (
            <section key={index}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#F71344] mt-6">
                <p className="text-lg leading-relaxed text-[#2E1D21]/90">
                  {section.highlight.text}
                  <span className="text-3xl font-bold text-[#F71344]">
                    {section.highlight.stat}
                  </span>
                  {section.highlight.extra}
                </p>
              </div>
            </section>
          ))}
        </TextImageRight>
      </motion.div>

      {/* Section traçabilité */}
      <motion.div
        className="mb-20"
        style={{ backgroundColor: "#fff5e9" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <TextImageLeft
          title="Comment la traçabilité des documents est-elle assurée ?"
          text="Avec Zeendoc, chaque action sur un document est enregistrée, datée et liée à un utilisateur.
Toutes les étapes de vie du document sont conservées dans un journal infalsifiable.
Ce système est particulièrement utile pour les secteurs réglementés comme la santé, l’assurance ou les marchés publics."
          imageSrc={RGPD4}
          imageAlt="Traçabilité des documents"
        />
      </motion.div>
      <h2 className=" font-bold ">
        {" "}
        Prêt à simplifier la gestion de vos documents ?
      </h2>
      {/* grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center justify-items-center px-6  */}
      <div className="display-grid container mx-auto px-3 lg:grid-cols-[2fr_1fr] items-center justify-items-center ">
        <div className="sectionConvesion">
          <h3>Rejoignez les milliers d'entreprises qui nous font confiance</h3>
          <p>
            {" "}
            Faites le choix d'une solution moderne, performante et 100%
            sécurisée. Reprenez le contrôle sur vos informations, réduisez les
            tâches administratives et boostez la productivité de vos équipes.
            Nos experts sont à votre écoute pour analyser vos besoins et vous
            accompagner dans votre transition numérique.
          </p>
          <div className="buttonSection">
            <ButtonComponentRed text="je veux être contacté" href="/contact" />
            <ButtonComponent
              text="Demander une démonstration"
              href="/contact"
            />
          </div>
        </div>

        <FormHomePage />
      </div>
      <Footer />
    </div>
  );
};

export default SecurityPage;
