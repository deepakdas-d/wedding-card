import React from 'react';
import ArchCard from './ArchCard';
import './findUs.css';

const FindUs = () => {
  return (
    <section className="find-us-section">
      <div className="torn-edge-top">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ink-splash-top-findus" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="-10%" y="40%" width="120%" height="100%" fill="var(--bg-cream)" filter="url(#ink-splash-top-findus)"/>
        </svg>
      </div>

      <div className="find-us-container">
        <ArchCard showFlourish={true} className="find-us-card">
          <h2 className="label-text">find us</h2>
          <div className="diamond-divider"><span className="diamond" /></div>
          
          <div className="map-container">
            <iframe 
              src="https://maps.google.com/maps?q=Shibi+Auditorium,+Vazhampuram,+Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Wedding Venue Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <p className="body-text address">
            Shibi Auditorium, Vazhampuram, Kerala
          </p>
          
          <a 
            href="https://share.google/4mJw86FdtfxxDuteI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-directions"
          >
            Get Directions
          </a>
        </ArchCard>
      </div>

      <div className="torn-edge-bottom">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ink-splash-bottom-findus" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="-10%" y="40%" width="120%" height="100%" fill="var(--bg-cream)" filter="url(#ink-splash-bottom-findus)"/>
        </svg>
      </div>
    </section>
  );
};

export default FindUs;
