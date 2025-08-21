import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logoRLS.webp";

function Footer() {
  return (
    <footer
      className="mt-10 pt-10 pb-4 px-4"
      style={{ backgroundColor: "#fff5e9" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 border-b border-gray-700 pb-8">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={logo} alt="Logo RLS" className="w-24 mb-3" />
          <p className="font-semibold text-center md:text-center">
            A votre service depuis plus de 40 ans
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-3 md:items-start">
          {/* Colonne RLS */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-3 text-lg text-red-400 text-center md:text-left">
              RLS
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  to="/solution/je-debute-dans-la-ged"
                  className="hover:text-red-400"
                >
                  La GED c’est quoi ?
                </Link>
              </li>
              <li>
                <Link
                  to="/solution/la-signature-electronique"
                  className="hover:text-red-400"
                >
                  La Signature Électronique
                </Link>
              </li>
              <li>
                <Link to="/ressources/faq" className="hover:text-red-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/solution/Articles" className="hover:text-red-400">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Informations */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-3 text-lg text-red-400 text-center md:text-left">
              Informations
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link to="/cgv" className="hover:text-red-400">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link
                  to="http://localhost:1337/admin/auth/login"
                  className="hover:text-red-400"
                >
                  Administration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="hover:text-red-400">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Coordonnées */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-3 text-lg text-red-400 text-center md:text-left">
              Coordonnées
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-red-400 mt-1 flex-shrink-0" />
                <a href="tel:0467221414" className="hover:text-red-400">
                  04.67.22.14.14
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-red-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@reprolanguedoc.fr"
                  className="hover:text-red-400"
                >
                  contact@reprolanguedoc.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=149+Rue+Charles+Lindbergh,+34130+Mauguio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400"
                >
                  149 Rue Charles Lindbergh, 34130 Mauguio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 Repro Languedoc Solutions | Tous droits réservés
      </div>
    </footer>
  );
}

export default Footer;
