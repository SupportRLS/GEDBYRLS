import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import arrow from "../assets/Arrow.png";
import logo from "../assets/logoRLS.webp";
import ButtonContactHeader from "./ButtonContactHeader";
import "./style/header.css";
import letter from "../assets/letter.svg";
import phone from "../assets/phone.svg";

import { iconMap } from "./iconMap";

const metiers = [
  { path: "/secteur/avocat", label: "Avocats", iconKey: "iconeAvocat" },
  {
    path: "/secteur/expert-comptable",
    label: "Expert-comptable",
    iconKey: "iconeComptable",
  },
  {
    path: "/secteur/association",
    label: "Association",
    iconKey: "iconeAssociation",
  },
  { path: "/secteur/tpe-pme", label: "TPE-PME", iconKey: "iconePMETPE" },
  {
    path: "/secteur/grands-groupes",
    label: "Grands-Groupes",
    iconKey: "iconeGrandGroupe",
  },
  { path: "/secteur/sante", label: "Santé", iconKey: "iconeSante" },
  {
    path: "/secteur/architectes",
    label: "Architectes",
    iconKey: "iconeArchitecte",
  },
  { path: "/secteur/btp", label: "BTP", iconKey: "iconeBTP" },
  {
    path: "/secteur/secteur-public",
    label: "Secteur public",
    iconKey: "iconeSecteurPublic",
  },
  { path: "/secteur/finance", label: "Finance", iconKey: "iconeFinance" },
  {
    path: "/secteur/commercial",
    label: "Commercial",
    iconKey: "iconeCommercial",
  },
  {
    path: "/secteur/freelance-independant",
    label: "Freelance-Indépendant",
    iconKey: "iconeFreelance",
  },
  {
    path: "/secteur/medico-social-associatif",
    label: "Médico-social-associatif",
    iconKey: "iconeMedicoSocial",
  },
];

const solutions = [
  {
    path: "/solution/je-debute-dans-la-ged",
    label: "Je Débute dans la GED",
    iconKey: "iconeDebutGED",
  },
  {
    path: "/solution/la-signature-electronique",
    label: "La Signature Électronique",
    iconKey: "iconeSignatureCheck",
  },
  { path: "/solution/faq", label: "FAQ", iconKey: "iconeFAQ" },
  {
    path: "/solution/integration-des-logiciels-compatibles",
    label: "Intégration des logiciels",
    iconKey: "iconeLogicielCompatible",
  },
  {
    path: "/solution/De-larchivage-papier-à-larchivage-numerique",
    label: "Du papier au numérique",
    iconKey: "iconePapierVersGED",
  },
  {
    path: "/solution/securisation-rgpd-tracabilite",
    label: "Sécurisation | RGPD | Traçabilité",
    iconKey: "iconeRGPD",
  },
  { path: "/solution/Articles", label: "Articles", iconKey: "iconeArticles" },
  {
    path: "/solution/fonctionnalites",
    label: "Fonctionnalités",
    iconKey: "iconeFonctionnalites",
  },
  {
    path: "/solution/galerie",
    label: "Galerie",
    iconKey: "iconeGalerie",
  },
];

function Header() {
  const [openSolutions, setOpenSolutions] = useState(false);
  const [isActiveSolutions, setIsActiveSolutions] = useState(false);

  const [openMetiers, setOpenMetiers] = useState(false);
  const [isActiveMetiers, setIsActiveMetiers] = useState(false);

  const [isBurgerOpen, setBurgerOpen] = useState(false);
  // Refs pour détecter les clics hors menu
  const solutionsRef = useRef(null);
  const metiersRef = useRef(null);

  const toggleBurger = () => {
    setBurgerOpen(!isBurgerOpen);
  };
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
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target)
      ) {
        setOpenSolutions(false);
        setIsActiveSolutions(false);
      }
      if (metiersRef.current && !metiersRef.current.contains(event.target)) {
        setOpenMetiers(false);
        setIsActiveMetiers(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="HeaderNav poppins-medium">
        <div className="LogoNav">
          <img src={logo} alt="logo" className="Logo" />
          {/* Le bouton burger hors NavMenu */}
          <button
            className="BurgerButton"
            onClick={toggleBurger}
            aria-label="Toggle menu"
          >
            {isBurgerOpen ? (
              <IoMdClose size={28} color="#2e1d21" />
            ) : (
              <GiHamburgerMenu size={28} color="#2e1d21" />
            )}
          </button>

          <div className={`NavMenu ${isBurgerOpen ? "open" : ""}`}>
            <NavLink to="/">Accueil</NavLink>

            {/* Dropdown Solutions */}
            <div className="Dropdown" ref={solutionsRef}>
              <div onClick={toggleSolutions}>
                Solutions
                <img
                  src={arrow}
                  className={`Arrow rotate180 ${
                    isActiveSolutions ? "active" : ""
                  }`}
                  alt="arrow"
                />
              </div>
              {openSolutions && (
                <ul className="Menu">
                  {solutions.map(({ path, label, iconKey }) => {
                    const Icon = iconMap[iconKey];
                    return (
                      <NavLink to={path} key={path}>
                        {Icon && <Icon />} {label}
                      </NavLink>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Dropdown Métiers */}
            <div className="Dropdown" ref={metiersRef}>
              <div onClick={toggleMetiers}>
                Métiers
                <img
                  src={arrow}
                  className={`Arrow rotate180 ${
                    isActiveMetiers ? "active" : ""
                  }`}
                  alt="arrow"
                />
              </div>
              {openMetiers && (
                <ul className="Menu">
                  {metiers.map(({ path, label, iconKey }) => {
                    const Icon = iconMap[iconKey];
                    return (
                      <NavLink to={path} key={path}>
                        {Icon && <Icon />} {label}
                      </NavLink>
                    );
                  })}
                </ul>
              )}
            </div>

            <NavLink to="/formation">Formation</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        <div className="ContactHeader">
          <img src={letter} alt="" />
          |
          <img src={phone} alt="" />
          <ButtonContactHeader />
        </div>
      </nav>
    </>
  );
}

export default Header;
