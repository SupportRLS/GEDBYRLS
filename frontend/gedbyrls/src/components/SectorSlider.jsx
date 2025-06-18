import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/style/sectorSlider.css";
function FonctionnaliteSlider({ fonctionnalites }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % fonctionnalites.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? fonctionnalites.length - 1 : prevIndex - 1
    );
  };

  const current = fonctionnalites[currentIndex];

  return (
    <div className="fonctionnalite-slider">
      <button className="slider-button prev" onClick={handlePrev}>
        <FaArrowLeft />
      </button>

      <div className="slider-content">
        <h4>{current.titre}</h4>
        <p>{current.contenu}</p>
      </div>

      <button className="slider-button next" onClick={handleNext}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default FonctionnaliteSlider;
