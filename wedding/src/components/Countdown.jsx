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
        <h2 className="label-text" style={{ color: 'var(--bg-cream)' }}>BEGINNING OUR FOREVER IN</h2>
        
        <div className="countdown-grid">
          <div className="stat-box">
            <span className="numeral-text" style={{ color: 'var(--bg-cream)' }}>{timeLeft.days}</span>
            <span className="label-text" style={{ color: 'var(--bg-cream)' }}>DAYS</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text" style={{ color: 'var(--bg-cream)' }}>{timeLeft.hours}</span>
            <span className="label-text" style={{ color: 'var(--bg-cream)' }}>HOURS</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text" style={{ color: 'var(--bg-cream)' }}>{timeLeft.minutes}</span>
            <span className="label-text" style={{ color: 'var(--bg-cream)' }}>MINUTES</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text" style={{ color: 'var(--bg-cream)' }}>{timeLeft.seconds}</span>
            <span className="label-text" style={{ color: 'var(--bg-cream)' }}>SECONDS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
