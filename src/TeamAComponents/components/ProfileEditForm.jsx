import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Auth.css";


function ProfileEditForm() {
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8085/api/v1/update/${email}`, {
        method: 'PUT', // Using the PUT method for updating data
        headers: {
          'Content-Type': 'application/json', // Specifying JSON content type for the request body
        },
        body: JSON.stringify({// Convert the data to JSON format
      email, // Include the user's email in the request body
      username, // Include the updated username
      firstName, // Include the updated first name
      lastName, // Include the updated last name
        }),
      });

      // Check if the response is successful
if (response.ok) {
  console.log('Profile updated successfully'); // Log a success message if the update was successful
} else {
  console.error('Profile update failed'); // Log an error message if the update failed
}
} catch (error) {
  console.error('Error during profile update:', error); // Log any errors that occurred during the update process
}
  };
    // const handleFormSubmit = (e) => {
    //   e.preventDefault();
    //   onProfileEditForm(verification);
    //   console.log('Verification code submitted:', verification);
    //   // You can add further logic or redirection if needed
    // };
  
    return (
      {/* Container for the profile edit form */}
  <div>
    {/* Link to navigate back to the profile page */}
    <Link to="/profile">
      {/* Button with arrow-left icon */}
      <button className="Prof2-Backbutton">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
      </button>
        </Link>
        </div>
        <div className="Prof2-left">
      {/* SVG icon representing a person */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
        </svg>
      {/* Title for the section */}
          <h4>Name</h4>
            {/* Placeholder for the position name */}
          <p>Position name</p>
        </div>
        <div className="Prof2-right">
            {/* Section for profile information */}
          <div className="Prof2-info">
            {/* Title for the section */}
          <h3>Profile Information</h3>
          {/* Form for updating profile data */}
            <form onSubmit={handleUpdate} className="Prof2-info_data">
             {/* Container for each data field */}
              <div className="Prof2-data">
                {/* Label for the first name input field */}
                <label htmlFor="firstName">First Name</label>
                {/* Input field for entering the first name */}
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                />
                {/* Label for the email input field */}
                <label htmlFor="email">Email</label>
                {/* Input field for entering the email */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="Prof2-data">
                {/* Label for the last name input field */}
                <label htmlFor="lastName">Last Name</label>
                {/* Input field for entering the last name */}
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                />
                {/* Label for the username input field */}
                <label htmlFor="username">Username</label>
                {/* Input field for entering the username */}
                <input
                  type="text"
                  id="username"
                  name="usermame"  {/* Name attribute for the username */}
                  value={username}
                  onChange={(e) => setUserName(e.target.value)} {/* Update the username state */}
                  placeholder="Enter your username"
                />
                
              
              </div>
            </form>
          </div>
          {/* Update and Cancel buttons */}
          <div className="Prof2-buttons">
          <button className="submit-button" onClick={handleUpdate}>
              Update
            </button>
            <Link to="/profile">
            <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProfileEditForm;
  
