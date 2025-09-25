import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import CardsIntegrations from "../components/CardsIntegration";

function IntegrationLogicielsPage() {
  return (
    <>
      <Helmet>
        <title>Intégration Logiciel ZeenDoc - RLS </title>
        <meta
          name="description"
          content="Découvrez les logiciels compatibles avec Zeendoc pour une gestion électronique de documents (GED) optimisée, incluant des intégrations avec des outils de comptabilité, CRM et ERP pour améliorer l'efficacité de votre entreprise."
        />
      </Helmet>
      <div className="IntegrationPage">
        <Header />
        <motion.h1
          className="font-bold"
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Integration des logiciels compatibles avec ZeenDoc
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <CardsIntegrations />
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default IntegrationLogicielsPage;
