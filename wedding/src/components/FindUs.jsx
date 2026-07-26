import React from 'react';
import './findUs.css';

const FindUs = () => {
  return (
    <div className="simple-card find-us-card">
      <h2 className="label-text">FIND US</h2>
      <div className="diamond-divider"><span className="diamond" /></div>
      
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1"
          title="Wedding Venue Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <p className="body-text address">
        The Grand Palace, Marine Drive, Mumbai, Maharashtra 400002
      </p>
      
      <a 
        href="https://maps.google.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-directions"
      >
        Get Directions
      </a>
    </div>
  );
};

export default FindUs;
