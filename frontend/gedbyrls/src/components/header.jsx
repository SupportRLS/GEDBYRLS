import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import arrow from '../assets/Arrow.png';
import logo from '../assets/logoRLS.webp';
import ButtonContactHeader from './ButtonContactHeader';
import './style/header.css'; 
import letter from '../assets/letter.svg';
import phone from '../assets/phone.svg';

import { iconMap } from './iconMap';

const metiers = [
  { path: "/secteur/avocat", label: "Avocats", iconKey: "GiHammerDrop" },
  { path: "/secteur/expert-comptable", label: "Expert-comptable", iconKey: "FaCalculator" },
  { path: "/secteur/association", label: "Association", iconKey: "LuHeartHandshake" },
  { path: "/secteur/tpe-pme", label: "TPE-PME", iconKey: "BiSolidBusiness" },
  { path: "/secteur/grands-groupes", label: "Grands-Groupes", iconKey: "IoBusiness" },
  { path: "/secteur/sante", label: "Santé", iconKey: "FaHandHoldingMedical" },
  { path: "/secteur/architectes", label: "Architectes", iconKey: "FaHouseChimneyWindow" },
  { path: "/secteur/btp", label: "BTP", iconKey: "FaHelmetSafety" },
  { path: "/secteur/secteur-public", label: "Secteur public", iconKey: "MdOutlineMuseum" },
  { path: "/secteur/finance", label: "Finance", iconKey: "GrMoney" },
  { path: "/secteur/commercial", label: "Commercial", iconKey: "MdOutlineSell" },
  { path: "/secteur/freelance-independant", label: "Freelance-Indépendant", iconKey: "MdWork" },
  { path: "/secteur/medico-social-associatif", label: "Médico-social-associatif", iconKey: "FaHouseMedicalFlag" },
];

const solutions =[
  {path: "/solution/je-debute-dans-la-ged", label: "Je Débute dans la GED", iconKey: "GiCloudDownload"},
  {path: "/solution/la-signature-electronique", label: "La Signature Électronique", iconKey: "FaSignature"},
  {path: "/solution/faq", label: "FAQ", iconKey: "FaFileCircleQuestion"},
  {path: "/solution/integration-des-logiciels-compatibles", label: "Intégration des logiciels", iconKey: "MdOutlineWeb"},
  {path: "/solution/De-larchivage-papier-à-larchivage-numerique", label: "Du papier au numérique", iconKey: "IoNewspaperOutline"},
  {path: "/solution/securisation-rgpd-tracabilite", label: "Sécurisation | RGPD | Traçabilité", iconKey: "MdSecurity"},
  {path: "/solution/Articles", label: "Articles", iconKey: "PiArticleThin"},
  {path: "/solution/fonctionnalites", label: "Fonctionnalités", iconKey: "RiFunctionLine"},
  {path: "/solution/galerie", label: "Galerie", iconKey: "MdOutlineAddAPhoto"
    
  }
]
          
function Header() {
  const [openSolutions, setOpenSolutions] = useState(false);
  const [isActiveSolutions, setIsActiveSolutions] = useState(false);

  const [openMetiers, setOpenMetiers] = useState(false);
  const [isActiveMetiers, setIsActiveMetiers] = useState(false);

  // Refs pour détecter les clics hors menu
  const solutionsRef = useRef(null);
  const metiersRef = useRef(null);

  const toggleSolutions = () => {
    setOpenSolutions((prev) => !prev);
    setIsActiveSolutions((prev) => !prev);
  };

  const toggleMetiers = () => {
    setOpenMetiers((prev) => !prev);
    setIsActiveMetiers((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setOpenSolutions(false);
        setIsActiveSolutions(false);
      }
      if (metiersRef.current && !metiersRef.current.contains(event.target)) {
        setOpenMetiers(false);
        setIsActiveMetiers(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="HeaderNav poppins-medium">
        <img src={logo} alt="logo" className="Logo" />
        <NavLink to="/">Accueil</NavLink>

        {/* Dropdown Solutions */}
        <div className="Dropdown" ref={solutionsRef}>
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
             {solutions.map(({ path, label, iconKey }) => {
                const Icon = iconMap[iconKey]; // Récupère le composant
                return (
                  <NavLink to={path} key={path}>
                    {Icon && <Icon />} {label}
                  </NavLink>
                );
              }
              )}
            </ul>
          )}
        </div>

        {/* Dropdown Métiers */}
        <div className="Dropdown" ref={metiersRef}>
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
    {metiers.map(({ path, label, iconKey }) => {
      const Icon = iconMap[iconKey]; // Récupère le composant
      return (
        <NavLink to={path} key={path}>
          {Icon && <Icon  />} {label}
        </NavLink>
      );
    })}
  </ul>
)}
        </div>

        <NavLink to="/formation">Formation</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <div className="ContactHeader">
          <img src={letter} alt="" />
          |
          <img src={phone} alt="" />
          <ButtonContactHeader />
        </div>
      </div>
    </>
  );
}

export default Header;
