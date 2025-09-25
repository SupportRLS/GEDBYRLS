import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Form from "../components/formHomePage.jsx";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import {
  FaFacebookF,
  FaLocationArrow,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

import "../components/style/contactPage.css";

function ContactPage() {
  return (
    <div className="contactPage">
      <Helmet>
        <title>Contact - RLS </title>
        <meta
          name="description"
          content="Contactez Repro Languedoc Solutions pour toute question ou demande de devis concernant nos services de gestion électronique de document et de solutions d'entreprise."
        />
      </Helmet>
      <Header />
      <div className="contactSection">
        <div className="contactLeft">
          <h5 className="pb-10">CONTACTEZ-NOUS</h5>
          <h2 className="font-bold">Parlez-nous de votre projet</h2>
          <p>
            Vous avez une question ou besoin d’un devis ? Laissez-nous un
            message et notre équipe reviendra vers vous rapidement.
          </p>
          <div className="contactItem">
            <div className="icons">
              <IoMdMail />
            </div>
            <p>contact@reprolanguedoc.fr</p>
          </div>
          <div className="contactItem">
            <div className="icons">
              <FaPhoneVolume />
            </div>
            <p>04 67 22 14 14</p>
          </div>
          <div className="contactItem">
            <div className="icons">
              <FaLocationArrow />{" "}
            </div>
            <p>149 Rue Charles Lindbergh, 34130 Mauguio</p>
          </div>
          <div className="socialIcons">
            <a
              href="https://www.facebook.com/ReproLanguedocSolutions/?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Repro Languedoc Solutions"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.reprolanguedoc.fr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site web Repro Languedoc Solutions"
            >
              <TfiWorld />
            </a>
            <a
              href="https://fr.linkedin.com/company/reprolanguedocsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Repro Languedoc Solutions"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/languedocrepro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Repro Languedoc Solutions"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="contactRight">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
