// MainDashboard.jsx
import React from 'react';
import NavBar from '../NavBar/NavBar'; // Import the NavBar component
import './MainDashboard.css'; // Import the CSS stylesheet
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import AboutUsImage from '../Assets/Map.png'; // Import images for display
import VisaType1Image from '../Assets/BigBen.png';
import VisaType2Image from '../Assets/EiffelTower.png';
import VisaType3Image from '../Assets/WhiteHouse.png';
import { FaBusinessTime, FaSuitcase } from "react-icons/fa"; // Import icons for services
import { PiStudentFill } from "react-icons/pi";
import { FaPersonSkiing } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";

const MainDashboard = ({ isLoggedIn }) => {
  // Array of words for the rotating text
  const words = ['Effortless', 'Simple', 'Quick'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate(); // Use Navigate for button presses

  // Function to handle service click and select/deselect service
  const handleServiceClick = (serviceNumber) => {
    setSelectedService(serviceNumber === selectedService ? null : serviceNumber);
  };

  // Function to handle click on a visa type (e.g., London, France, America)
  const handleVisaTypeClick = (visaType) => {
    console.log(`Clicked on Visa Type: ${visaType}`);
  };

  // Function to handle "Find out more" button click
  const handleFindOutMoreClick = () => {
    navigate('/Visa');
  };

  // Function to handle "Contact Us" button click
  const handleContactUsClick = () => {
    navigate('/Contact');
  };

  // Effect to update the rotating text at a fixed interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Adjust the interval as needed 

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  // Render the component's content
  return (
    <div>
      <div className="main-dashboard">
        {/* Section 1: User */}
        <div className="user-section">
          <h2>
            <span>We Make The<br />Visa Process</span>
            <span className="word">{words[activeIndex].trim()}</span>
          </h2>
          <p>
            At AFS, we go beyond visas. We're your dedicated travel companion, providing streamlined processes, expert guidance, and a seamless experience from application to adventure.
          </p>
          <div className="button-container">
            <button onClick={handleFindOutMoreClick}>Find out more</button>
            <button onClick={handleContactUsClick}>Contact Us</button>
          </div>
        </div>

        {/* Section 2: Our Services */}
        <div className="services-title">
          <h1>OUR SERVICES</h1>
        </div>
        <div className="services-section">
          {/* Service 1 */}
          <div className={`service ${selectedService === 1 ? 'selected' : ''}`} onClick={() => handleServiceClick(1)}>
            <h3>Business Visa</h3>
            <p>
              A Business Visa serves as a travel authorization for entrepreneurs or company employees to temporarily visit a foreign country for specific business purposes. It allows engagement in activities such as meetings, conferences, and negotiations that do not involve employment within the issuing country.
            </p>
            <button onClick={handleFindOutMoreClick}>Learn More</button>
            <IoMdPersonAdd className="service-icon" />
          </div>

          {/* Service 2 */}
          <div className={`service ${selectedService === 2 ? 'selected' : ''}`} onClick={() => handleServiceClick(2)}>
            <h3>Work Visa</h3>
            <p>
              A Work Visa is designed to authorize legal employment in a foreign country. It is granted based on a job offer from an employer in the destination country, allowing individuals to engage in professional activities, training, or research associated with their employment.
            </p>
            <button onClick={handleFindOutMoreClick}>Learn More</button>
            <FaBusinessTime className="service-icon" />
          </div>

          {/* Service 3 */}
          <div className={`service ${selectedService === 3 ? 'selected' : ''}`} onClick={() => handleServiceClick(3)}>
            <h3>Student Visa</h3>
            <p>
              A Student Visa enables individuals to pursue education in a foreign country by granting them legal residency. It is obtained upon acceptance into an educational institution, providing the opportunity to engage in academic pursuits, research, and student-related activities.
            </p>
            <button onClick={handleFindOutMoreClick}>Learn More</button>
            <PiStudentFill className="service-icon" />
          </div>

          {/* Service 4 */}
          <div className={`service ${selectedService === 4 ? 'selected' : ''}`} onClick={() => handleServiceClick(4)}>
            <h3>Holiday Visa</h3>
            <p>
              A Holiday Visa, also known as a Tourist Visa, is intended for leisure travel and tourism. It allows individuals to visit a foreign country for a short duration, engaging in activities such as sightseeing, recreation, and visiting friends or family.
            </p>
            <button onClick={handleFindOutMoreClick}>Learn More</button>
            <FaPersonSkiing className="service-icon" />
          </div>
        </div>

        {/* Section 3: About Us */}
        <div className="about-us-section">
          <img src={AboutUsImage} alt="About Us" />

          <div className="about-us-card">
            <h2>About Us</h2>
            <p>
              Welcome to Advanced Foreign Services (AFS) – your global visa solution.
              With a vast network and a unified online system, AFS simplifies visa applications for all countries.
              Receive personalized guidance, flexible application options, and stay updated on real-time visa rules.
              Experience efficiency and expertise with AFS on your visa journey.
            </p>
            <button onClick={handleFindOutMoreClick}>Learn More</button>
          </div>
        </div>

        {/* Section 4: Choose Visa Type */}
        <div className="visa-types-section">
          <h2 className="visa-title">Let's get started</h2>
          <p>Select your destination below</p>
          <div className="visa-types-container">
            <div className="visa-types-item" onClick={() => handleVisaTypeClick('visa1')}>
              <div className="visa-types-image">
                <img src={VisaType1Image} alt="Visa Type 1" />
                <div className="visa-type-title">London</div>
              </div>
            </div>

            <div className="visa-types-item" onClick={() => handleVisaTypeClick('visa2')}>
              <div className="visa-types-image">
                <img src={VisaType2Image} alt="Visa Type 2" />
                <div className="visa-type-title">France</div>
              </div>
            </div>

            <div className="visa-types-item" onClick={() => handleVisaTypeClick('visa3')}>
              <div className="visa-types-image">
                <img src={VisaType3Image} alt="Visa Type 3" />
                <div className="visa-type-title">America</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render NavBar only if logged in */}
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="content-below-navbar"></div>
    </div>
  );
};

export default MainDashboard;
