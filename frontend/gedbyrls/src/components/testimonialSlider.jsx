import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteRight,
} from "react-icons/fa";
import "./style/testimonialSlider.css";
import groupe_mallet from "../../public/logo_entreprise/groupe_mallet.webp";
import arkolia from "../../public/logo_entreprise/arkolia.webp";
import habitat_jeune from "../../public/logo_entreprise/habitat_jeune.webp";
import psi from "../../public/logo_entreprise/psi.webp";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      // name: "Léo Dubois",   insertion des names et position sous les ID pour de nouveau Client.
      // position: "Directeur Administratif",
      company: "Groupe Mallet ",
      content:
        "Grâce à cette solution, nous avons réduit de 70% le temps de traitement de nos factures. L'automatisation a révolutionné notre processus administratif.",
      rating: 5,
      avatar: groupe_mallet,
      alt: "Logo du Groupe Mallet",
    },
    {
      id: 2,

      company: "Groupe PSI Sécurité",
      content:
        "Interface intuitive et support client exceptionnel. Nos documents sont maintenant organisés et facilement accessibles. Un gain de productivité énorme !",
      rating: 5,
      avatar: psi,
      alt: "Logo du Groupe PSI Sécurité",
    },
    {
      id: 3,
      company: "Arkolia Énergie",
      content:
        "La centralisation de nos documents RH nous fait gagner un temps précieux. La sécurité et la traçabilité sont exemplaires.",
      rating: 5,
      avatar: arkolia,
      alt: "Logo d'Arkolia Énergie",
    },
    {
      id: 4,
      company: "Habitat Jeune Montpellier",
      content:
        "Solution complète qui répond parfaitement à nos besoins. L'archivage automatique et la recherche intelligente sont des atouts majeurs.",
      rating: 5,
      avatar: habitat_jeune,
      alt: "Logo d'Habitat Jeune Montpellier",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, currentIndex]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`star-icon ${index < rating ? "star-filled" : "star-empty"}`}
      />
    ));
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h2 className="testimonial-title">Ce que disent nos clients</h2>
        <p>Découvrez les témoignages de nos utilisateurs satisfaits</p>
      </div>

      <div
        className="testimonial-slider"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Quote decoration */}
        <FaQuoteRight className="quote-decoration-top" />
        <FaQuoteRight className="quote-decoration-bottom" />

        {/* Main testimonial */}
        <div className="testimonial-content">
          <div className="testimonial-avatar-section">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].alt}
              className="testimonial-avatar"
            />
            <div className="testimonial-stars">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
          </div>

          <blockquote className="testimonial-quote">
            "{testimonials[currentIndex].content}"
          </blockquote>

          <div className="testimonial-author">
            <div className="author-name">{testimonials[currentIndex].name}</div>
            <div className="author-position">
              {testimonials[currentIndex].position}
            </div>
            <div className="author-company">
              {testimonials[currentIndex].company}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button onClick={prevSlide} className="nav-button nav-button-left">
          <FaChevronLeft className="nav-icon" aria-label="Précédent" />
        </button>

        <button onClick={nextSlide} className="nav-button nav-button-right">
          <FaChevronRight className="nav-icon" aria-label="Suivant" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="dots-navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${
              currentIndex === index ? "dot-active" : "dot-inactive"
            }`}
            aria-label={`Aller au témoignage ${index + 1}`}
            aria-current={currentIndex === index ? "true" : undefined}
          />
        ))}
      </div>

      {/* Statistics */}
      <div className="statistics-grid">
        <div className="statistic-card">
          <div className="statistic-number color-E9A431">500+</div>
          <div className="statistic-label">Clients satisfaits</div>
        </div>
        <div className="statistic-card">
          <div className="statistic-number color-E9A431">98%</div>
          <div className="statistic-label">Taux de satisfaction</div>
        </div>
        <div className="statistic-card">
          <div className="statistic-number color-E9A431">24/7</div>
          <div className="statistic-label">Support client</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
