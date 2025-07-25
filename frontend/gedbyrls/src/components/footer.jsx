import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logoRLS.webp";

function Footer() {
  return (
    <footer className=" pt-10 pb-4 px-4" style={{ backgroundColor: "#fff5e9" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 border-b border-gray-700 pb-8">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={logo} alt="Logo RLS" className="w-32 mb-3" />
          <p className="font-semibold text-center md:text-left">
            A votre service depuis plus de 40 ans
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <div>
            <h4 className="font-bold mb-3 text-lg text-red-400">RLS</h4>
            <ul className="space-y-2">
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
          <div>
            <h4 className="font-bold mb-3 text-lg text-red-400">
              Informations
            </h4>
            <ul className="space-y-2">
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
          <div>
            <h4 className="font-bold mb-3 text-lg text-red-400">Coordonnées</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-400" /> 04.67.22.14.14
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-400" />{" "}
                contact@reprolanguedoc.fr
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-400" /> 149 Rue Charles
                Lindbergh, 34130 Mauguio
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
