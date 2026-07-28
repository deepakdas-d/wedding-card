import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import ArchCard from './ArchCard';
import './heroSection.css';

const HeroSection = ({ showConfetti }) => {
  useEffect(() => {
    if (!showConfetti) return;

    const end = Date.now() + 3 * 1000; // 3 seconds
    // Theme-aligned gold colors based on --gold-line (#B9945B)
    const colors = ["#B9945B", "#C8A66E", "#A57E45", "#D8B984"];

    // Reduce intensity for mobile screens significantly
    const isMobile = window.innerWidth < 768;
    const pCount = isMobile ? 1 : 2;
    const spreadValue = isMobile ? 30 : 55;
    const velocityValue = isMobile ? 35 : 60;

    const frame = () => {
      if (Date.now() > end) return;

      // Skip 80% of frames on mobile to create a much lighter, gentler sprinkle
      if (isMobile && Math.random() > 0.2) {
        requestAnimationFrame(frame);
        return;
      }

      confetti({
        particleCount: pCount,
        angle: 60,
        spread: spreadValue,
        startVelocity: velocityValue,
        origin: { x: 0, y: 0.5 },
        colors: colors,
        scalar: 1.5, // Increase particle size for better visibility
      });
      confetti({
        particleCount: pCount,
        angle: 120,
        spread: spreadValue,
        startVelocity: velocityValue,
        origin: { x: 1, y: 0.5 },
        colors: colors,
        scalar: 1.5, // Increase particle size for better visibility
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, [showConfetti]);

  return (
    <section className="hero-section">
      <ArchCard showFlourish={true} id="hero">
        <div className="hero-content reference-design">
          <div className="bismillah-container">
            <img src="/bismillah.png" alt="Bismillah" className="bismillah-image" />
          </div>
          <div className="wedding-label">W E D D I N G</div>
          <p className="tagline-text">
            Together with our families we joyfully invite<br />
            you to celebrate our Wedding
          </p>
          <h1 className="couple-names display-text">
            <span className="name-part">Shahin Shah</span>
            <span className="ampersand divider-amp">&</span>
            <span className="name-part">Shahala</span>
          </h1>
          
          <div className="floral-divider">
            <span className="divider-line"></span>
            <span className="divider-diamond"></span>
            <span className="divider-line"></span>
          </div>

          <div className="date-display-reference">
            SUNDAY, 15TH AUGUST 2026
          </div>

          <div className="scroll-cue-reference">
            <span className="scroll-text">SCROLL</span>
            <span className="arrow-down">⌄</span>
            <span className="arrow-down">⌄</span>
            <span className="arrow-down">⌄</span>
          </div>
        </div>
      </ArchCard>
    </section>
  );
};

export default HeroSection;
