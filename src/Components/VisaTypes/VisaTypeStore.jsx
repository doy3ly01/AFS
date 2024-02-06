import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import NavBar from '../NavBar/NavBar';
import './VisaType.css';


const CSV_FILE_PATH = './passport-index-tidy.csv';

const VisaTypeStore = ({ isLoggedIn }) => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterLetter, setFilterLetter] = useState('');
  const [selectedContext, setSelectedContext] = useState('');
  const [selectedPassport, setSelectedPassport] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [visaStatus, setVisaStatus] = useState('');
  const [isSelectionMade, setIsSelectionMade] = useState(false); // New state
  const [isVisible, setIsVisible] = useState(true);
  const [outcome, setOutcome] = useState(''); // Initialize with an empty string


  const getOutcomeClass = () => {
    switch (outcome) {
      case 'visa-free':
        return 'visa-free-status';
      case 'e-visa':
        return 'e-visa-status';
      case 'visa-required':
        return 'visa-required-status';
      case 'visa-on-arrival':
        return 'visa-arrival-status';
      default:
        return 'warning';
    }
  };
  

  const fetchCsvData = async () => {
    try {
      const response = await fetch(CSV_FILE_PATH);
      const csvData = await response.text();
      const parsedData = Papa.parse(csvData, { header: true });
      setAllData(parsedData.data);
    } catch (error) {
      console.error('Error fetching CSV data:', error);
    }
  };

  const filterDataByLetter = (letter) => {
    const uniqueValues = new Set(
      allData
        .filter((item) => {
          if (selectedContext === 'passport') {
            return item.Passport?.charAt(0).toLowerCase() === letter.toLowerCase();
          } else if (selectedContext === 'destination') {
            return item.Destination?.charAt(0).toLowerCase() === letter.toLowerCase();
          }
          return false;
        })
        .map((item) => (selectedContext === 'passport' ? item.Passport : item.Destination))
    );

    setFilteredData(Array.from(uniqueValues));
  };

  const handleFilterLetterClick = (letter) => {
    setFilterLetter(letter);
    filterDataByLetter(letter);

  };

 

  const handleCountryClick = (country) => {
    console.log('Clicked country:', country);

    if (selectedContext === 'passport') {
      setSelectedPassport(country);
    } else if (selectedContext === 'destination') {
      setSelectedDestination(country);
    }

    if (selectedContext === 'passport' && selectedDestination) {
      checkVisaStatus();
    } else if (selectedContext === 'destination' && selectedPassport) {
      checkVisaStatus();
    }

    setFilterLetter(''); // Reset filter letter after country click
    setIsSelectionMade(true);

    // Close the A-Z section after selecting a country
    setIsVisible(false);
  };


  const checkVisaStatus = () => {
    console.log('Checking Visa Status...');
    console.log('Selected Passport:', selectedPassport);
    console.log('Selected Destination:', selectedDestination);
  
    const matchingEntry = allData.find(
      (entry) =>
        entry.Passport === selectedPassport && entry.Destination === selectedDestination
    );
  
    if (matchingEntry) {
      console.log('Requirement:', matchingEntry.Requirement);
  
      // Check if the Requirement is a number
      const isVisaFree = !isNaN(matchingEntry.Requirement);
  
      if (isVisaFree) {
        // Display "Visa-free for" before the number of days
        setVisaStatus(`Visa-free for ${matchingEntry.Requirement} days`);
      } else {
        // Display the regular requirement
        setVisaStatus(`Requirement: ${matchingEntry.Requirement}`);
      }
  
      setOutcome(matchingEntry.outcome);
    } else {
      console.error('No matching entry found for the selected passport and destination.');
      setVisaStatus('No matching entry found.');
      setOutcome('default');
    }
  };
  
  

  useEffect(() => {
    fetchCsvData();
  }, []);



  return (
    <div style={{ textAlign: 'center' }}>
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="main-container">
        <div className="search-section">
          <div className="top-section">
          <h1>Wondering if you need a travel visa?</h1>
          <h4>Select your passport and destination to find out</h4>
          </div>         
          <button
            className={`main-button transition-fade`}
            onClick={() => {
              setSelectedContext('passport');
              setFilterLetter('');
              setIsVisible(true);
            }}
          >
            {selectedPassport || 'Search Passport'}
          </button>
          <button
            className={`main-button transition-fade`}
            onClick={() => {
              setSelectedContext('destination');
              setFilterLetter('');
              setIsVisible(true);
            }}
          >
            {selectedDestination || 'Search Destination'}
          </button>
        </div>
        <div className={`transition-fade az-section ${isVisible && (selectedContext === 'passport' || selectedContext === 'destination') ? '' : 'hidden'}`}>
          {Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)).map(
            (letter) => (
              <button
                className="letter-button"
                key={letter}
                onClick={() => handleFilterLetterClick(letter)}
              >
                {letter}
              </button>
            )
          )}
          {filterLetter && (
            <div>
              {filteredData.map((country, index) => (
                <button
                  className='country-button'
                  key={`${country}-${index}`}
                  onClick={() => handleCountryClick(country)}
                >
                  {country}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="visa-status-container">
          <h2 className={`visa-status-heading ${getOutcomeClass(outcome)}`}>Visa Status</h2>
          {visaStatus && <p className="visa-status-requirement">{visaStatus}</p>}
        </div>
        <div className="main-card-title">
            <h1>VISA GLOSSARY</h1>
        </div>
        <div className="visa-type-container">
  <div className="visa-type">
    <div className="visa-type-box">
      <h3 className="visa-type-t">Visa required</h3>
      <p className="visa-type-description">
        Visa required means that prior to travel, you must apply for a visa. This may require filling out forms, providing documents, and paying fees. It must be completed and approved prior to departure.
      </p>
    </div>
  </div>

  <div className="visa-type">
    <div className="visa-type-box">
      <h3 className="visa-type-t">Visa-free</h3>
      <p className="visa-type-description">
        Visa-free means that you can travel to the destination country without the need for a travel visa. In such a case only a valid passport is required for entry and exit purposes.
      </p>
    </div>
  </div>

  <div className="visa-type">
    <div className="visa-type-box">
      <h3 className="visa-type-t">eVisa (Electronic Visa):</h3>
      <p className="visa-type-description">
      An eVisa is a digital alternative to traditional embassy-acquired visas. The process includes online submission of personal details and payment, possibly with additional questionnaires and interviews. Once approved, the eVisa is crucial for verification at immigration checkpoints
      </p>
    </div>
  </div>

  <div className="visa-type">
    <div className="visa-type-box">
      <h3 className="visa-type-t">Visa-on-Arrival:</h3>
      <p className="visa-type-description">
        A visa-on-arrival means that you must secure a visa to enter the destination country, but you can obtain it upon reaching designated border checkpoints. This process may necessitate a fee payment.
      </p>
    </div>
  </div>

  <div className="visa-type">
    <div className="visa-type-box">
      <h3 className="visa-type-t">Tourist Card</h3>
      <p className="visa-type-description">
      A tourist card is an on-site registration issued to a tourist for a stated period of time, in lieu of a passport or a visa, and is obtained upon arrival.
      </p>
    </div>
  </div>
  <div className="visa-type">
    <div className="visa-type-box">
      <h3 className="visa-type-t">eTA</h3>
      <p className="visa-type-description">
      An Electronic Travel Authorization (eTA) is a mandatory requirement for foreign nationals who are exempt from visa requirements. It serves as a digital registration that is electronically associated with the traveler's passport.
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default VisaTypeStore;
