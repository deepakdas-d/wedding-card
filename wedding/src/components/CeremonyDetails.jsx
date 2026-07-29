import React from 'react';
import ArchCard from './ArchCard';
import './ceremonyDetails.css';

const CeremonyDetails = () => {
  return (
    <section className="ceremony-details">
      <ArchCard showFlourish={true} id="ceremony">
        <div className="ceremony-content">
          <h2 className="label-text">WEDDING CEREMONY</h2>
          <div className="diamond-divider"><span className="diamond" /></div>
          
          <img src="/venu.jpeg" alt="Wedding Venue" className="venue-image" />

          <div className="details-list body-text">
            <p><strong>Date:</strong> Saturday, August 15, 2026</p>
            <p><strong>Time:</strong> 4:00 PM Onwards</p>
            <p><strong>Venue:</strong> Shibi Auditorium, Vazhampuram, Kerala</p>
          </div>
        </div>
      </ArchCard>
    </section>
  );
};

export default CeremonyDetails;
