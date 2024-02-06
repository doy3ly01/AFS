import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Create a CSS file for styling

const NavBar = ({ isLoggedIn }) => {
   
  //if user logged in don't show
  if (!isLoggedIn) {
    return null;
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/MainDashboard" className="navbar-logo">
          AFS
        </Link>

        <div className="navbar-links">
          <Link to="/MainDashboard">Home</Link>
          <div className="dropdown">
            <button className="dropbtn">Visas</button>
            <div className="dropdown-content">
              <Link to="/Visa">Visa Information</Link>
              <Link to="/VisaTypeStore">Visa Types</Link>
              <Link to="/VisaApplicationForm">Visa Application</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Documents</button>
            <div className="dropdown-content">
              <Link to="/Requirements">View Requirements</Link>
              <Link to="/documentUpload">Upload Document</Link>
            </div>
          </div>
          <Link to="/Appointment">Appointment</Link>
          <Link to="/Login">Sign Out</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
