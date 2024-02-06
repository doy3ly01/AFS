// FurtherActions.jsx
import React from 'react';
import './FurtherActions.css'; // Import the CSS stylesheet to style the component
import Appointment from '../AppointmentBooking/Appointment'; // Import the Appointment component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const FurtherActions = () => {
  const navigate = useNavigate(); // Use Navigate for button presses

  // Function to handle the "Book Appointment" button click
  const handleBookingClick = () => {
    navigate('/Appointment'); // Navigate to the '/Appointment' route
  };

  // Render the component's content
  return (
    <div className="further-actions-container">
      <h2>Thank You!</h2>
      <p>We have received your payment and application for the visa process.</p>
      <p>The last thing you need to do is book an appointment at one of our AFS centers.</p>
      <p>Please click below to select a date and time that is convenient for you.</p>
      <button className="book-appointment-button" onClick={handleBookingClick}>
        Book Appointment
      </button>
    </div>
  );
};

export default FurtherActions; // Export the FurtherActions component as the default export
