import React from 'react';
import { motion } from 'framer-motion';
import ArchCard from './ArchCard';
import './heroSection.css';

const HeroSection = ({ isActive = true }) => {
  return (
    <section className="hero-section">
      <ArchCard showFlourish={true} id="hero">
        <div className="hero-content">
          <div className="hero-image-container">
            <img src="/couple.jpg" alt="Priya and Arjun" className="hero-image" />
          </div>
          <motion.h1 
            className="couple-names display-text gold-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 150,
            }}
          >
            <span className="name-part">Shahin Shah</span>
            <span className="ampersand">&</span>
            <span className="name-part">Shahala</span>
          </motion.h1>
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
