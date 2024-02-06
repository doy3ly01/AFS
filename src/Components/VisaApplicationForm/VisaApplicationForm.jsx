import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import './VisaApplicationForm.css'; // 
import DocumentUpload from '../Documents/DocumentUpload';
import { useNavigate } from 'react-router-dom';
import UserManager from '../Models/UserManager';
import Declaration from './Declaration';
import Payment from './Payment';
import FurtherActions from './FurtherActions';
import StartApplication from './StartApplication';
import loadingGif from '../Assets/loading.gif';




const VisaApplicationForm = ({ isLoggedIn }) => {
  const [currentStep, setCurrentStep] = useState(1); //Keep track of navigation bar
  const navigate = useNavigate(); //USe Navigate for button presses
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true); //state for loading symbol
  const[step, newStep] = useState(0);
  const declarationSectionRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(1);








//The following function is used for the navigation bar
  const NavigationBar = () => (
    <div className="navigation-bar">
      {Array.from({ length: 6 }).map((_, index) => ( //6 entries
        <div
          key={index}
          className={`step ${currentStep === index + 1 ? 'active' : ''}`}
          onClick={() => setCurrentStep(index + 1)}
        >
          {index + 1}. {getStepName(index + 1)}
        </div>
      ))}
    </div>
  );

  const getStepName = (step) => { //stores the navigation bar values
    switch (step) {
      case 1:
        return 'Start';
      case 2:
        return 'Application';
      case 3:
        return 'Documents'; 
      case 4:
        return 'Declaration';
      case 5:
        return 'Pay Fees';
      case 6:
        return 'Further Actions';
      default:
        return '';
    }
  };

  const handleProceed = (email, password, onPasswordCheck) => {
    // Check if the user is logged in with the entered email and password
    const userManager = new UserManager();
    const existingUser = userManager.findUserByEmail(email);

    if (existingUser && existingUser.password === password) {
      console.log('Login successful! Proceeding to the next step.');
      setCurrentStep(currentStep + 1); // Move to the next step
      onPasswordCheck(false); // Password is correct

    } else {
      console.log('Login failed. Invalid credentials.');
      onPasswordCheck(true); // Password is incorrect

    }
  };

  
  

  const NavigationDots = ({ currentSection, setCurrentSection }) => {
    const totalSections = 9; // Adjust the total number of sections
  
    return (
      <div className="navigation-dots">
        {Array.from({ length: totalSections }).map((_, index) => ( //map the dots to total steps
          <div
            key={index}
            className={`dot ${currentSection === index + 1 ? 'active' : ''}`}
            onClick={() => setCurrentSection(index + 1)}
          />
        ))}
      </div>
    );
  };

  const handleDocRequirementClick = () => {
    navigate('/Requirements');
    
  };

  const handleSaveAndContinue = () => {
    if (currentStep === 2 && currentSection < 9) {
      setCurrentSection(currentSection + 1); // Increment section within the ApplicationSection
    } else if (currentStep === 2 && currentSection === 9) {
      setCurrentStep(3); // Transition from last application section to document upload step
    } else {
      setCurrentStep(currentStep + 1); // Handle other steps
    }
  };
  
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., loading data) that takes some time
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the operation is complete
    }, 2000); // Adjust the duration as needed
  }, []);
  
 
