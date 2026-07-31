import React from 'react';
import './noteForYou.css';

const NoteForYou = () => {
  return (
    <section className="note-section">
      <div className="transparent-card">
        <h2 className="section-heading">A Note for You</h2>
        <div className="diamond-divider"><span className="diamond" /></div>

        <p className="note-text body-text">
          "Two souls with but a single thought, two hearts that beat as one. We are blessed to have you in our lives, and it would mean the world to us if you could join us on our special day."
        </p>
      </div>

      <div className="ceremony-floral-fullwidth-container">
        <img src="/floral-4.png" alt="Floral decoration" className="ceremony-floral-fullwidth" />
      </div>
    </section>
  );
};

export default NoteForYou;
