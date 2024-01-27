import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./TeamA_AuthContext";


function TeamA_LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  // Use the useAuth hook to get the handleLogin and setLoggedIn functions
  const { handleLogin } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      // Hardcoded logic to check email and password
      if (email === 'student@gmail.com' && password === 'tgsivsbu') {
        navigate('/TeamBdashboard'); // Redirect to TeamBdashboard
      } else if (email === 'faculty@gmail.com' && password === 'tgsivsbu') {
        navigate('/TeamCdashboard'); // Redirect to TeamCdashboard
      } else {
        // If email or password is incorrect, perform normal login
        await handleLogin({ email, password }, navigate);
      }
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Login failed:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="template-form">
      <h2>Sign in to your account.</h2>
      <h2>Be part of the success.</h2>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <div className="remember-me">
        {/* Your remember me checkbox */}
      </div>
      <div>
        <h3>By clicking "Sign in," you agree to our Terms of Use and our Privacy Policy.</h3>
      </div>
      <Link to="/forgot">
        <div className="forgot-password">
          Forgot your password?
        </div>
      </Link>
      <button type="submit" className="TeamA-button">Sign in</button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}


export default TeamA_LoginForm;
