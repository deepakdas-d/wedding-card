import React, { useState } from 'react';
import './rsvpForm.css';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: 'accept'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAttendingChange = (value) => {
    setFormData(prev => ({
      ...prev,
      attending: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP Submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="simple-card rsvp-card">
        <h2 className="label-text">RSVP</h2>
        <div className="diamond-divider"><span className="diamond" /></div>
        <div className="thank-you-message">
          <p className="body-text">Thank you for your RSVP!</p>
          <p className="body-text">We can't wait to celebrate with you.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="simple-card rsvp-card">
      <h2 className="label-text">RSVP</h2>
      <div className="diamond-divider"><span className="diamond" /></div>
      
      <form onSubmit={handleSubmit} className="rsvp-form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">NAME</label>
          <input 
            type="text" 
            id="name"
            name="name"
            placeholder="Your Full Name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="email">EMAIL</label>
          <input 
            type="email" 
            id="email"
            name="email"
            placeholder="Email Address" 
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="phone">PHONE</label>
          <input 
            type="tel" 
            id="phone"
            name="phone"
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">ATTENDING</label>
          <div className="radio-group">
            <button 
              type="button"
              className={`radio-btn ${formData.attending === 'accept' ? 'active' : ''}`}
              onClick={() => handleAttendingChange('accept')}
            >
              Joyfully Accept
            </button>
            <button 
              type="button"
              className={`radio-btn ${formData.attending === 'decline' ? 'active' : ''}`}
              onClick={() => handleAttendingChange('decline')}
            >
              Regretfully Decline
            </button>
          </div>
        </div>
        
        <button type="submit" className="btn-submit">
          Send RSVP
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
