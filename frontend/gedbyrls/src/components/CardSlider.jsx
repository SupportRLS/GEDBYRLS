import React, { useState, useEffect, useRef } from "react";
import "./style/cardSlider.css";
import { iconMap } from "./iconMap";

function CardSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-rotation toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    const threshold = 50; 

    if (deltaX > threshold) {
      handlePrev();
    } else if (deltaX < -threshold) {
      handleNext();
    }
  };

  const getPositionClass = (index) => {
    const leftIndex = (currentIndex - 1 + items.length) % items.length;
    const rightIndex = (currentIndex + 1) % items.length;

    if (index === currentIndex) return "center";
    if (index === leftIndex) return "left";
    if (index === rightIndex) return "right";
    return "hidden";
  };

  return (
    <div
      className="slider-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="cards-wrapper">
        {items.map((item, index) => {
          const position = getPositionClass(index);
          const IconComponent = iconMap[item.icon];
          return (
            <div key={index} className={`card ${position}`}>
              {IconComponent && <IconComponent className="card-icon" />}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardSlider;
