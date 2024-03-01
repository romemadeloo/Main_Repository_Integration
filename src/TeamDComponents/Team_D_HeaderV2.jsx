import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./TeamD_Css/navbar.css";
import TsukidenLogo from "./TeamD_Assets/TsukidenLogo.png";
import Profile from "./TeamD_Assets/profilepic.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { FaRegUserCircle } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import NavDropdown from "react-bootstrap/NavDropdown";
import ForumF from './../TeamCComponents/pages/ForumF';
import { useAuth } from "../TeamAComponents/components/AuthContext";
import "../TeamAComponents/styles/Auth.css";

// Function to get user image type
function getUserImageType(profilePicture) {
  // Check if profilePicture is defined and not null
  if (profilePicture && profilePicture.startsWith) {
    // Check the image type based on the data
    const isPNG = profilePicture.startsWith('data:image/png;base64,');
    const isJPEG = profilePicture.startsWith('data:image/jpeg;base64,');
    
    if (isPNG) {
      return 'png';
    } else if (isJPEG) {
      return 'jpeg';
    } else {
      // Return a default type or handle accordingly
      return 'unknown'; // You can change this to 'jpeg' or handle as needed
    }
  } else {
    // Return a default type or handle accordingly
    return 'unknown'; // You can change this to 'jpeg' or handle as needed
  }
}

const Team_D_HeaderV2 = ({ onUserDataFetched, openModal }) => {
  const [clicked, setClicked] = useState(false);
  const { isLoggedIn, handleLogout } = useAuth();
  const [clicked, setClicked] = useState(false);
  const [userData, setUserData] = useState({});
  const [showLogoutConfirmationModal, setShowLogoutConfirmationModal] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

const Team_D_HeaderV2 = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMobileNavbar = () => {
    setClicked(false);
    setMyCourseActive(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          console.error("User ID not found in local storage");
          return;
        }

        const response = await fetch(
          `http://localhost:8085/api/v1/auth/users/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);

          if (
            userData.profilePicture !== undefined &&
            userData.profilePicture !== null
          ) {
            const base64 = btoa(
              String.fromCharCode(...new Uint8Array(userData.profilePicture))
            );
            const imageType = getUserImageType(userData.profilePicture);
            const dataUrl = `data:image/${imageType};base64,${base64}`;

            onUserDataFetched({
              ...userData,
              profilePicture: dataUrl,
            });
          } else {
            console.error(
              "Profile picture is undefined or null in user data"
            );  
          }
        } else {
          console.error(
            "Failed to fetch user data",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Unexpected error during user data fetch", error);
      }
    };

    fetchUserData();
  }, [onUserDataFetched]);

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [clicked]);

  const openLogoutConfirmationModal = () => {
    setShowLogoutConfirmationModal(true);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowLogoutConfirmationModal(false);
    navigate("/"); // Use navigate function to redirect
  };

  const handleCloseLogoutConfirmationModal = () => {
    setShowLogoutConfirmationModal(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('logoutmodal-overlay')) {
      setShowLogoutConfirmationModal(false);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  // Add or remove the 'no-scroll' class based on the 'clicked' state
  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on component unmount
    };
  }, [clicked]);

  return (
    <>
      <nav className="navbar_TeamD">
        <NavLink  onClick={() => { closeMobileNavbar(); reloadPage(); }}>
          <img src={TsukidenLogo} alt="Logo" />
        </NavLink>
        <div>
        <ul id="navbar" className={clicked ? "active" : ""}>
          <ul id="navbar" className={clicked ? "active" : ""}>
            {/* Profile Info */}
            <li className="profile_info">
              <span className="profile_info_con">
                <img src={Profile} alt="Logo" />
                <span className="profile_info_name">
                  <p className="profile_fName">Joshua Allada</p>
                  <p className="profile_email">jallada.@tgsi.com.ph</p>
                </span>
              </span>
            </li>

            {/* Profile Links */}
            <li className="profile_link">
              <NavLink
                to="/profile"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Profile
              </NavLink>
            </li>
            <li className="profile_link">
              <NavLink
                to="/certificate"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                My Certificate
              </NavLink>
            </li>
            <li className="divider"></li>
            {/* Navigation Links */}
            <li>
              <NavLink
                to="/TeamCDashboard"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="My Course"
                menuVariant="dark"
                className="mycourse_dd"
              >
                <NavDropdown.Item href="course" activeClassName="active">
                  Program Overview
                </NavDropdown.Item>
                <NavDropdown.Item href="assessment" activeClassName="active">
                  Assessment
                </NavDropdown.Item>
                <NavDropdown.Item href="/CertGen" activeClassName="active">
                  Get Certification
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavLink
                to="/ForumF"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Forums
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/verification"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Verification
              </NavLink>
            </li>
            {/* Log Out Link */}
            <li className="profile_link">
              <NavLink
                to="/landing"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                <span className="teamD_LogOut_Btn">Log Out</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div id="mobile" onClick={handleClick}>
          {clicked ? (
            <i className="fas fa-times"></i>
          ) : (
            <img src={Profile} alt="Logo" className="mobile_profile" />
          )}
        </div>
        {/* Profile Dropdown */}
        <div className="profile_side">
          {isLoggedIn ? (
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="button_profile"
              >
                <img
                  src={`data:image/${getUserImageType(userData.profilePicture)};base64,${userData.profilePicture}`}
                  alt=""
                  className="profile_img"
                />
                Hi, {userData.firstName}!
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#" onClick={openModal}>
                  <FaRegUserCircle /> Profile
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/certificate"
                  onClick={closeMobileNavbar}
                >
                  <TbCertificate /> My Certificate
                </Dropdown.Item>
                <Dropdown.Item onClick={openLogoutConfirmationModal}>
                  <FiLogOut /> Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
          ) : (
            <>
              <Link to="/register">
                <button id="register">Register</button>
              </Link>
              <Link to="/login">
                <button id="login">Log In</button>
              </Link>
            </>
          )}
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="button_profile"
            >
              <img src={Profile} alt="" className="profile_img" />
              Hi, JALLADA!
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* Profile Dropdown Items */}
              <Dropdown.Item href="">
                <FaRegUserCircle /> Profile
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                to="/certificate"
                onClick={closeMobileNavbar}
              >
                <TbCertificate /> My Certificate
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                to="/"
                onClick={closeMobileNavbar}
              >
                <FiLogOut /> Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
      {showLogoutConfirmationModal && (
        <div className="logoutmodal-overlay" onClick={handleOverlayClick}>
          <div className="logoutmodal">
            <h2>Logout Confirmation</h2>
            <p>Are you sure you want to log out?</p>
            <div>
              <button onClick={handleConfirmLogout}>Yes</button>
              <button onClick={handleCloseLogoutConfirmationModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Team_D_HeaderV2;
