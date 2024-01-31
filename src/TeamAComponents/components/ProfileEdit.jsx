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
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="Prof2-content">
        <div className="Prof2-sign">
          <ProfileEditForm/>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;