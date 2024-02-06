// StartSection.jsx
import React, { useState } from 'react';
import ResetPasswordPopup from '../ResetPassword/ResetPassword';


const StartApplication = ({ handleProceed, handleExit }) => {
  const [localEmail, setLocalEmail] = useState('');
  const [localPassword, setLocalPassword] = useState('');
  const [isResetPasswordPopup, setResetPasswordPopup] = useState(false); // Added state for reset password popup
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);
  const [isResetPasswordPopupVisible, setIsResetPasswordPopupVisible] = useState(false);

  // Local handlers to update email and password
  const handleEmailChange = (e) => {
    setLocalEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setLocalPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Call handleProceed from props
    handleProceed(localEmail, localPassword, setIsIncorrectPassword);
  };

  const handleResetPasswordClick = () => {
    setIsResetPasswordPopupVisible(true);
  };

  return (
    <div>
      <div className="form-section start-section">
      <h1>Confirm your details</h1>
      <p>
        Please confirm your email address and password below so you can save your answers. <br />
        You will then be emailed a unique link to let you log back into your application at a later point, if needed.
      </p>
      <div className="input-group">
        <label>Enter your email:</label>
        <input
          type="email"
          value={localEmail}
          onChange={handleEmailChange}
          autoComplete="off"
        />
      </div>
      <div className="input-group">
        <label>Enter your password:</label>
        <input
          type="password"
          value={localPassword}
          onChange={handlePasswordChange}
          autoComplete="off"
        />
      </div>
      <div className="button-set">
        <button className="Save" onClick={handleSubmit}>Save and Continue</button>
        {/* Assuming handleExit is provided correctly */}
        <button className="Exit" onClick={handleExit}>Exit</button>
      </div>
      {isIncorrectPassword && (
        <div>
          <h3>
            Password incorrect. Click{" "}
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={handleResetPasswordClick}
            >
              here
            </span>{" "}
            to reset.
          </h3>
        </div>
      )}
      {isResetPasswordPopupVisible && <ResetPasswordPopup />}
    </div>
    </div>
    
  );
};

export default StartApplication;
