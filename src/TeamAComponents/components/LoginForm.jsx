//* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext";
import Footer from "./Footer";

function TeamA_LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState(null);

  // Use the useAuth hook to get the handleLogin and setLoggedIn functions
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Hardcoded logic to check email and password
      if (
        (email === 'student@gmail.com' && password === 'admin123') ||
        (email === 'faculty@gmail.com' && password === 'admin123')
      ) {
        // If the credentials are valid, redirect to the respective dashboards
        navigate(email === 'student@gmail.com' ? '/TeamCdashboard' : '/TeamBdashboard');
      } else {
        // If email or password is incorrect, set the password error and display a message
        setPasswordError('Invalid Email or Password. Please try again.');
        // Perform normal login
        await handleLogin({ email, password }, navigate);
      }
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="template-form">
        <h2 style={{ margin: '30px' }}>Sign In to Your Account and Be Part of the Success</h2>
        <input
  type="email"
  id="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email Address"
  required
  style={{ borderColor: passwordError ? 'red' : 'initial' }}
/>

<input
  type="password"
  id="password"
  value={password}
  onChange={(e) => {
    setPassword(e.target.value);
    // Clear password error when the user starts typing again
    setPasswordError('');
  }}
  placeholder="Password"
  required
  style={{ borderColor: passwordError ? 'red' : 'initial' }}
/>

        {passwordError && <div className="error-message" style={{ color: 'red' }}>{passwordError}</div>}
        <div className="remember-me">
          {/* Your remember me checkbox */}
        </div>
        <div>
          <h3 style={{ marginTop: '15px' }}>By clicking "Sign in," you agree to our Terms of Use and our Privacy Policy.</h3>
        </div>
        <Link to="/forgot">
          <div className="forgot-password">
            Forgot your password?
          </div>
        </Link>
        <button className="TeamA-button">Sign in</button>
        {error && <div className="error-message">{error}</div>}
      </form>
      <Footer />
    </>
  );
}

export default TeamA_LoginForm;
