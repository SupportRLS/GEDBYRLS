import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "../components/header";
import Footer from "../components/footer";

import {
  ArrowRightIcon,
  FileTextIcon,
  CheckSquareIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  DatabaseIcon,
} from "lucide-react";
function ElectronicSign() {
  return (
    <div>
      <main>
        <Header />
        {/* Hero Section */}
        <HeroSection />
        {/* Process Section */}
        <ProcessSection />
        {/* Benefits Section */}
        <BenefitsSection />
        {/* Security Section */}
        <SecuritySection />
        {/* Integration Section */}
        <IntegrationSection />
        {/* Future Section */}
        <FutureSection />
        {/* CTA Section */}
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
            Pourquoi la{" "}
            <span className="text-red-500">signature électronique</span>{" "}
            devient-elle incontournable ?
          </h1>
          <p className="text-gray-600 mb-8">
            Zeendoc vous permet de digitaliser vos documents en un temps record,
            une comptable technique, neutre de risque et conforme aux normes
            EIDAS et légales. Intégrez facilement la solution Zeendoc à vos
            outils de gestion d'entreprise et à la valeur légale de vos
            fichiers. Signez en sécurité tout en assurant la conformité de votre
            entreprise.
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
const ProcessSection = () => {
  return (
    <AnimatedSection className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Comment se déroule la signature avec Zeendoc ?
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-red-100 transform -translate-x-1/2"></div>
          <div className="space-y-24 relative">
            {/* Step 1 */}
            <StepItem
              number={1}
              title="Envoi du document"
              description="Choisissez le document à signer et envoyez-le à votre destinataire en quelques clics."
              icon={<FileTextIcon className="w-10 h-10 text-white" />}
              position="left"
            />
            {/* Step 2 */}
            <StepItem
              number={2}
              title="Signature électronique"
              description="Le destinataire reçoit un lien sécurisé pour signer le document en ligne, sans aucun compte à créer."
              icon={<CheckSquareIcon className="w-10 h-10 text-white" />}
              position="right"
            />
            {/* Step 3 */}
            <StepItem
              number={3}
              title="Archivage automatique"
              description="Le document signé est horodaté et classé automatiquement dans votre GED."
              icon={<DatabaseIcon className="w-10 h-10 text-white" />}
              position="left"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
const StepItem = ({ number, title, description, icon, position }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const variants = {
    hidden: {
      opacity: 0,
      x: position === "left" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`flex flex-col ${
        position === "right" ? "md:flex-row-reverse" : "md:flex-row"
      } items-center`}
    >
      <div className="md:w-5/12">
        <div
          className={`flex ${
            position === "right" ? "md:justify-start" : "md:justify-end"
          } mb-8 md:mb-0`}
        >
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                {number}
              </span>
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      <div className="md:w-2/12 flex justify-center">
        <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center z-10">
          {icon}
        </div>
      </div>
      <div className="md:w-5/12"></div>
    </motion.div>
  );
};
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Gain de temps",
      description:
        "Réduisez drastiquement les délais de signature de vos documents",
      icon: <BarChart3Icon className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Économies",
      description: "Jusqu'à 4€ économisés par document signé électroniquement",
      icon: <BarChart3Icon className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Conformité légale",
      description: "Une solution conforme aux normes européennes EIDAS",
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Traçabilité totale",
      description: "Suivez en temps réel l'état d'avancement de vos signatures",
      icon: <CheckSquareIcon className="w-6 h-6 text-red-500" />,
    },
  ];
  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Quels bénéfices concrets pour mon entreprise ?
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
            La{" "}
            <span className="text-red-500 font-medium">
              signature électronique
            </span>{" "}
            représente une solution sécurisée et conforme aux normes
            européennes. En choisissant une entreprise économisez jusqu'à 4€ par
            document signé. Grâce à cette solution, gérez une étude de
            l'Association Européenne de la Dématérialisation, la signature
            électronique permet une dégestion fluide et sans contraintes de vos
            signatures.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};
const SecuritySection = () => {
  return (
    <AnimatedSection className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          La signature électronique est-elle vraiment sécurisée ?
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
                La{" "}
                <span className="text-red-500 font-medium">
                  signature électronique
                </span>{" "}
                repose sur des protocoles cryptographiques robustes et conformes
                aux normes internationales. Elle garantit l'intégrité du
                document et l'identité du signataire grâce à des certificats
                numériques délivrés par des autorités de certification
                reconnues.
              </p>
              <p className="text-gray-600">
                Chaque signature apposée est horodatée et journalisée, ce qui
                permet une vérification à tout moment, même plusieurs années
                après. Cette traçabilité devient un argument majeur lors d'un
                contrôle ou d'un audit. De plus, la centralisation des documents
                signés dans l'espace sécurisé Zeendoc, avec tous les
                certificats, la{" "}
                <span className="text-red-500 font-medium">
                  signature électronique
                </span>{" "}
                devient un atout stratégique pour votre entreprise.
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
                <ShieldCheckIcon className="w-6 h-6 text-red-500 mr-2" />
                Conformité et sécurité
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Conforme aux normes européennes EIDAS</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Certificats numériques sécurisés</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Horodatage certifié</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Traçabilité complète des actions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                    <CheckSquareIcon className="w-3 h-3 text-white" />
                  </div>
                  <span>Archivage à valeur probante</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
const IntegrationSection = () => {
  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Comment l'intégrer efficacement dans ma GED ?
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
                Intégrer la{" "}
                <span className="text-red-500 font-medium">
                  signature électronique
                </span>{" "}
                dans une démarche de GED nécessite une approche structurée.
                Zeendoc facilite cette transition grâce à des services
                professionnels qui vous accompagnent dans les bonnes étapes
                d'implémentation selon votre secteur d'activité.
              </p>
              <p className="text-gray-600 mb-6">
                Il est recommandé de former vos utilisateurs aux bonnes
                pratiques, comme l'identification des signataires ou la gestion
                des droits d'accès. Une politique claire, définie par niveaux,
                permet d'éviter les erreurs et d'optimiser les délais. En
                associant automatisation, sécurité et accessibilité, la{" "}
                <span className="text-red-500 font-medium">
                  signature électronique
                </span>{" "}
                s'intègre au cœur de votre GED.
              </p>
              <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-bold mb-4">Étapes d'intégration</h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Analyse de vos processus documentaires actuels</li>
                  <li>Configuration de la solution selon vos besoins</li>
                  <li>Formation des utilisateurs</li>
                  <li>Mise en place des workflows de validation</li>
                  <li>Tests et déploiement progressif</li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
const FutureSection = () => {
  return (
    <AnimatedSection className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
          Quelles évolutions attendues dans les prochaines années ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500"
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
              delay: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-lg font-bold mb-3">
              Intelligence artificielle
            </h3>
            <p className="text-gray-600">
              L'IA va permettre d'analyser automatiquement les documents et de
              suggérer les bonnes pratiques de signature selon le type de
              document.
            </p>
          </motion.div>
          <motion.div
            className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500"
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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-lg font-bold mb-3">Blockchain</h3>
            <p className="text-gray-600">
              L'intégration de la blockchain pour sécuriser davantage les
              signatures électroniques et garantir une traçabilité inviolable
              des documents.
            </p>
          </motion.div>
          <motion.div
            className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500"
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
              delay: 0.4,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-lg font-bold mb-3">Interopérabilité</h3>
            <p className="text-gray-600">
              Des standards ouverts permettront une meilleure communication
              entre différents systèmes de signature électronique à l'échelle
              internationale.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 text-center"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="max-w-8xl mx-auto">
            La{" "}
            <span className="text-red-500 font-medium">
              signature électronique
            </span>{" "}
            continue de se développer avec l'essor de technologies comme la
            biométrie et l'identité numérique souveraine et l'IA. Ces
            innovations visent à renforcer encore plus la fiabilité et la
            transparence des processus de validation. Zeendoc intègre ces
            innovations et intégrera progressivement ces outils dans ses
            services.
          </p>
          <p className="max-w-8xl mx-auto mt-4">
            Les entreprises doivent dès aujourd'hui préparer leur gouvernance
            documentaire pour anticiper ces évolutions. Une veille régulière,
            des mises à jour de conformité et une communication directe avec
            leur fournisseur GED permettront une adaptation facile. La{" "}
            <span className="text-red-500 font-medium">
              signature électronique
            </span>
            , loin d'être figée, s'affirme comme une solution évolutive au
            service de la performance documentaire.
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};
const CTASection = () => {
  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg max-w-4xl mx-auto"
          style={{ backgroundColor: "#de2828" }}
        >
          <h2
            className="text-2xl text-white md:text-3xl font-bold mb-6"
            style={{ color: "white" }}
          >
            La signature électronique n'est plus un simple outil - c'est une
            réponse technique, légale et stratégique aux enjeux modernes de
            gestion documentaire.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <motion.a
              href="#"
              className="bg-white text-red-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un RDV
            </motion.a>
            <motion.a
              href="#"
              className="px-6 py-3 rounded-full font-medium hover:bg-orange-500 transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: "#E9A431", color: "white" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#C38B2D")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#E9A431")
              }
            >
              <div className="">Essayer Zeendoc maintenant</div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ElectronicSign;
