import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar'; // Import the NavBar component
import { FaCloudUploadAlt } from 'react-icons/fa'; // Import the cloud upload icon
import './document.css'; // Import the CSS stylesheet
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Declaration from '../VisaApplicationForm/Declaration'; // Import the Declaration component

// Define the DocumentUpload functional component with props (isLoggedIn, handleSaveAndContinue, handleExit)
const DocumentUpload = ({ isLoggedIn, handleSaveAndContinue, handleExit }) => {
  // Use useState to manage the state of various form fields and data
  const [documentTitle, setDocumentTitle] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use Navigate for button presses

  // Event handler for changing the document title
  const handleDocumentTitleChange = (e) => {
    setDocumentTitle(e.target.value);
    setError('');
  };

  // Event handler for changing the selected files
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  // Event handler for proceeding to the Declaration page
  const handleProceed = () => {
    navigate('/Declaration');
  };

  // Event handler for uploading files
  const handleUpload = () => {
    if (!documentTitle) {
      setError('ERROR: Please provide a title.');
      return;
    }

    console.log('Uploading files:', selectedFiles);
    const newUploads = selectedFiles.map(file => ({ title: documentTitle, file }));
    setUploadedFiles(prev => [...prev, ...newUploads]);

    // Clear the selected files and title
    setSelectedFiles([]);
    setDocumentTitle('');
  };

  // Render the component's content
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} /> {/* Render the NavBar component with isLoggedIn prop */}
      <div className="document-upload-container">
        <h1>Add Document</h1>
        {error && <p className="error-message">{error}</p>}

        <div>
          <label htmlFor="documentTitle">Document Title:</label>
          <input
            type="text"
            id="documentTitle"
            value={documentTitle}
            onChange={handleDocumentTitleChange}
          />
        </div>

        <div className="drag-and-drop">
          <h2>Attach Documents</h2>
          <label htmlFor="fileInput">
            <div className="upload-icon">
              <FaCloudUploadAlt />
            </div>
            <div className="upload-text">
              Drag and drop files here or<br />
              <span>Browse Files</span>
            </div>
          </label>
          <input
            type="file"
            id="fileInput"
            multiple
            accept="image/*, application/pdf"
            onChange={handleFileChange}
          />
        </div>

        {selectedFiles.length > 0 && (
          <div>
            <h3>Selected Files:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
            <button onClick={handleUpload}>Upload</button>
          </div>
        )}

        {uploadedFiles.length > 0 && (
          <div>
            <h3>Uploaded Files:</h3>
            <ul>
              {uploadedFiles.map((item, index) => (
                <li key={index}>{item.title}: {item.file.name}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="button-set">
          {/* Buttons for saving and continuing, and for exiting */}
          <button className="Save" onClick={handleSaveAndContinue}>Save and Continue</button>
          <button className="Exit" onClick={handleExit}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload; 
