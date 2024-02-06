// Import necessary dependencies and components
import React, { useState } from 'react';
import './Visa.css';  // Import the CSS styles
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


// Visa functional component
const Visa = ({ isLoggedIn }) => {
  // State variables to manage card details visibility
  const [cardDetails1, setCardDetails1] = useState(false);
  const [cardDetails2, setCardDetails2] = useState(false);
  const [cardDetails3, setCardDetails3] = useState(false);
  const [cardDetails4, setCardDetails4] = useState(false);
  const [cardDetails5, setCardDetails5] = useState(false);
  const [cardDetails6, setCardDetails6] = useState(false);
  const [cardDetails7, setCardDetails7] = useState(false);
  const navigate = useNavigate(); // Use Navigate for button presses

   // Function to handle click on apply
   const handleApplyClick = (visaType) => {
    navigate('/VisaApplicationForm');
  };


  // Function to toggle card details visibility based on card key
  const toggleCardDetails = (cardKey) => {
    switch (cardKey) {
      case 'card1':
        setCardDetails1((prevDetails) => !prevDetails);
        break;
      case 'card2':
        setCardDetails2((prevDetails) => !prevDetails);
        break;
      case 'card3':
        setCardDetails3((prevDetails) => !prevDetails);
        break;
      case 'card4':
        setCardDetails4((prevDetails) => !prevDetails);
        break;
      case 'card5':
        setCardDetails5((prevDetails) => !prevDetails);
        break;
      case 'card6':
        setCardDetails6((prevDetails) => !prevDetails);
        break;
      case 'card7':
        setCardDetails7((prevDetails) => !prevDetails);
        break;
      default:
        break;
    }
  };

  // JSX structure for the Visa component
  return (
    <div>
      {/* Render NavBar only if logged in */}
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="landing-page-container">
        <div className="landing-page-header">
          <h1>Applying for a Visa</h1>
          <h3>View the information below before starting your application</h3>
        </div>

        <div className="visa-cards-container">
          <div className="guide">
            <h1>How does it work?</h1>
            <h4>Let us guide you through the process</h4>
          </div>

          {/* Card 1 */}
          <div className="visa-card">
            <h1>Identify visa type</h1>
            <h3>Choose the right visa for your trip</h3>
            {cardDetails1 && (
              <div className="card-details">
                <p>
                  The first step is to determine which <a href="/VisaTypeStore">visa type</a> you need,
                  and check whether you’re eligible to apply for it.
                  <br /><br />
                  You’ll also need to know the <a href="/Requirements">documents</a> that you’ll have to submit along with your application,
                  how long the application might take, and fees you’ll have to pay.
                  <br /><br />
                  Each application must comply with the guidelines applicable for your visa category.
                </p>
              </div>
            )}
            <button
              className="view-more-button"
              onClick={() => toggleCardDetails('card1')}
            >
              {cardDetails1 ? 'Close \u2191' : 'View More \u2193'}
            </button>
          </div>

          {/* Card 2 */}
          <div className="visa-card">
            <h1>Prepare your application</h1>
            <h3>Get started with your visa application</h3>
            {cardDetails2 && (
              <div className="card-details">
                <p>
                  In order to start a <a href="/VisaApplicationForm">visa application</a>, you are required to complete an online form operated by the <a href="link_to_your_form">Advanced Foreign Services (AFS)</a>.
                  <br /><br />
                  When filling the form, please ensure to select the correct Mission and visa category, enter complete information without errors, and then proceed to <a href="link_to_print">print</a> and sign the hard copy of the application form.
                </p>
              </div>
            )}
            <button
              className="view-more-button"
              onClick={() => toggleCardDetails('card2')}
            >
              {cardDetails2 ? 'Close \u2191' : 'View More \u2193'}
            </button>
          </div>

          {/* Card 3 */}
          <div className="visa-card">
            <h1>Book an appointment</h1>
            <h3>Choose an AFS Centre and make an appointment</h3>
            {cardDetails3 && (
              <div className="card-details">
                <p>
                For queries related to visa application appointments, to schedule visa <a href="/Appointment">appointments</a> and to get in touch with us via email, please click <a href="/Contact">here</a>
                </p>
              </div>
            )}
            <button
              className="view-more-button"
              onClick={() => toggleCardDetails('card3')}
            >
              {cardDetails3 ? 'Close \u2191' : 'View More \u2193'}
            </button>
          </div>

          {/* Card 4 */}
          <div className="visa-card">
            <h1>Pay your fees</h1>
            <h3>Find out the amount you need to pay</h3>
            {cardDetails4 && (
              <div className="card-details">
                <p>
                  Once you have made your application, you will need to pay your <a href='/fee'>visa application fee.</a> If you download the form to print and bring to the Visa Application Centre, payment will be made at the time of your appointment.
                  <br /><br />
                  You pay the visa fee at the <a href="link_to_fee_location">location specified.</a>
                </p>
              </div>
            )}
            <button
              className="view-more-button"
              onClick={() => toggleCardDetails('card4')}
            >
              {cardDetails4 ? 'Close \u2191' : 'View More \u2193'}
            </button>
          </div>

          {/* Card 5 */}
          <div className="visa-card">
            <h1>Visit an AFS Visa Application Centre</h1>
            <h3>Attend your scheduled appointment</h3>
            {cardDetails5 && (
              <div className="card-details">
                <p>
                  Kindly refer <a href="link_to_attend_centre">Attend a Centre</a> for more information related to Jurisdiction and the available AFS Application Centres in the UK where your applications can be submitted.
                  <br /><br />
                  Once you have filled your visa form, you need to <a href="/Appointment">book an appointment</a> to have your fingerprints and photo taken at a Visa Application Centre. This is known as ‘biometric information’.
                  <br /><br />
                  Once you’ve booked your appointment, you’ll receive an appointment confirmation email along with the letter of appointment.
                </p>
              </div>
            )}
            <button
              className="view-more-button"
              onClick={() => toggleCardDetails('card5')}
            >
              {cardDetails5 ? 'Close \u2191' : 'View More \u2193'}
            </button>
          </div>

          {/* Card 6 */}
          <div className="visa-card">
            <h1>Track your application</h1>
            <h3>Stay informed about the progress of your application</h3>
            {cardDetails6 && (
              <div className="card-details">
                <p>
                  You will receive an email update when your decision has been returned to the Visa Application Centre. If you can’t access email easily, or would like more detailed tracking information, you may also be able to get updates by SMS sent directly to your phone. Check whether this service is available at the <a href="link_to_VAC">Visa Application Centre.</a>
                  <br /><br />
                  You can also track your visa application status online. Use the Reference Number present on the invoice/receipt issued by the Visa Application Centre along with your last name to access this <a href="link_to_status">service.</a>
                </p>
              </div>
            )}
            <button
              className="view-more-button"
              onClick={() => toggleCardDetails('card6')}
            >
              {cardDetails6 ? 'Close \u2191' : 'View More \u2193'}
            </button>
          </div>

          {/* Card 7 */}
          <div className="visa-card">
            <h1>Delivery of processed documents</h1>
            {cardDetails7 && (
              <div className="card-details">
                <h3>Processed Visa Application documents will be delivered by Post/Courier. A secured courier service is available at the AFS application centres.</h3>
              </div>
            )}
            <button
              className="view-more-button"
              onClick={() => toggleCardDetails('card7')}
            >
              {cardDetails7 ? 'Close \u2191' : 'View More \u2193'}
            </button>
          </div>

          {/* Ready to Apply Card */}
          <div className="ready-to-apply-card">
            <h1>Ready to Apply?</h1>
            <h3>Start your visa process and then come back to AFS Global with your reference number to take advantage of the services on offer.</h3>
            <button onClick = {handleApplyClick} className="apply-now-button">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Visa component
export default Visa;
