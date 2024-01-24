import React from 'react';
import VerificationForm from './VerificationForm'; // Correct import statement
import { Link } from 'react-router-dom';
import "../styles/Auth.css";


function Verification({ onVerification }) { // Corrected function name
  return (
    <div className="verification-container">
      <div className="verification-header">
        <img
          src="../../assets/TeamAassets/companyLogo.png"
          alt="Logo"
          className="verification-logo"
        />
      </div>
      <div className="verification-navi">
        <div className="home-button">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="verification-sign">
          <VerificationForm onVerification={onVerification} />{" "}
          {/* Corrected component name */}
        </div>
      </div>
    </div>
  );
}

export default Verification;