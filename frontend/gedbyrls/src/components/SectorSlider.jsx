import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../components/style/sectorSlider.css";
import image2 from "../../public/secteurs/slider/avocat_slider_2.webp";
import image3 from "../../public/secteurs/slider/avocat_slider_3.webp";
import image4 from "../../public/secteurs/slider/avocat_slider_4.webp";
import image5 from "../../public/secteurs/slider/avocat_slider_5.webp";
import image6 from "../../public/secteurs/slider/avocat_slider_6.webp";
import image7 from "../../public/secteurs/slider/avocat_slider_7.webp";


const images = [image2, image3, image4, image5, image6, image7];  


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
        src={images[currentIndex]}
        alt={current.titre}
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
