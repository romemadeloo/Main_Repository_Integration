import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css'; // Import your CSS file
import Footer from "./Footer";

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState(''); // Default to 'User'
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false); // State to control visibility of the error message
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (inputPassword) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    const isValid = passwordRegex.test(inputPassword);

    setError(isValid ? '' : 'Password must be at least 8 characters with at least 1 uppercase, 1 numeric, and 1 symbol.');
    setShowError(!isValid); // Set to true if the password is NOT valid

    return isValid;
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handlePasswordFocus = () => {
    setShowError(true);
  };

  const handlePasswordBlur = () => {
    setShowError(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    try {
      // Rest of the registration logic...

      if (response.ok) {
        // Registration successful, you can redirect or perform other actions
        console.log('Registration successful');
        navigate('/dashboard');
      } else {
        // Registration failed, handle errors
        console.error('Registration failed');
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleRegister} className="template-form">
        <Link to="/">
          <div className="qBackbutton">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </div>
        </Link>
        <h2>Sign up an account.</h2>
        <h2>Be part of the success.</h2>

        <div className="group_input">
          <input
            type="text"
            id="username"
            maxLength={20}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder={` Username(${userType === 'Student' ? 'Student' : userType})`}
          />
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>
        </div>

        <input
          type="text"
          id="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          placeholder="Password"
        />
        <div className="data-validation">
          {showError && (
            <label style={{ color: 'red', fontSize: '15px', fontWeight: '700', transition: 'color 0.3s' }}>
              {error}
            </label>
          )}
        </div>

        <div>
          <h3 style={{ fontSize: '15px', marginTop: '20px' }}>By clicking Sign up you agree to our Terms of Use and our Privacy Policy.</h3>
        </div>

        <Link to="/login">
          <div className="existing-account">
            Already have an account?
          </div>
        </Link>
        <button className="TeamA-button" style={{ backgroundColor: '#126912' }}>Sign Up</button>
      </form>
      <Footer />
    </>
  );
}

export default RegisterForm;
