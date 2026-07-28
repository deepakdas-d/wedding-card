import React from 'react';
import ArchCard from './ArchCard';
import './findUs.css';

const FindUs = () => {
  return (
    <ArchCard showFlourish={true} className="find-us-card">
      <h2 className="label-text">FIND US</h2>
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
  );
};

export default FindUs;
