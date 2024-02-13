/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from "react";
import "../styles/Auth.css";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

const About = () => {
  return (
    <>
      <nav className="my-navigation">
        <Link to="/">
          <img src="..\src\assets\TeamAassets\companyLogo.png" alt="Logo" />
        </Link>
        <ul className="menu-hide">
          <li>
            <a href="/verif_nonuser">Verification</a>
          </li>
          <li>
            <a href="About">About us</a>
          </li>
          <li>
            <a href="https://www.tsukiden.com.ph">Contact us</a>
          </li>
        </ul>
        <div className="testing">
          <Link to="/register">
            <button id="register">Register</button>
          </Link>
          <Link to="/login">
            <button id="login">Log In</button>
          </Link>
        </div>
      </nav>
      {/* Main Content Section */}
      {/* className="home-content" old css */}

      <div className="flex flex-row">
        {/* className="about-container" old css */}
        <div className="flex flex-col">
          <section className="pl-[2rem] pr-[2rem] pt-[1rem]">
            <h1 className="mt-[15px] text-center font-bold text-[1.5rem]">
              About Us{" "}
            </h1>
            <p className="p-[.5rem] justify-center">
              Tsukiden Global Solutions, Inc.<b>YOUR RELIABLE IT PARTNER</b>{" "}
              That's who <b>WE</b> are. For more than 30 years now, Team
              Tsukiden has always been the trusted reliable IT partner of its
              clients for various projects in Japan, Philippines, Malaysia, Hong
              Kong, Singapore, Taiwan, United Kingdom, and the United States of
              America.
            </p>
            <p className="p-[.5rem] justify-center">
              Pioneer in IT Outsourcing Tsukiden Global Solutions Inc. is one of
              the pioneers in IT Outsourcing for the Japanese market here in the
              Philippines. Since 1989, even before the word “outsourcing” was
              coined, WE have been sending engineers to Japan for software
              development. With our years of experience and still growing, there
              is no other more stable company to outsource to than Tsukiden
              Global Solutions Inc.
            </p>
            <p className="p-[.5rem] justify-center">
              Tsukiden Global Solutions Inc. provides its clients the advantage
              of having hardworking, committed and talented manpower on demand,
              where and when they are needed at a cost that fits the development
              budget.
            </p>
            {/* Include the PhotoSection component here */}
            {/* className="about-mv" old css classname*/}
          </section>
        </div>
        <div className="flex justify-end">
          <section className="flex flex-col pt-[2rem] pr-[2rem]">
            <div>
              <h1 className="text-center font-bold text-[1.5rem]">Mission</h1>
              We aim to... provide excellent quality service to our{" "}
              <b>CLIENTS </b>, foster professional growth and care to our{" "}
              <b>EMPLOYEES</b> & develop innovative solutions dedicated for the
              welfare of our <b>COMMUNITY & SOCIETY.</b>
            </div>
            <div>
              <h1 className="text-center pt-[1rem] font-bold text-[1.5rem]">
                Vision
              </h1>
              <div className="justify-center">
                <b>TGSI</b> is committed to be{" "}
                <b>THE PREMIER GLOBAL I.T. BUSINESS PARTNER </b>
                driven by passion for innovation
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <footer className="flex justify-center p-5  bottom-0 w-full ">
          <div>
            <p className="text-[#4D9349] font-medium">
              All Rights Reserved | Copyright 2024
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
