import React from 'react';
import ArchCard from './ArchCard';
import './heroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <ArchCard showFlourish={true} id="hero">
        <div className="hero-content">
          <div className="hero-image-container">
            <img src="/couple.jpg" alt="Priya and Arjun" className="hero-image" />
          </div>
          <h1 className="couple-names display-text">
            <span className="name-part">Shahin Shah</span>
            <span className="ampersand">&</span>
            <span className="name-part">Shahala</span>
          </h1>
          <p className="tagline body-text">
            Together with their families, invite you to celebrate their union
          </p>
          <div className="date-display">
            August 15, 2026
          </div>
        </div>
      </ArchCard>
      <div className="scroll-cue">
        <span className="arrow-down">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
