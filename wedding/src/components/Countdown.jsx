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
    const target = new Date('2026-12-15T16:00:00+05:30').getTime();

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
      <div className="simple-card">
        <h2 className="label-text">COUNTING DOWN</h2>
        
        <div className="countdown-grid">
          <div className="stat-box">
            <span className="numeral-text">{timeLeft.days}</span>
            <span className="label-text">DAYS</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text">{timeLeft.hours}</span>
            <span className="label-text">HOURS</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text">{timeLeft.minutes}</span>
            <span className="label-text">MINUTES</span>
          </div>
          <div className="stat-box">
            <span className="numeral-text">{timeLeft.seconds}</span>
            <span className="label-text">SECONDS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
