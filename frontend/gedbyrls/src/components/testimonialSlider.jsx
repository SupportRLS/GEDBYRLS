import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteRight } from "react-icons/fa";
import './style/testimonialSlider.css';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Léo Dubois",
      position: "Directeur Administratif",
      company: "TechnoSoft SARL",
      content: "Grâce à cette solution, nous avons réduit de 70% le temps de traitement de nos factures. L'automatisation a révolutionné notre processus administratif.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Pierre Martin",
      position: "Gérant",
      company: "Artisan Plus",
      content: "Interface intuitive et support client exceptionnel. Nos documents sont maintenant organisés et facilement accessibles. Un gain de productivité énorme !",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sophie Leroy",
      position: "Responsable RH",
      company: "InnovCorp",
      content: "La centralisation de nos documents RH nous fait gagner un temps précieux. La sécurité et la traçabilité sont exemplaires.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Thomas Bernard",
      position: "Comptable",
      company: "Expertise Conseil",
      content: "Solution complète qui répond parfaitement à nos besoins. L'archivage automatique et la recherche intelligente sont des atouts majeurs.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
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
        className={`star-icon ${
          index < rating ? 'star-filled' : 'star-empty'
        }`}
      />
    ));
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h2 className="testimonial-title">
          Ce que disent nos clients
        </h2>
        <p>
          Découvrez les témoignages de nos utilisateurs satisfaits
        </p>
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
              alt={testimonials[currentIndex].name}
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
            <div className="author-name">
              {testimonials[currentIndex].name}
            </div>
            <div className="author-position">
              {testimonials[currentIndex].position}
            </div>
            <div className="author-company">
              {testimonials[currentIndex].company}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="nav-button nav-button-left"
        >
          <FaChevronLeft className="nav-icon" />
        </button>

        <button
          onClick={nextSlide}
          className="nav-button nav-button-right"
        >
          <FaChevronRight className="nav-icon" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="dots-navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${
              currentIndex === index ? 'dot-active' : 'dot-inactive'
            }`}
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