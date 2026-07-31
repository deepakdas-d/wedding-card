import React from 'react';
import './ceremonyDetails.css';

const CeremonyDetails = () => {
  return (
    <section className="ceremony-details">
      <div className="ceremony-cover-wrapper">
        <img src="/venu.jpeg" alt="Venue Cover" className="ceremony-cover-image" />
        <div className="ceremony-cover-fade"></div>
      </div>



      <div className="transparent-card ceremony-card" id="ceremony">
        <div className="ceremony-content">
          <h2 className="section-heading">Wedding Ceremony</h2>
          <div className="diamond-divider"><span className="diamond" /></div>

          <div className="wedding-date-wrapper">
            <div className="wedding-date-grid">
              <div className="wedding-date-side">Saturday</div>
              <div className="wedding-date-center">
                <span className="wedding-date-day">15</span>
                <span className="wedding-date-year">2026</span>
              </div>
              <div className="wedding-date-side">August</div>
            </div>
            <div className="wedding-time-location">
              at 4:00 PM Onwards
            </div>
          </div>

          <div className="venue-details">
            <p><strong>Venue:</strong> Shibi Auditorium, Vazhampuram, Kerala</p>
          </div>
        </div>
      </div>

      {/* Ink splash / ripped paper edge pointing downwards */}
      <div className="torn-edge-bottom">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ink-splash-bottom-ceremony" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="-10%" y="40%" width="120%" height="100%" fill="var(--bg-cream)" filter="url(#ink-splash-bottom-ceremony)" />
        </svg>
      </div>

      {/* Full-width floral at the bottom of the section */}
      <div className="ceremony-floral-fullwidth-container">
        <img src="/foral-3.png" alt="Floral decoration" className="ceremony-floral-fullwidth" />
      </div>
    </section>
  );
};

export default CeremonyDetails;
