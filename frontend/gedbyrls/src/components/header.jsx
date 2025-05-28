import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../assets/Arrow.png';
import logo from '../assets/logoRLS.webp';
import ButtonContactHeader from './ButtonContactHeader';
import './style/header.css'; 

function Header() {
const [openSolutions, setOpenSolutions] = useState(false);
const [isActiveSolutions, setIsActiveSolutions] = useState(false);

const [openMetiers, setOpenMetiers] = useState(false);
const [isActiveMetiers, setIsActiveMetiers] = useState(false);

const toggleSolutions = () => {
setOpenSolutions((prev) => !prev);
setIsActiveSolutions((prev) => !prev);
};

const toggleMetiers = () => {
setOpenMetiers((prev) => !prev);
setIsActiveMetiers((prev) => !prev);
};

return (
<>
<div className="HeaderNav poppins-medium">
<img src={logo} alt="logo" className="Logo" />
<NavLink to="/">Accueil</NavLink>


    {/* Dropdown Solutions */}
    <div className="Dropdown">
      <div onClick={toggleSolutions}>
        Solutions
        <img
          src={arrow}
          className={`Arrow rotate180 ${isActiveSolutions ? "active" : ""}`}
          alt="arrow"
        />
      </div>
      {openSolutions && (
        <ul className="Menu">
          <NavLink to="/solution/je-debute-dans-la-ged">Je Débute dans la GED</NavLink>
          <NavLink to="/solution/faq">FAQ</NavLink>
          <NavLink to="/solution/integration-des-logiciels-compatibles">Intégration des logiciels compatibles</NavLink>
          <NavLink to="/solution/De-larchivage-papier-à-larchivage-numerique">De l’archivage papier à l’archivage numérique</NavLink>
          <NavLink to="/solution/securisation-rgpd-tracabilite">Sécurisation | RGPD | Traçabilité</NavLink>
          <NavLink to="/solution/Articles">Articles</NavLink>
          <NavLink to="/solution/fonctionnalites">Fonctionnalités</NavLink>
        </ul>
      )}
    </div>

    {/* Dropdown Métiers */}
    <div className="Dropdown">
      <div onClick={toggleMetiers}>
        Métiers
        <img
          src={arrow}
          className={`Arrow rotate180 ${isActiveMetiers ? "active" : ""}`}
          alt="arrow"
        />
      </div>
      {openMetiers && (
        <ul className="Menu">
          <NavLink to="/secteur/avocat">Avocats</NavLink>
          <NavLink to="/secteur/expert-comptable">Expert-comptable</NavLink>
          <NavLink to="/secteur/association">Association</NavLink>
          <NavLink to="/secteur/tpe-pme">TPE-PME</NavLink>
          <NavLink to="/secteur/grands-groupes">Grands-Groupes</NavLink>
          <NavLink to="/secteur/sante">Santé</NavLink>
          <NavLink to="/secteur/architectes">Architectes</NavLink>
          <NavLink to="/secteur/btp">BTP</NavLink>
          <NavLink to="/secteur/secteur-public">Secteur-public</NavLink>
          <NavLink to="/secteur/finance">Finance</NavLink>
          <NavLink to="/secteur/commercial">Commercial</NavLink>
          <NavLink to="/secteur/freelance-independant">Freelance-Independant</NavLink>
          <NavLink to="/secteur/medico-social-associatif">Médico-social-associatif</NavLink>
        </ul>
      )}
    </div>
 
    <NavLink to="/formation">Formation</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <div className="ButtonHeader">
    <ButtonContactHeader  /> 
    </div>
  </div>
</>
  )
};
export default Header; 
