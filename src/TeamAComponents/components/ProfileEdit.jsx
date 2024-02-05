import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Auth.css";

import ProfileEditForm from "./ProfileEditForm";
import Navigation from './Navigation';
import { useAuth } from "./AuthContext";


function ProfileEdit() {

  const { isLoggedIn, handleLogout } = useAuth();

  return (
    <div>
     <div className="home-header">
        <img
           src="..\src\assets\TeamAassets\companyLogo.png"
          alt="Logo"
          className="Qlogo"
          
        />
      </div>
        <div className="Prof2-sign">
          <ProfileEditForm/>
        </div>
      </div>
 
  );
}

export default ProfileEdit;