import React from 'react';
import './noteForYou.css';

const NoteForYou = () => {
  return (
    <section className="note-section">
      <div className="simple-card">
        <h2 className="label-text">A NOTE FOR YOU</h2>
        <div className="diamond-divider"><span className="diamond" /></div>
        
        <p className="note-text body-text">
          "Two souls with but a single thought, two hearts that beat as one. We are blessed to have you in our lives, and it would mean the world to us if you could join us on our special day."
        </p>
      </div>
    </section>
  );
};

export default NoteForYou;
