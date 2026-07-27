import React from 'react';
import ArchCard from './ArchCard';
import './couplePics.css';

const CouplePics = () => {
  return (
    <section className="couple-pics-section">
      <ArchCard showFlourish={false} id="couple-pics">
        <div className="couple-pics-content">
          <div className="couple-image-container">
            <img src="/couple.jpg" alt="Shahin Shah and Shahala" className="couple-image" />
          </div>
        </div>
      </ArchCard>
    </section>
  );
};

export default CouplePics;
