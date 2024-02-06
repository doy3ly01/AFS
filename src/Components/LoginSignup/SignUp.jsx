// Import necessary dependencies and components
import React, { useState } from 'react';
import User from '../Models/User';  // Import the User model
import UserManager from '../Models/UserManager'; // Import the UserManager model
import './LoginSignup.css';  // Import the CSS styles
import user__icon from '../Assets/person.png';
import email__icon from '../Assets/email.png';
import password__icon from '../Assets/password.png';
import around from '../Assets/around.png';
import facebook from '../Assets/facebook.png';
import google from '../Assets/google.png';
import travel from '../Assets/Travel.png';
import Header from '../Header/Header';

// SignUp functional component
const SignUp = ({ onToggle }) => {
  // State variables to manage user data and action
  const [user, setUser] = useState(new User());
  const [SignUpAction, setAction] = useState('Sign Up');

  // Handle input changes and update the user object accordingly
  const handleInputChange = (field, value) => {
    const updatedUser = { ...user, [field]: value };
    setUser(updatedUser);
  };

  // ...

const handleSubmit = () => {
  console.log('Signing up:', user);
  const userManager = new UserManager();

  // check if passwords match
  if (user.password !== user.confirmPassword) {
     alert("Passwords do not match, please try again.");
     return;
  }

  // check if duplicate user
  if (userManager.findUserByEmail(user.email)) {
     alert("User with this email already exists, please try again");
     return;
  }
  

  
// Create a new User instance with all properties
const newUser = new User({
  email: user.email,
  password: user.password,
  confirmPassword: user.confirmPassword,
  
  
});
console.log(newUser);

// Add the new user
userManager.addUser(newUser);
   alert("Sign up successful");

   setUser(new User()); // Reset the form
};




  // Handle Google signup
  const handleGoogleSignUp = () => {
  
    console.log('Signing up with Google');
  };

  // Handle Facebook signup
  const handleFacebookSignUp = () => {
  
    console.log('Signing up with Facebook');
  };

  // JSX structure for the SignUp component
  return (
    <div className="main-container2">
      <Header/>
      <img src={travel} alt="Travel Image" className="travel-image" />
      <div className="background"></div>
      <div className="container">
        <div className="header">
          <div className="text">{SignUpAction}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {/* Email input */}
          <div className="input">
            <img src={email__icon} alt="" />
            <input
              type="text"
              placeholder='Email'
              value={user.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          {/* Password input */}
          <div className="input">
            <img src={password__icon} alt="" />
            <input
              type="password"
              placeholder='Password'
              value={user.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          </div>
          {/* Confirm Password input */}
          <div className="input">
            <img src={password__icon} alt="" />
            <input
              type="password"
              placeholder='Confirm Password'
              value={user.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            />
          </div>
        </div>

        {/* Sign up with social media */}
        <div className="or-sign-up">OR Sign Up with:</div>
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

        {/* Submit buttons */}
        <div className="submit-container">
          {/* Submit button for the current action */}
          <div className={SignUpAction === "Login" ? "submit gray" : "submit"} onClick={handleSubmit}>
            {SignUpAction === 'Login' ? 'Login' : 'Sign Up'}
          </div>
          {/* Toggle button to switch between Sign Up and Login actions */}
          <div className={SignUpAction === "Sign Up" ? "submit gray" : "submit"} onClick={() => onToggle('Login')}>
            {SignUpAction === 'Sign Up' ? 'Login' : 'Sign Up'}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the SignUp component
export default SignUp;
