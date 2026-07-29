import React, { useState, useEffect } from 'react';
import './countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date('2026-08-15T16:00:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <div className="countdown-date-wrapper">
          <div className="wedding-day-label">Wedding Day</div>
          <div className="date-display-reference">16.08.2026</div>
        </div>

        <h2 className="label-text" style={{ color: 'var(--maroon-deep)' }}>BEGINNING OUR FOREVER IN</h2>
        
        <div className="countdown-grid">
          <div className="stat-box">
            <span className="numeral-text" style={{ color: 'var(--maroon-accent)' }}>{timeLeft.days}</span>
            <span className="label-text" style={{ color: 'var(--maroon-deep)' }}>DAYS</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text" style={{ color: 'var(--maroon-accent)' }}>{timeLeft.hours}</span>
            <span className="label-text" style={{ color: 'var(--maroon-deep)' }}>HOURS</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text" style={{ color: 'var(--maroon-accent)' }}>{timeLeft.minutes}</span>
            <span className="label-text" style={{ color: 'var(--maroon-deep)' }}>MINUTES</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text" style={{ color: 'var(--maroon-accent)' }}>{timeLeft.seconds}</span>
            <span className="label-text" style={{ color: 'var(--maroon-deep)' }}>SECONDS</span>
          </div>
        </div>
      </div>

      {/* Ink splash / ripped paper edge pointing downwards */}
      <div className="torn-edge-bottom">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ink-splash-bottom" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="-10%" y="40%" width="120%" height="100%" fill="var(--bg-cream)" filter="url(#ink-splash-bottom)"/>
        </svg>
      </div>
    </section>
  );
};

export default Countdown;
