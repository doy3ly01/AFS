// Requirements.jsx
import React, { useState, useEffect } from 'react';
import './Requirements.css'; // Import the CSS stylesheet
import NavBar from '../NavBar/NavBar'; // Import the NavBar component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Define the Requirements functional component with props (isLoggedIn)
const Requirements = ({ isLoggedIn }) => {
  // Use useState to manage the state of open/closed visa categories
  const [openCategories, setOpenCategories] = useState([]);

  // Function to toggle the visibility of visa category requirements
  const toggleCategory = (category) => {
    if (openCategories.includes(category)) {
      // If the category is open, close it
      setOpenCategories(openCategories.filter((c) => c !== category));
    } else {
      // If the category is closed, open it
      setOpenCategories([...openCategories, category]);
    }
  };

  // Array of visa requirements with categories and associated requirements
  const visaRequirements = [
    {
      category: "Tourist",
      requirements: [
        "Valid Passport",
        "Completed Visa Application Form",
        "Proof of Accommodation",
        "Travel Itinerary",
        // Add more requirements as needed
      ],
    },
    {
      category: "E-Visa",
      requirements: [
        "Valid Passport",
        "Completed Application Form",
        "Digital Passport Photo",
        "Flight Itinerary",
        // Add more requirements as needed
      ],
    },
    {
      category: "Standard Visa",
      requirements: [
        "Valid Passport",
        "Completed Application Form",
        "Proof of Financial Means",
        "Travel Insurance",
        // Add more requirements as needed
      ],
    },
    {
      category: "Visa On Arrival",
      requirements: [
        "Valid Passport",
        "Completed Arrival Form",
        "Proof of Return Ticket",
        "Passport Sized Photos",
        // Add more requirements as needed
      ],
    },
    {
      category: "Visa-Free",
      requirements: [
        "Valid Passport",
        "Return/Onward Ticket",
        "Proof of Purpose of Visit",
        // Add more requirements as needed
      ],
    },
    // Add more visa categories as needed
  ];

  // Render the component's content
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} /> {/* Render the NavBar component with isLoggedIn prop */}
      <div className="landing-page-container">
        <div className="landing-page-header">
          <h1>Visa Document Requirements</h1>
          <p>
            Welcome to the Visa Document Requirements page. Here, you can find information about the required documents for different visa categories.
          </p>
        </div>

        <div className="visa-cards-container">
          {visaRequirements.map((visa, index) => (
            <div key={index} className="visa-card">
              <h1>{visa.category} Visa Document Requirements</h1>
              {openCategories.includes(visa.category) && (
                <div className="card-details">
                  <ul>
                    {visa.requirements.map((requirement, idx) => (
                      <li key={idx}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                className="view-more-button"
                onClick={() => toggleCategory(visa.category)}
              >
                {openCategories.includes(visa.category) ? 'Close \u2191' : 'View More \u2193'}
              </button>
            </div>
          ))}

          {/* Ready to Apply Section */}
          <div className="ready-to-apply-card">
            <h1>Ready to upload your documents?</h1>
            <p>Head to our document upload page to upload the corresponding documents.</p>
            <Link to="/documentUpload" className="apply-now-button">Go to Document Upload</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements; // Export the Requirements component as the default export
