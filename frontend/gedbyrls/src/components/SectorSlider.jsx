import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/style/sectorSlider.css";
import image1 from "../assets/RGPD4.png";

import image2 from "../assets/mockupTel.webp";
import image3 from "../assets/image_accueil.png";
import image4 from "../assets/telxOrdi.webp";

import image5 from "../assets/mockuphomeboard.webp";
import image6 from "../assets/mockupFacturation.webp";

const images = [
  { src: image1, alt: "image du fonctionnement global de Zeendoc" },
  { src: image2, alt: "image du slider secteur - Slider 3" },
  { src: image3, alt: "image du slider secteur - Slider 4" },
  { src: image4, alt: "image du slider secteur - Slider 5" },
  { src: image5, alt: "image du slider secteur - Slider 6" },
  { src: image6, alt: "image du slider secteur - Slider 7" },
];
function FonctionnaliteSlider({ fonctionnalites }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fonctionnalites.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? fonctionnalites.length - 1 : prevIndex - 1
    );
  };

  const current = fonctionnalites[currentIndex];

  return (
    <div className="fonctionnalite-slider">
      <div className="slider-inner">
        <button className="slider-button prev" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="slider-content">
          <div className="text">
            <h4>{current.titre}</h4>
            <p>{current.contenu}</p>
          </div>
          <img
            className="slider-image"
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
          />
        </div>

        <button className="slider-button next" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>

      {/* Dots en dehors du bloc principal */}
      <div className="slider-dots">
        {fonctionnalites.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default FonctionnaliteSlider;
