import React from 'react';
import ArchCard from './ArchCard';
import './ourStory.css';

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="our-story-container">
        <ArchCard showFlourish={true} className="our-story-card">
          <h2 className="label-text">our story</h2>
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
    </section>
  );
};

export default OurStory;
