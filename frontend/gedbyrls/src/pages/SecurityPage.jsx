import React from "react";
import { motion } from "framer-motion";

import Header from "../components/header";
import Footer from "../components/footer";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import ButtonComponentRed from "../components/ButtonComponentsRed";
import ButtonComponent from "../components/ButtonComponents";

import imageTest from "/secteurs/architecte/architect1.webp";

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
          imageSrc={imageTest}
          imagesAlt="Sécurisation des documents"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <ButtonComponentRed text="hello" href="/secteur/architect" />
            <ButtonComponent text="hello" href="/secteur/architect" />
          </div>
        </TextImageRight>
      </motion.div>

      {/* Section 1 */}
      <motion.div
        style={{ backgroundColor: "#EBE2D4" }}
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
          imageSrc={imageTest}
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
          imageSrc={imageTest}
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
        style={{ backgroundColor: "#EBE2D4" }}
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
          imageSrc={imageTest}
          imageAlt="Traçabilité des documents"
        />
      </motion.div>

      {/* Bénéfices */}
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Quels bénéfices pour l'entreprise et ses utilisateurs ?
          </h2>
          <div className="prose prose-lg max-w-none text-left space-y-6 mt-8 mb-12">
            <p>
              La{" "}
              <span className="text-[#F71344] font-semibold">
                sécurisation RGPD traçabilité Zeendoc
              </span>{" "}
              est une réalité quotidienne. Elle renforce la confiance des
              utilisateurs, réduit la charge des équipes IT et protège la
              réputation de l'entreprise.
            </p>
            <p>
              La GED devient ainsi un{" "}
              <span className="text-[#E9A431] font-semibold">
                atout stratégique
              </span>{" "}
              : optimisation des processus, réduction des coûts et conformité
              renforcée.
            </p>
            <p>
              Zeendoc évolue avec la législation et les usages : son interface
              est pensée pour les utilisateurs métiers, pas uniquement pour les
              experts techniques.
            </p>
            <p className="text-center text-xl font-semibold">
              En adoptant Zeendoc, vous choisissez une GED fiable, transparente
              et conforme, où{" "}
              <span className="text-[#F71344]">
                sécurisation, RGPD et traçabilité
              </span>{" "}
              deviennent des piliers de votre transformation numérique.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonComponentRed text="Découvrir Zeendoc" />
            <ButtonComponent text="Demander une démo" />
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default SecurityPage;
