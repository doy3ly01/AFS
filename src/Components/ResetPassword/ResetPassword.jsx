import React, { useState, useEffect } from 'react';
import './ResetPassword.css';

const ResetPasswordPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showIncorrectPasswordMessage, setShowIncorrectPasswordMessage] = useState(false);
  const [email, setEmail] = useState('');

  // Reset the incorrect password message state when unmounting
  useEffect(() => {
    return () => {
      setShowIncorrectPasswordMessage(false);
    };
  }, []);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setShowSuccessMessage(false);
  };

  const handleResetPassword = () => {
   
    console.log('Resetting password...');
    closePopup();
    setShowSuccessMessage(true);
  };

  return (
    <div>
      <button onClick={openPopup}>Reset Password</button>

      {showSuccessMessage ? (
        <div className="success-message">
          <p>Please check your inbox to reset your password.</p>
        </div>
      ) : (
        isPopupOpen && (
          <div className="reset-password-popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>&times;</span>
              <h2>Reset Password</h2>
              <p>Enter your email address to reset your password.</p>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button onClick={handleResetPassword}>Reset Password</button>
            </div>
          </div>
        )
      )}

      {showIncorrectPasswordMessage && (
        <div>
          <h3>Password incorrect. Press here to reset.</h3>
          <span onClick={() => setShowIncorrectPasswordMessage(false)}>Reset</span>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordPopup;
