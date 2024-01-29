/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="TeamA_Footer">
        <div className="contacts">
          <div className="contact-number">
            <a href="tel:09242-98"> Contact: 09242989812</a>
          </div>
        </div>
        <div className="All">
          <p style={{ fontFamily: "Inter, sans-serif" }}>
            All Rights Reserved {year}
          </p>
        </div>
        <div className="terms-conditions">
          <Link to="/terms" style={{ fontFamily: "Inter, sans-serif" }}>
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
