import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../Models/User';
import email__icon from '../Assets/email.png';
import password__icon from '../Assets/password.png';
import './LoginSignup.css';
import Dashboard from '../MainDashboard/MainDashboard';
import beach from '../Assets/beach.png';
import facebook from '../Assets/facebook.png';
import google from '../Assets/google.png';
import man from '../Assets/LoginImg.png';
import Header from '../Header/Header';
import UserManager from '../Models/UserManager';

const Login = ({ onClose, onToggle }) => {
  // State to manage user data
  const [user, setUser] = useState(new User());

  // React Router hook for navigation
  const navigate = useNavigate();

  // State to manage the current action (Sign Up or Login)
  const [SignUpAction, setAction] = useState('Sign Up');

  // Function to handle changes in input fields
  const handleInputChange = (field, value) => {
    const updatedUser = { ...user, [field]: value };
    setUser(updatedUser);
  };

  // Function to handle Google sign up
  const handleGoogleSignUp = () => {
    console.log('Signing up with Google');
  };

  // Function to handle Facebook sign up
  const handleFacebookSignUp = () => {
    console.log('Signing up with Facebook');
  };

// Function to handle login
const handleLogin = () => {
  const userManager = new UserManager();

  // Extract email and password from user state
  const { email, password } = user;

  // Check if there is a user with the provided email
  const existingUser = userManager.findUserByEmail(email);

  if (existingUser && existingUser.password === password) {
    console.log('Login successful!');
    // Close the login component or perform any other necessary actions
    onClose();

    // Navigate to the main dashboard
    navigate('/MainDashboard');
  } else {
    console.log('Login failed. Invalid credentials.');
    // Handle the case where login fails (show an error message, etc.)
  }
};





  return (
    <div className='container2'>
      <Header/>
      {/* Login Form Container */}
      <div className="login-container">

        {/* Login-specific UI */}
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {/* Only email and password inputs for login */}
          <div className="row">
            <div className="input">
              <img src={email__icon} alt="" />
              <input
                type="text"
                placeholder='Email/Username'
                value={user.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input">
              <img src={password__icon} alt="" />
              <input
                type="password"
                placeholder='Password'
                value={user.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="or-sign-up">OR Login with:</div>
        <div className="social-icons">
          {/* Google signup */}
          <img
            src={google}
            alt="Google Sign Up"
            onClick={handleGoogleSignUp}
          />

          {/* Facebook signup */}
          <img
            src={facebook}
            alt="Facebook Sign Up"
            onClick={handleFacebookSignUp}
          />
        </div>

        {/* Additional login-specific elements */}
        <div className="forgot-password">Lost Password? <span>Click here!</span></div>

        <div className="submit-container">
          {/* Toggle between Sign Up and Login */}
          <div className={SignUpAction === "Login" ? "submit gray" : "submit"} onClick={handleLogin}>
            {SignUpAction === 'Sign Up' ? 'Login' : 'Sign Up'}
          </div>
          <div className={SignUpAction === "Sign Up" ? "submit gray" : "submit"} onClick={() => onToggle('Login')}>
            {SignUpAction === 'Login' ? 'Login' : 'Sign Up'}
          </div>
        </div>
      </div>
      <img src={man} alt="Travel Image" className="man-image" />
    </div>
  );
};

export default Login;
