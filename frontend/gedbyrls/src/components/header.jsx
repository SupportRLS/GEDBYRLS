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

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
console.log("STRAPI_URL:", STRAPI_URL);

// Solutions statiques
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
  { path: "/solution/galerie", label: "Galerie", iconKey: "iconeGalerie" },
];

// Ressources statiques
const ressources = [
  {
    path: "/ressources/cas-client",
    label: "Cas client",
    iconKey: "iconeFonctionnalites",
  },
  {
    path: "/ressources/livre-blanc",
    label: "Livre Blanc",
    iconKey: "iconeFonctionnalites",
  },
  { path: "/ressources/faq", label: "FAQ", iconKey: "iconeFAQ" },
];

function Header() {
  const [openSolutions, setOpenSolutions] = useState(false);
  const [isActiveSolutions, setIsActiveSolutions] = useState(false);
  const [openMetiers, setOpenMetiers] = useState(false);
  const [isActiveMetiers, setIsActiveMetiers] = useState(false);
  const [openRessources, setOpenRessources] = useState(false);
  const [isActiveRessources, setIsActiveRessources] = useState(false);
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  // État pour les métiers dynamiques
  const [metiers, setMetiers] = useState([]);
  const [metiersLoading, setMetiersLoading] = useState(true);

  const solutionsRef = useRef(null);
  const metiersRef = useRef(null);
  const ressourcesRef = useRef(null);

  // Fetch des métiers depuis Strapi
  useEffect(() => {
    const fetchMetiers = async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/secteurs?filters[afficherDansMenu][$eq]=true&sort=ordreMenu:asc&fields[0]=slug&fields[1]=titre&fields[2]=iconeMenu&fields[3]=ordreMenu`
        );

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const json = await res.json();
        console.log("Secteurs reçus :", json);

        const metiersFromStrapi = (json.data || []).map((secteur) => ({
          path: `/secteur/${secteur.slug}`,
          label: secteur.slug,
          iconKey: secteur.iconeMenu || "iconeDefault",
        }));

        setMetiers(metiersFromStrapi);
      } catch (err) {
        console.error("Erreur de connexion à Strapi:", err);
        setMetiers([]);
      } finally {
        setMetiersLoading(false);
      }
    };

    fetchMetiers();
  }, []);

  const toggleBurger = () => setBurgerOpen(!isBurgerOpen);
  const closeBurger = () => setBurgerOpen(false);
  const toggleSolutions = () => {
    setOpenSolutions((prev) => !prev);
    setIsActiveSolutions((prev) => !prev);
  };
  const toggleMetiers = () => {
    setOpenMetiers((prev) => !prev);
    setIsActiveMetiers((prev) => !prev);
  };
  const toggleRessources = () => {
    setOpenRessources((prev) => !prev);
    setIsActiveRessources((prev) => !prev);
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
      if (
        ressourcesRef.current &&
        !ressourcesRef.current.contains(event.target)
      ) {
        setOpenRessources(false);
        setIsActiveRessources(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fermer le menu lors du clic sur un lien
  const handleLinkClick = () => {
    setBurgerOpen(false);
    setOpenSolutions(false);
    setIsActiveSolutions(false);
    setOpenMetiers(false);
    setIsActiveMetiers(false);
    setOpenRessources(false);
    setIsActiveRessources(false);
  };

  return (
    <nav className="HeaderNav poppins-medium">
      <div className="LogoNav">
        <img src={logo} alt="logo" className="Logo" />

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
          <button
            className="CloseMenuButton"
            onClick={closeBurger}
            aria-label="Fermer le menu"
          >
            <IoMdClose size={24} color="#666" />
          </button>

          <NavLink to="/" onClick={handleLinkClick}>
            Accueil
          </NavLink>

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
              <ul className="Menu solutions-menu">
                {solutions.map(({ path, label, iconKey }) => {
                  const Icon = iconMap[iconKey];
                  return (
                    <NavLink to={path} key={path} onClick={handleLinkClick}>
                      {Icon && <Icon />} {label}
                    </NavLink>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Dropdown Métiers dynamiques */}
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
              <ul className="Menu metiers-menu">
                {metiersLoading ? (
                  <li>Chargement...</li>
                ) : metiers.length > 0 ? (
                  metiers.map(({ path, label, iconKey }) => {
                    const Icon = iconMap[iconKey];
                    return (
                      <NavLink to={path} key={path} onClick={handleLinkClick}>
                        {Icon && <Icon />} {label}
                      </NavLink>
                    );
                  })
                ) : (
                  <li>Aucun métier disponible</li>
                )}
              </ul>
            )}
          </div>

          {/* Dropdown Ressources */}
          <div className="Dropdown" ref={ressourcesRef}>
            <div onClick={toggleRessources}>
              Ressources
              <img
                src={arrow}
                className={`Arrow rotate180 ${
                  isActiveRessources ? "active" : ""
                }`}
                alt="arrow"
              />
            </div>
            {openRessources && (
              <ul className="Menu ressources-menu">
                {ressources.map(({ path, label, iconKey }) => {
                  const Icon = iconMap[iconKey];
                  return (
                    <NavLink to={path} key={path} onClick={handleLinkClick}>
                      {Icon && <Icon />} {label}
                    </NavLink>
                  );
                })}
              </ul>
            )}
          </div>

          <NavLink to="/formation" onClick={handleLinkClick}>
            Formation
          </NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </div>
      </div>

      <div className="ContactHeader">
        <div className="TraitContactHeader">
          <img src={letter} alt="" /> |
          <img src={phone} alt="" />
        </div>
        <ButtonContactHeader />
      </div>
    </nav>
  );
}

export default Header;
