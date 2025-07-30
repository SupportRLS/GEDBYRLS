import React from "react";
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";

import CardsIntegrations from "../components/CardsIntegration";

function IntegrationLogicielsPage() {
  return (
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
  );
}
export default IntegrationLogicielsPage;