const ApplicationSection = () => {
  
  const renderCurrentSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <div>
            <h2>Personal Details</h2>
            {/* Full Name (as per passport) */}
            <div className="input-group">
              <label>Full Name (as per passport):</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            
            {/* Date of Birth */}
            <div className="input-group">
              <label>Date of Birth:</label>
              <input type="date" />
            </div>
            
            {/* Place of Birth */}
            <div className="input-group">
              <label>Place of Birth:</label>
              <input type="text" placeholder="Enter your place of birth" />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Your Gender and Relationship Status</h2>
            <h3>Gender:</h3>
    <div className="input-groups radio-group">
      <div>
        <label>
          <input type="radio" name="gender" value="male" />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="unspecified" />
          Unspecified
        </label>
      </div>
    </div>

    {/* Martial Status Dropdown */}
    <div className="input-group">
      <label>Martial Status:</label>
      <select className='selection-dropdown'>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
        <option value="widowed">Widowed</option>
        <option value="other">Other</option>
      </select>
    </div>
          </div>
        );
        case 3:
          return (
            <div>
              <h2>Passport Information</h2>
              {/* Passport Number */}
              <div className="input-group">
                <label>Passport Number:</label>
                <input type="text" placeholder="Enter your passport number" />
              </div>
    
              {/* Date of Issue */}
              <div className="input-group">
                <label>Date of Issue:</label>
                <input type="date" />
              </div>
    
              {/* Expiry Date */}
              <div className="input-group">
                <label>Expiry Date:</label>
                <input type="date" />
              </div>
    
              {/* Issuing Authority */}
              <div className="input-group">
                <label>Issuing Authority:</label>
                <input type="text" placeholder="Enter the issuing authority" />
              </div>
  
              
            </div>
          );
          case 4:
  return (
    <div>
      <h2>Contact Information</h2>
      {/* Street Name */}
      <div className="input-group">
        <label>Street Name:</label>
        <input type="text" placeholder="Enter your street name" />
      </div>

      {/* Postal Code */}
      <div className="input-group">
        <label>Postal Code:</label>
        <input type="text" placeholder="Enter your postal code" />
      </div>

      {/* County */}
      <div className="input-group">
        <label>County:</label>
        <input type="text" placeholder="Enter your county" />
      </div>

      {/* Country */}
      <div className="input-group">
        <label>Country:</label>
        <input type="text" placeholder="Enter your country" />
      </div>

      {/* Phone Number with Country Code */}
      <div className="input-group">
        <label>Phone Number (with Country Code):</label>
        <input type="tel" placeholder="Enter your phone number with country code" />
      </div>

    </div>
  );
  case 5:
  return (
    <div className='form-section financial-information'>
      <h2>Purpose of Visit</h2>
      {/* Purpose of Visit */}
      <div className="input-group">
        <label>Purpose of Visit:</label>
        <input type="text" placeholder="Enter the purpose of your visit" />
      </div>

      {/* Intended Arrival Date */}
      <div className="input-group">
        <label>Intended Arrival Date:</label>
        <input type="date" />
      </div>

      {/* Intended Departure Date */}
      <div className="input-group">
        <label>Intended Departure Date:</label>
        <input type="date" />
      </div>

      {/* Accommodation Details */}
      <div className="input-group">
        <label>Details of Accommodation:</label>
        <input type="text" placeholder="Enter the purpose of your visit" />      </div>
    </div>
  );
  case 6:
  return (
    <div>
      <h2>Occupation Information</h2>
      {/* Occupation */}
      <div className="input-group">
        <label>Occupation:</label>
        <input type="text" placeholder="Enter your occupation" />
      </div>
      {/* Position/Title */}
      <div className="input-group">
        <label>Position/Title:</label>
        <input type="text" placeholder="Enter your position or title" />
      </div>


      {/* Employer's Name and Address */}
      <div className="input-group">
        <label>Employer's Name:</label>
        <input type="text" placeholder="Enter your employer's name" />
      </div>

      {/* Address */}
      <div className="input-group">
        <label>Employer's Address:</label>
        <input type="text" placeholder="Street Name" />
        <input type="text" placeholder="Post Code" />
        <input type="text" placeholder="County" />
        <input type="text" placeholder="Country" />
      </div>

      
    </div>
  );

