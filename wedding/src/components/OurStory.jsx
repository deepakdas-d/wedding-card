import React from 'react';
import './ourStory.css';

const OurStory = () => {
  return (
    <div className="simple-card our-story-card">
      <h2 className="label-text">OUR STORY</h2>
      <div className="diamond-divider"><span className="diamond" /></div>
      <p className="body-text italic-quote">
        "Some love stories are written in the stars..."
      </p>
      <p className="body-text narrative">
        What began as a chance meeting blossomed into a beautiful journey of love, laughter, and countless shared dreams. From our first conversation, we knew there was something extraordinary between us.
      </p>
      <p className="body-text narrative">
        Through every season, our love has grown deeper and stronger. Now, we are ready to begin the most beautiful chapter of our lives — together, forever.
      </p>
    </div>
  );
};

export default OurStory;
