/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <nav className="landingPage_NavBar">
        <img src="..\src\assets\TeamAassets\companyLogo.png" alt="Logo" />
        <ul className="menu hide">
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="profile">Profile</a>
          </li>
        </ul>
        <div className="Navbar_landing_Button">
          <Link to="/register">
            <button id="register">Register</button>
          </Link>
          <Link to="/login">
            <button id="login">Log In</button>
          </Link>
        </div>
      </nav>

      <div className="content-container">
        <div className="text-container">
         <div>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem"}}>ONLINE LEARNING</h1>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem"}}>Gain knowledge. Learn your way. Be the best</h2>
          </div>
          <div className="card-container">
            <div className="card">
              <div className="card-title">
                <h3>SQL QUERY</h3>
              </div>

              <div className="card-body">
                <Link to="/">
                  <button className="teamA_button">View </button>
                </Link>
              </div>

              <div className="card-button">
                <button  className="teamA_button" >Enroll </button>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <h3>Version Control: SVN</h3>
              </div>

              <div className="card-body">
                <Link to="/">
                  <button className="teamA_button" >View </button>
                </Link>
              </div>

              <div className="card-button">
                <button className="teamA_button">Enroll </button>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <h3>HTML Programming</h3>
              </div>

              <div className="card-body">
                <Link to="/">
                  <button className="teamA_button">View </button>
                </Link>
              </div>

              <div className="card-button">
                <button className="teamA_button">Enroll</button>
              </div>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img
            src="..\src\assets\TeamAassets\logo.png"
            alt="Description of the photo"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;