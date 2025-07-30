import React from "react";
import { motion } from "framer-motion";

import Header from "../components/header";
import Footer from "../components/footer";
import ButtonComponentRed from "../components/ButtonComponentsRed";
import ButtonComponent from "../components/ButtonComponents";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF4] font-['Roboto',sans-serif] text-[#2E1D21]">
      <Header />

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-[#FFFAF4] to-[#B3CFCD]/20 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Sécurisation, conformité RGPD et traçabilité des documents avec{" "}
          <span className="text-[#F71344]">Zeendoc</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#2E1D21]/80 max-w-3xl mx-auto leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          Une solution complète pour protéger, gérer et tracer vos documents
          numériques en toute conformité.
        </motion.p>
      </header>

      {/* Section Générique */}
      {[
        {
          id: "securite",
          title:
            "Comment Zeendoc garantit la sécurité des documents numériques ?",
          image: "/file.svg",
          alt: "Sécurité des documents",
          content: [
            "Zeendoc met en œuvre une protection avancée des données pour répondre aux exigences actuelles de cybersécurité. Chaque document est stocké, chiffré et géré dans un environnement sécurisé, certifié ISO 27001.",
            "Grâce à l'hébergement en France sur des serveurs redondés, Zeendoc limite les risques liés à la perte de données ou à l'accès non autorisé.",
            "Toutes les opérations (consultation, modification, suppression) sont historisées de manière inviolable.",
            "En centralisant les documents dans une plateforme unique, l'entreprise supprime les silos d'information et réduit les erreurs humaines.",
          ],
        },
        {
          id: "rgpd",
          title: "Quels sont les engagements de Zeendoc en matière de RGPD ?",
          image: "/globe.svg",
          alt: "Conformité RGPD",
          reverse: true,
          content: [
            "Zeendoc est pleinement conforme au Règlement Général sur la Protection des Données. Il intègre dès la conception des fonctionnalités pensées pour la protection de la vie privée.",
            "L'utilisateur dispose à tout moment de droits clairs sur ses données : accès, modification, anonymisation et suppression.",
            "Zeendoc respecte ainsi les principes fondamentaux du RGPD, tels que la minimisation des données et la limitation de finalité.",
          ],
          highlight: {
            text: "Selon une étude menée en 2024 par Archimag, seules ",
            stat: "38%",
            extra:
              " des PME françaises affirment avoir mis en œuvre une politique RGPD réellement opérationnelle.",
          },
        },
        {
          id: "tracabilite",
          title: "Comment la traçabilité des documents est-elle assurée ?",
          image: "/window.svg",
          alt: "Traçabilité des documents",
          content: [
            "Avec Zeendoc, chaque action sur un document est enregistrée, datée et liée à un utilisateur.",
            "Toutes les étapes de vie du document sont conservées dans un journal infalsifiable.",
            "Ce système est particulièrement utile pour les secteurs réglementés comme la santé, l’assurance ou les marchés publics.",
          ],
        },
      ].map((section, index) => (
        <section
          key={section.id}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${
            index % 2 === 1 ? "bg-[#B3CFCD]/10" : "bg-white"
          }`}
        >
          <div
            className={`max-w-6xl mx-auto flex flex-col ${
              section.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12`}
          >
            <div className="md:w-1/2">
              <img
                src={section.image}
                alt={section.alt}
                className="w-full h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {section.title}
              </h2>
              {section.content.map((p, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-[#2E1D21]/90"
                >
                  {p}
                </p>
              ))}

              {section.highlight && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#F71344]">
                  <p className="text-lg leading-relaxed text-[#2E1D21]/90">
                    {section.highlight.text}
                    <span className="text-3xl font-bold text-[#F71344]">
                      {section.highlight.stat}
                    </span>
                    {section.highlight.extra}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Bénéfices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#B3CFCD]/20 to-[#FFFAF4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Quels bénéfices pour l'entreprise et ses utilisateurs ?
          </h2>
          <div className="prose prose-lg max-w-none text-left space-y-6 mb-12">
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
            <ButtonComponentRed>Découvrir Zeendoc</ButtonComponentRed>
            <ButtonComponent>Demander une démo</ButtonComponent>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityPage;
