import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Import the envelope icon from react-icons
import './Contact.css';
import NavBar from '../NavBar/NavBar';
import ContactImg from '../Assets/man.png';

const Contact = ({ isLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="contact-page">
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="contact-container">
        <div className="left-section">
          <img src={ContactImg} alt="Contact Us" className="contact-image" />
        </div>
        <div className="right-section">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us with your questions or concerns.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Question" rows="4" required />
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
