import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
              <li className="hover:text-red-400 cursor-pointer">
                La GED c’est quoi ?
              </li>
              <li className="hover:text-red-400 cursor-pointer">
                La GED par métier
              </li>
              <li className="hover:text-red-400 cursor-pointer">FAQ</li>
              <li className="hover:text-red-400 cursor-pointer">Articles</li>
            </ul>
          </div>

          {/* Colonne Informations */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-3 text-lg text-red-400 text-center md:text-left">
              Informations
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              <li className="hover:text-red-400 cursor-pointer">
                Conditions générales de vente
              </li>
              <li className="hover:text-red-400 cursor-pointer">Recrutement</li>
              <li className="hover:text-red-400 cursor-pointer">Contact</li>
              <li className="hover:text-red-400 cursor-pointer">
                Mentions légales
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
                04.67.22.14.14
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-red-400 mt-1 flex-shrink-0" />
                contact@reprolanguedoc.fr
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0" />
                <div>149 Rue Charles Lindbergh, 34130 Mauguio</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 Repro Languedoc. Tous droits réservés | Lucas Plébani
      </div>
    </footer>
  );
}

export default Footer;
