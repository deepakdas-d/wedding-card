import React from 'react';
import ArchCard from './ArchCard';
import './heroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <ArchCard showFlourish={true} id="hero">
        <div className="hero-content">
          <h1 className="couple-names display-text">
            Priya <span className="ampersand">&</span> Arjun
          </h1>
          <p className="tagline body-text">
            Together with their families, invite you to celebrate their union
          </p>
          <div className="date-display">
            December 15, 2026
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
