// Declaration.jsx
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar'; // Import the NavBar component

const Declaration = ({ isLoggedIn, handleSaveAndContinue, handleExit }) => {
  // Use state to manage the signature and date input fields
  const [signature, setSignature] = useState('');
  const [date, setDate] = useState('');

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} /> {/* Render the NavBar component with isLoggedIn prop */}
      <div className="center-container">
        <div className="form-section declaration-section">
          <h2>Declaration</h2>
          <p>
            I hereby declare that the information I have provided in this application
            is true and correct to the best of my knowledge and belief. I understand
            that providing false information can result in the denial of my visa
            application or revocation of an issued visa.
          </p>

          {/* Input field for digital signature */}
          <div className="input-group">
            <label>Digital Signature (Type your full name):</label>
            <input
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          {/* Input field for date */}
          <div className="input-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Button set for saving and continuing or exiting */}
          <div className="button-set">
            <button className="Save" onClick={handleSaveAndContinue}>Save and Continue</button>
            <button className="Exit" onClick={handleExit}>Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Declaration; // Export the Declaration component as the default export