case 7:
  return (
    <div>
      <h2>Financial Information</h2>
      
<div className="input-group">
  <label className="radio-label">
    Have you left your resident country for more than 30 days within the last 12 months?
  </label>
  <div className="radio-group">
    <input type="radio" id="leftCountryYes" name="leftCountry" value="yes" />
    <label htmlFor="leftCountryYes">Yes</label>
    <input type="radio" id="leftCountryNo" name="leftCountry" value="no" />
    <label htmlFor="leftCountryNo">No</label>
  </div>
</div>

{/* Additional Information if Yes */}
<div className="input-group">
  <label>If yes, please provide more information:</label>
  <input type="text" placeholder="Enter details of your previous international travel" />
</div>

{/* Previous Visa Information */}
<div className="input-group">
  <label className="radio-label">
    Have you previously applied for a Visa within the last 12 Months?
  </label>
  <div className="radio-group">
    <input type="radio" id="previousVisaYes" name="previousVisa" value="yes" />
    <label htmlFor="previousVisaYes">Yes</label>
    <input type="radio" id="previousVisaNo" name="previousVisa" value="no" />
    <label htmlFor="previousVisaNo">No</label>
  </div>
</div>

{/* Additional Information if Yes */}
<div className="input-group">
  <label>If yes, please provide more information:</label>
  <input type="text" placeholder="Enter details of your previous Visa Application" />
</div>

{/* Visa Type Selection */}
<div className="input-group">
  <label>Which type of visa are you applying for?</label>
  <select>
    <option value="tourist">Tourist Visa</option>
    <option value="business">Business Visa</option>
    <option value="student">Student Visa</option>
    <option value="work">Work Visa</option>
    <option value="family">Family Visa</option>
    <option value="transit">Transit Visa</option>
    <option value="marriage">Marriage/Partner Visa</option>
  </select>
</div>
    </div>
  );

  case 8:
    return (
      <div>
        <h2>Convictions and Other Penalties</h2>
        <p>At any time have you ever had any of the following, in any country.</p>

        {/* List of 7 selectable bullet points */}
        <div className="input-group">
          <label>List of Convictions and Penalties:</label>
          <ul>
          <li>
            <label htmlFor="conviction1">A criminal conviction</label>
            <input type="checkbox" id="conviction1" name="convictions" value="conviction1" />
          </li>
            <li>
            <label htmlFor="conviction2">A penalty for a driving offence</label>
              <input type="checkbox" id="conviction2" name="convictions" value="conviction2" />
            </li>
            <li>
            <label htmlFor="conviction3">An arrest or charge for which you are currently on, or awaiting trial</label>
              <input type="checkbox" id="conviction3" name="convictions" value="conviction3" />
            </li>
            <li>
              <label htmlFor="conviction4">A caution, warning, reprimand or other penalty</label>
              <input type="checkbox" id="conviction4" name="convictions" value="conviction4" />

            </li>
            <li>
            <label htmlFor="conviction5">A civil court judgement against you</label>
              <input type="checkbox" id="conviction5" name="convictions" value="conviction5" />
            </li>
            <li>
            <label htmlFor="conviction6">No, I have never had any of these</label>
              <input type="checkbox" id="conviction6" name="convictions" value="conviction6" />
            </li>
          </ul>
        </div>
        {/* Criminal Record Information */}
        <div className="input-group">
          <label>Criminal Record Information (if applicable):</label>
          <input type="text" placeholder="Enter details of your criminal record information" />
        </div>
      </div>
    );
    case 9:
      return (
        isLoading ? (
          <div className="loading-sign">
            <img src={loadingGif} alt="Loading..." />
          </div>
        ) : (
          <div className="form-section thank-you-section">
            <h2>Thank You!</h2>
            <p>We have successfully received your application. To upload the necessary documents, please press the continue button below.</p>
            <div className="button-set">
              <button className="doc-upload-btn" onClick={() => setCurrentStep(3)}>Continue to Document Upload</button>
            </div>
            <p>Alternatively, if you need to view the document requirements, please navigate to the following page</p>
            <div className="button-set">
              <button className="doc-upload-btn" onClick={handleDocRequirementClick}>View Requirements</button>
            </div>
          </div>
        )
      );    
      default:
        return null;
    }
  };

  return (
    <div className="form-section">
      <h2>Application Section</h2>
      <NavigationDots currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderCurrentSection()}
      <div className="button-set">
        <button className="Save" onClick={handleSaveAndContinue}>Save and Continue</button>
        <button className="Exit" onClick={handleExit}>Exit</button>
      </div>
    </div>
  );
};


  const renderCurrentSection = () => {
    switch (currentStep) {
      case 1:
        return <StartApplication handleProceed={handleProceed}
        handleSaveAndContinue={handleSaveAndContinue}
        handleExit={handleExit}/>;
      case 2:
        return <ApplicationSection />;
      case 3:
        return <DocumentUpload handleSaveAndContinue={handleSaveAndContinue}
                handleExit={handleExit}/>;
      case 4:
        return <Declaration handleSaveAndContinue={handleSaveAndContinue}
              handleExit={handleExit}/>;
      case 5:
        return <Payment handleSaveAndContinue={handleSaveAndContinue}
              handleExit={handleExit}/>;
      case 6:
        return <FurtherActions/>
      default:
        return null;
    }
  };

  
  

  const handleExit = () => {
    const isConfirmed = window.confirm("Are you sure you wish to exit? Any unsaved data will not be saved.");
    if (isConfirmed) {
      //Route back to maindashboard page 
      navigate('/MainDashboard');

    } else {
      // User clicked 'No', do nothing
    }
  };

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <NavigationBar />
      {renderCurrentSection()}
    </div>
  );
};

export default VisaApplicationForm;
