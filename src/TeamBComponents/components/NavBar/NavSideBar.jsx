import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBarContext } from "../context/NavBarContext";
import ProfileModal from "../../../TeamAComponents/components/ProfileModal";

function getUserImageType(profilePicture) {
  // Check if profilePicture is defined and not null
  if (profilePicture && profilePicture.startsWith) {
    // Check the image type based on the data
    const isPNG = profilePicture.startsWith("data:image/png;base64,");
    const isJPEG = profilePicture.startsWith("data:image/jpeg;base64,");

    if (isPNG) {
      return "png";
    } else if (isJPEG) {
      return "jpeg";
    } else {
      // Return a default type or handle accordingly
      return "unknown"; // You can change this to 'jpeg' or handle as needed
    }
  } else {
    // Return a default type or handle accordingly
    return "unknown"; // You can change this to 'jpeg' or handle as needed
  }
}
const NavSideBar = ({onUserDataFetched, showModal, handleClose}) => {
  const {
 // Destructure showProfileModal from NavBarContext
    showDashBoard,
    showCourseList,
    showForum,
    showLogout,
    dashBoardShow,
    courseListShow,
    forumShow,
    logout,
  } = useContext(NavBarContext);
  const [userData, setUserData] = useState({});
  const [showProfileModal, setShowProfileModal] = useState(false); // State to control the visibility of the profile modal

  const openProfileModal = () => {
    setShowProfileModal(true); // Function to open the profile modal
  };
  const [clicked, setClicked] = useState(false);
  const closeProfileModal = () => {
    setShowProfileModal(false); // Function to close the profile modal
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
          `http://localhost:8080/api/v1/auth/users/${userId}`,
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
            console.error("Profile picture is undefined or null in user data");
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
    <div className="w-[250px] h-[100vh] bg-[#bce8b1] bg-opacity-[80%] ">
      <div className="flex flex-col items-center justify-center lg:hidden gap-x-2">
        <div className="w-full pl-5 mt-3 text-[1.3rem]">
          {/* Link to trigger ProfileModal */}
          <Link to="#" onClick={openProfileModal}>
            Profile
          </Link>
          <ProfileModal
             showModal={showProfileModal}
             handleClose={closeProfileModal}
             />
          <Link to="/teambdashboard" onClick={showDashBoard}>
            <ul
              className={
                dashBoardShow
                  ? "font-semibold text-[#116211] p-1 TeamB_text-shadow transition-all"
                  : "font-bold TeamB_text-shadow p-1 hover:text-[#116211] transition-all hover:bg-opacity-[50%] hover:font-semibold "
              }
            >
              Dashboard
            </ul>
          </Link>
          <Link to="/teambcourselist" onClick={showCourseList}>
            <ul
              className={
                courseListShow
                  ? "font-semibold text-[#116211] p-1 TeamB_text-shadow transition-all"
                  : "font-bold TeamB_text-shadow p-1 hover:text-[#116211] hover:bg-opacity-[50%] hover:font-semibold transition-all"
              }
            >
              Course List
            </ul>
          </Link>
          <Link to="/ForumFInstructor" onClick={showForum}>
            <ul
              className={
                forumShow
                  ? "font-semibold text-[#116211] p-1 TeamB_text-shadow transition-all"
                  : "font-bold TeamB_text-shadow p-1 hover:text-[#116211] transition-all hover:bg-opacity-[50%] hover:font-semibold "
              }
            >
              Forums
            </ul>
          </Link>
          <Link to="/" onClick={showLogout}>
            <ul
              className={
                logout
                  ? "font-semibold text-[#116211] p-1 TeamB_text-shadow transition-all"
                  : "font-bold TeamB_text-shadow p-1 hover:text-[#116211] transition-all hover:bg-opacity-[50%] hover:font-semibold "
              }
            >
              Log Out
            </ul>
          </Link>
        </div>
      </div>
      {/* Include ProfileModal component */}
      <ProfileModal showModal={showModal} />
    </div>
  );
};

export default NavSideBar;
