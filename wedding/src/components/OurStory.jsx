import React from 'react';
import ArchCard from './ArchCard';
import './ourStory.css';

const OurStory = () => {
  return (
    <section className="our-story-section">
      {/* Top tear: Beige tearing UP into Eggplant background */}
      <div className="torn-edge-top">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ink-splash-top-story" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="-10%" y="40%" width="120%" height="100%" fill="var(--bg-cream)" filter="url(#ink-splash-top-story)"/>
        </svg>
      </div>

      <div className="our-story-container">
        <ArchCard showFlourish={true} className="our-story-card">
          <h2 className="label-text">OUR STORY</h2>
          <div className="diamond-divider"><span className="diamond" /></div>
          <p className="body-text italic-quote">
            "Sometimes, the most beautiful journeys begin when you least expect them."
          </p>
          <p className="body-text narrative">
            Our story started at the wedding of a mutual friend, where a simple introduction turned into a heartfelt conversation. What began with a smile soon became countless conversations, shared laughter, and unforgettable memories.
          </p>
          <p className="body-text narrative">
            With every passing day, our bond grew stronger, filling our lives with love, trust, and happiness. That unexpected meeting became the beginning of a beautiful forever.
          </p>
          <p className="body-text narrative">
            And now, with grateful hearts, we can't wait to celebrate the next chapter of our journey together—with you by our side. ✨
          </p>
        </ArchCard>
      </div>

      {/* Bottom tear: Beige tearing DOWN into Eggplant background */}
      <div className="torn-edge-bottom">
        <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="ink-splash-bottom-story" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <rect x="-10%" y="40%" width="120%" height="100%" fill="var(--bg-cream)" filter="url(#ink-splash-bottom-story)"/>
        </svg>
      </div>
    </section>
  );
};

export default OurStory;
