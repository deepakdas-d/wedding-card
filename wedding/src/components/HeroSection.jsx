import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './heroSection.css';

const HeroSection = ({ showConfetti }) => {
  useEffect(() => {
    if (!showConfetti) return;

    const end = Date.now() + 3 * 1000; // 3 seconds
    // Theme-aligned gold colors
    const colors = ["#B9945B", "#C8A66E", "#A57E45", "#D8B984"];

    const isMobile = window.innerWidth < 768;
    const pCount = isMobile ? 1 : 2;
    const spreadValue = isMobile ? 30 : 55;
    const velocityValue = isMobile ? 35 : 60;

    const frame = () => {
      if (Date.now() > end) return;
      if (isMobile && Math.random() > 0.2) {
        requestAnimationFrame(frame);
        return;
      }

      confetti({ particleCount: pCount, angle: 60, spread: spreadValue, startVelocity: velocityValue, origin: { x: 0, y: 0.5 }, colors: colors, scalar: 1.5 });
      confetti({ particleCount: pCount, angle: 120, spread: spreadValue, startVelocity: velocityValue, origin: { x: 1, y: 0.5 }, colors: colors, scalar: 1.5 });

      requestAnimationFrame(frame);
    };

    frame();
  }, [showConfetti]);

  return (
    <section className="hero-section hero-fullscreen">
      <div className="hero-background-overlay"></div>
      
      <div className="hero-content reference-design">
        <div className="couple-names-image">
          <img src="/light-name.png" alt="Couple Names" className="names-img" />
        </div>
        <p className="with-love-text">With Love</p>
      </div>
      
      <div className="floral-footer">
        <img src="/floral-removebg.png" alt="Floral Arrangement" className="floral-bottom-img" />
      </div>
    </section>
  );
};

export default HeroSection;
