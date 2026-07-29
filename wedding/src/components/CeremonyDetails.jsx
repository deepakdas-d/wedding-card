import React from 'react';
import ArchCard from './ArchCard';
import './ceremonyDetails.css';

const CeremonyDetails = () => {
  return (
    <section className="ceremony-details">
      {/* Ink splash / ripped paper edge pointing upwards */}
      <div className="torn-edge-top">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ink-splash-top-ceremony" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="-10%" y="40%" width="120%" height="100%" fill="var(--bg-cream)" filter="url(#ink-splash-top-ceremony)"/>
        </svg>
      </div>

      <ArchCard showFlourish={true} id="ceremony">
        <div className="ceremony-content">
          <h2 className="label-text">wedding ceremony</h2>
          <div className="diamond-divider"><span className="diamond" /></div>
          
          <img src="/venu.jpeg" alt="Wedding Venue" className="venue-image" />

          <div className="details-list body-text">
            <p><strong>Date:</strong> Saturday, August 15, 2026</p>
            <p><strong>Time:</strong> 4:00 PM Onwards</p>
            <p><strong>Venue:</strong> Shibi Auditorium, Vazhampuram, Kerala</p>
          </div>
        </div>
      </ArchCard>

      {/* Ink splash / ripped paper edge pointing downwards */}
      <div className="torn-edge-bottom">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ink-splash-bottom-ceremony" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="-10%" y="40%" width="120%" height="100%" fill="var(--bg-cream)" filter="url(#ink-splash-bottom-ceremony)"/>
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
