import React from "react";
import "../components/style/footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logoRLS.webp"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Logo RLS" />
          <p><strong>A votre service depuis plus de 40 ans</strong></p>
        </div>
        <div className="footer-column">
          <h4>RLS</h4>
          <ul>
            <li>La GED c’est quoi ?</li>
            <li>La GED par métier</li>
            <li>FAQ</li>
            <li>Articles</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Informations</h4>
          <ul>
            <li>Conditions générales de vente</li>
            <li>Recrutement</li>
            <li>Contact</li>
            <li>Mentions légales</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Coordonnées</h4>
          <ul className="contact-list">
            <li><FaPhoneAlt className="icon" /> 04.67.22.14.14</li>
            <li><FaEnvelope className="icon" /> contact@reprolanguedoc.fr</li>
            <li><FaMapMarkerAlt className="icon" /> 149 Rue Charles Lindbergh, 34130 Mauguio</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Repro Languedoc. Tous droits réservés | | Lucas Plébani
      </div>
    </footer>
  );
}

export default Footer;
