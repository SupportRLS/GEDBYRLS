import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import Header from "../components/header";
import Footer from "../components/footer";
import FeatureCard from "../components/FeatureCard";
import ButtonContactHeader from "../components/ButtonContactHeader";
import ButtonComponents from "../components/ButtonComponents";
import FormHomePage from "../components/formHomePage";
import {
  ArrowRightIcon,
  FileTextIcon,
  CheckSquareIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  DatabaseIcon,
} from "lucide-react";
function ArchivageNumeriquePage() {
  return (
    <div>
      <main>
        <Header />
        {/* Hero Section */}
        <HeroSection />

        <BenefitsSection />

        <AbandonPaper />

        <OpportunitiesSection />

        <AdvantagesSection />
        <BenefitSection />

        <ZeendocSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
const AnimatedSection = ({ children, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
          },
        },
      }}
      className={`py-16 ${className}`}
    >
      {children}
    </motion.section>
  );
};
const HeroSection = () => {
  return (
    <AnimatedSection className="container mx-auto px-4 md:px-8 py-20 ">
      <div className="flex flex-col md:flex-row items-center"></div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            De l'archivage papier à l'archivage
            <span className="text-red-500"> numérique</span>
          </h1>
          <p className="text-gray-600 mb-8">
            La transformation digitale rend l’archivage numérique incontournable
            pour toute entreprise moderne. Fini les classeurs et les pertes de
            temps. Les documents sont désormais accessibles en un clic, partout
            et à tout moment. Avec une solution comme Zeendoc, l’indexation est
            automatique, le classement intelligent et la recherche instantanée.
            Vous gagnez en efficacité, en sécurité et en réactivité. L’archivage
            numérique n’est plus une option, c’est un levier de performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#"
              className="text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center"
              style={{ backgroundColor: "#F71344", color: "white" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#9C0526")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#F71344")
              }
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Demander une démo gratuite
            </motion.a>
            <motion.a
              href="#"
              className=" px-6 py-3 rounded-full font-medium hover:bg-orange-500 transition-colors flex items-center"
              style={{ backgroundColor: "#E9A431", color: "white" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#C38B2D")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#E9A431")
              }
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Essayer Zeendoc
            </motion.a>
          </div>
        </div>
        <div className="md:w-1/2">
          <motion.img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Signature électronique"
            className="rounded-lg shadow-xl w-full"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "70 %",
      description:
        "des entreprises ont réduit leurs coûts d'archivage après leur digitalisation",
      icon: <BarChart3Icon className="w-6 h-6 text-red-500" />,
    },
    {
      title: "60%",
      description:
        "de temps gagné dans la recherche documentaire avec un système numérique",
      icon: <BarChart3Icon className="w-6 h-6 text-red-500" />,
    },
    {
      title: "90%",
      description:
        "d'espace physique libéré grâce à la dématérialisation des archives",
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-500" />,
    },
  ];
  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center ">
          L'archivage numérique en{" "}
          <span className="text-[#F71344]">chiffres</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
          <p className="text-gray-600 max-w-6xl mx-auto">
            {" "}
            <span className="text-red-500 font-medium">
              L’archivage numérique
            </span>{" "}
            optimise l’organisation interne, réduit les coûts de stockage et
            garantit un haut niveau de sécurité. Contrairement à l’archivage
            papier, sujet aux incendies, vols ou inondations, les données
            numérisées sont protégées via des sauvegardes automatisées et des
            systèmes de chiffrement performants. Grâce à des outils comme
            Zeendoc, chaque document est indexé, horodaté et classé de façon
            intelligente. Le gain de temps est considérable, tout comme
            l’efficacité dans le traitement de l’information. L’archivage
            numérique permet aussi de répondre plus facilement aux obligations
            légales, notamment celles du Code du commerce et du RGPD. Cette
            traçabilité constitue une garantie précieuse en cas de contrôle ou
            de litige. Pour les entreprises, c’est un gage de sérieux, de
            transparence et de conformité.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const AbandonPaper = () => {
  return (
    <AnimatedSection className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Pourquoi abandonner{" "}
          <span className="text-red-500 font-bold">l’archivage papier</span>{" "}
          aujourd’hui ?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="text-gray-600 mb-6">
                L’
                <span className="text-red-500 font-medium">
                  archivage papier
                </span>{" "}
                a longtemps été la norme, mais il montre aujourd’hui ses limites
                face aux exigences modernes. L’archivage numérique s’impose
                comme une solution plus fiable, plus rapide et beaucoup moins
                coûteuse à long terme.
              </p>
              <p className="text-gray-600">
                En moyenne, un employé passe plus de 7 heures par semaine à
                rechercher des documents dans des classeurs physiques. Ce
                chiffre illustre à quel point l’archivage papier peut freiner la
                productivité. Passer à l'
                <span className="text-red-500 font-medium">
                  archivage numérique
                </span>{" "}
                , c’est adopter une gestion documentaire fluide, avec des
                données disponibles instantanément, quel que soit l’endroit où
                l’on travaille. Cette souplesse est devenue un enjeu essentiel
                pour toute structure moderne.
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500"
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ShieldCheckIcon className="w-6 h-6 text-red-500 mr-2" />5
                raisons d'abandonner l'archivage papier
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Perte de temps quotidienne</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Risque de perte ou de dégradation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Coûts de stockage élevés</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Manque de mobilité</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Non-conformité aux exigences actuelles</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
const AdvantagesSection = () => {
  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Quels avantages concrets offre l’archivage numérique ?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="Intégration GED"
              className="rounded-lg shadow-xl w-full"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="text-gray-600 mb-6">
                L’
                <span className="text-red-500 font-medium">
                  archivage numérique
                </span>{" "}
                optimise l’organisation interne, réduit les coûts de stockage et
                garantit un haut niveau de sécurité. Contrairement à l’archivage
                papier, sujet aux incendies, vols ou inondations, les données
                numérisées sont protégées via des sauvegardes automatisées.
              </p>
              <p className="text-gray-600 mb-6">
                Le gain de temps est considérable. L’
                <span className="text-red-500 font-medium">
                  archivage numérique
                </span>{" "}
                numérique permet aussi de répondre aux obligations légales (Code
                du commerce, RGPD), avec une traçabilité précieuse en cas de
                contrôle ou litige.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
};

const BenefitSection = () => {
  const benefits = [
    { title: "Accessibilité améliorée", icon: "iconeCloud" },
    { title: "Sécurité renforcée", icon: "iconeCadenas" },
    { title: "Collaboration facilitée", icon: "iconeFreelance" },
    { title: "Gain d'espace physique", icon: "iconeFichierArchive" },
    { title: "Conformité réglementaire", icon: "iconeUtilisateurVerifie" },
  ];
  return (
    <section className="px-4 py-16 bg-white">
      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full sm:w-[48%] lg:w-[30%]"
          >
            <FeatureCard title={benefit.title} icon={benefit.icon} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const OpportunitiesSection = () => {
  return (
    <section className="py-16 px-4 bg-[#FFFAF4]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#2E1D21] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          L’archivage numérique, un passage obligé ou une opportunité ?
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-[#2E1D21] mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          L’archivage numérique n’est plus une simple alternative : c’est une
          nécessité pour faire face à la croissance des volumes documentaires et
          aux exigences réglementaires toujours plus strictes.
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-[#2E1D21] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Pour les entreprises, cette évolution représente une opportunité de
          sécuriser, d’optimiser et de pérenniser leur patrimoine documentaire.
          Grâce à des solutions expertes comme <strong>Zeendoc</strong>, chaque
          organisation peut transformer l’obligation d’archiver en un véritable
          levier de performance.
        </motion.p>
      </div>
    </section>
  );
};

const ZeendocSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#2E1D21] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Zeendoc, un levier de performance pour votre archivage ?
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-[#2E1D21] mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Zeendoc accompagne les entreprises dans leur transition vers
          l’archivage numérique avec une approche centrée sur la simplicité
          d’usage et la conformité.
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-[#2E1D21] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ce système intelligent automatise le classement et facilite l’accès
          aux documents. Plus qu’un outil, Zeendoc est un catalyseur de
          transformation numérique pour votre organisation.
        </motion.p>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-5"
      >
        <h2 className=" font-bold">
          Prêt à simplifier la gestion de vos documents ?
        </h2>
        <div className="display-grid">
          <div className="sectionConvesion">
            <h3>
              Rejoignez les milliers d'entreprises qui nous font confiance
            </h3>
            <p>
              Faites le choix d'une solution moderne, performante et 100%
              sécurisée. Reprenez le contrôle sur vos informations, réduisez les
              tâches administratives et boostez la productivité de vos équipes.
              Nos experts sont à votre écoute pour analyser vos besoins et vous
              accompagner dans votre transition numérique.
            </p>
            <div className="buttonSection">
              <ButtonContactHeader />
              <ButtonComponents
                text={"Je passe à l'archivage Numérique"}
                href={"../"}
              />
            </div>
          </div>
          <FormHomePage />
        </div>
      </motion.div>
    </section>
  );
};

export default ArchivageNumeriquePage;
