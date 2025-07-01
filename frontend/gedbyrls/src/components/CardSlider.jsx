import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./style/cardSlider.css";
import Button from "./ButtonComponents";
import { iconMap } from "./iconMap";

function CardSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow-button left" onClick={handlePrev}>
        <FaArrowLeft />
      </button>

      <div className="cards-wrapper">
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={index}
              className={`card ${isActive ? "active" : ""}`}
            >
              {IconComponent && <IconComponent className="card-icone" />}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Button />
            </div>
          );
        })}
      </div>

      <button className="arrow-button right" onClick={handleNext}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default CardSlider;