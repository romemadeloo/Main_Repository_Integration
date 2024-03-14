import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Footer from "./Footer";

function LoginForm({ openForgotModal, closeLoginModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [failedAttempts, setFailedAttempts] = useState(0);

  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted");
      const result = await handleLogin({ email, password });

      if (result.success) {
        const storedRole = localStorage.getItem("Mapped role:");
        console.log("Login successful");
        {
          storedRole === "INSTRUCTOR"
            ? navigate("/teambdashboard")
            : navigate("/teamcdashboard");
        }
      } else {
        setFailedAttempts((prevAttempts) => prevAttempts + 1);
        if (failedAttempts === 2) {
          setError("Warning: 2 more failed attempt will lock your account"); // make this red color
        } else if (failedAttempts === 4) {
          setError("Account locked due to multiple failed attempts"); // make this red color
          // You may want to add logic here to lock the account in your AuthContext
        } else {
          setError("Invalid email or password. Please try again.");
        }
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again later.");
      console.error("Login failed:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="template-form">
        <h2 style={{ margin: "30px" }}>
          Sign In to Your Account and Be Part of the Success
        </h2>
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
          onKeyPress={handleKeyPress}
          placeholder="Password"
          required
        />
        <div className="remember-me"></div>
        <div>
          <h3 style={{ marginTop: "15px" }}>
            By clicking "Sign in," you agree to our Terms of Use and our Privacy
            Policy.
          </h3>
        </div>
        <div
          className="forgot-password"
          onClick={() => {
            closeLoginModal();
            openForgotModal();
          }}
        >
          Forgot your password?
        </div>
        <button
          className="TeamA-button"
          disabled={error === "Account locked due to multiple failed attempts"}
        >
          Sign in
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </>
  );
}

export default LoginForm;
