// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignupWrapper from './Components/LoginSignup/LoginSignupWrapper';
import MainDashboard from './Components/MainDashboard/MainDashboard';
import Login from './Components/LoginSignup/Login';
import  Contact  from './Components/Contact/Contact';
import Visa from './Components/VisaApplication/Visa';
import VisaTypeStore from './Components/VisaTypes/VisaTypeStore';
import Requirements from './Components/Documents/Requirements';
import DocumentUpload from './Components/Documents/DocumentUpload';
import VisaApplicationForm from './Components/VisaApplicationForm/VisaApplicationForm';
import Declaration from './Components/VisaApplicationForm/Declaration';
import Appointment from './Components/AppointmentBooking/Appointment';

function App() {
  // Assuming you have a state that tracks login status
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<LoginSignupWrapper setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/MainDashboard"
            element={<MainDashboard isLoggedIn={true} />}
          />
          <Route
          path="/Contact" 
          element={<Contact isLoggedIn={true} />} 
          />
          
          <Route
          path="/Visa" 
          element={<Visa isLoggedIn={true} />} 
          />
          <Route
          path="/Declaration" 
          element={<Declaration isLoggedIn={true} />} 
          />
           <Route
          path="/VisaTypeStore" 
          element={<VisaTypeStore isLoggedIn={true} />} 
          />
          <Route
          path="/Requirements" 
          element={<Requirements isLoggedIn={true} />} 
          />
            <Route
          path="/DocumentUpload" 
          element={<DocumentUpload isLoggedIn={true} />} 
          />
          <Route
          path="/VisaApplicationForm" 
          element={<VisaApplicationForm isLoggedIn={true} />} 
          />
          <Route
          path="/Appointment" 
          element={<Appointment isLoggedIn={true} />} 
          />
            <Route
          path="/Login" element={<LoginSignupWrapper isLoggedIn={true} />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
