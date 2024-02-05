/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import ChangePasswordForm from './ChangePasswordForm'; // Correct import statement
import { Link } from 'react-router-dom';
import "../styles/Auth.css";


function ChangePassword() { // Corrected function name
  return (
    <div>
      <nav className="Change-navbar">
      <div className="home-header">
        <img
           src="..\src\assets\TeamAassets\companyLogo.png"
          alt="Logo"
          className="Qlogo"
          />
        </div>
        <ul className="Change-nav-list">
          <li>
            <Link to="/">
            <button className='login-button'>Home</button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="Change-content">
        <div className="Change-sign">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;