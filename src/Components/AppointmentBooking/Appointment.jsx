import React, { useState } from 'react';
import './Appointment.css'; // Import the CSS stylesheet
import NavBar from '../NavBar/NavBar'; // Import the NavBar component

// Define the Appointment functional component with props (isLoggedIn)
const Appointment = ({ isLoggedIn }) => {
  // Use useState to manage the state of various form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reasonForVisit, setReasonForVisit] = useState('');
  const [location, setLocation] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  // Placeholder data for dropdowns
  const reasonsForVisit = ['Visa Application', 'Visa Renewal', 'Document Submission', 'Other'];
  const locations = ['Visa Center A', 'Visa Center B', 'Visa Center C', 'Visa Center D'];

  // Event handler for changing the appointment date
  const handleAppointmentDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  // Event handler for changing the appointment time
  const handleAppointmentTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  // Render the component's content
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} /> {/* Render the NavBar component with isLoggedIn prop */}
      <div className="appointment-booking-container">
        <h2>Book Appointment</h2>
        <form className="appointment-form">
          <label htmlFor="reasonForVisit">Reason for Visit</label>
          <select
            id="reasonForVisit"
            value={reasonForVisit}
            onChange={(e) => setReasonForVisit(e.target.value)}
          >
            {reasonsForVisit.map((reason) => (
              <option key={reason} value={reason}>{reason}</option>
            ))}
          </select>

          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label htmlFor="location">Location</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>

          <label htmlFor="appointmentDate">Date of Appointment</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={handleAppointmentDateChange}
          />

          <label htmlFor="appointmentTime">Time of Appointment</label>
          <input
            type="time"
            id="appointmentTime"
            value={appointmentTime}
            onChange={handleAppointmentTimeChange}
          />

          <div className="appointment-actions">
            <button type="submit" className="book-now">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment; // Export the Appointment component as the default export
