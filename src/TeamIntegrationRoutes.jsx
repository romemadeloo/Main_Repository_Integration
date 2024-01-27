/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// TEAM A IMPORTS
import Landing from "../src/TeamAComponents/components/Landing";
import Login from "../src/TeamAComponents/components/Login";
import Register from "../src/TeamAComponents/components/Register";
import Forgot from "../src/TeamAComponents/components/Forgot";
import Dashboard from "../src/TeamAComponents/components/Dashboard";
import Profile from "../src/TeamAComponents/components/Profile";
import { Route, Routes } from "react-router-dom";
import Navigation from "../src/TeamAComponents/components/Navigation";
import ProfileEdit from "../src/TeamAComponents/components/ProfileEdit";
import Verification from "../src/TeamAComponents/components/Verification";
import ChangePassword from "../src/TeamAComponents/components/ChangePassword";
import About from "../src/TeamAComponents/components/About";
import Footer from "./TeamAComponents/components/Footer";

// TEAM B IMPORTS

import TeamBNav from "./TeamBComponents/components/NavBar/Nav";
import TeamBProfile from "./TeamBComponents/components/Profile/Profile";
import TeamBDashboard from "./TeamBComponents/components/DashBoard/Dashboard";
import TeamBCourseList from "./TeamBComponents/components/CourseList & AddCourseList/CourseList";
import TeamBAddNewCourse from "./TeamBComponents/components/CourseList & AddCourseList/AddNewCourse";
import TeamBCourseOverview from "./TeamBComponents/components/CourseList & AddCourseList/CourseOverview";
import TeamBEditTopicPage from "./TeamBComponents/components/Topic/EditTopicPage";
import TeamBDisplayTopic from "./TeamBComponents/components/Topic/DisplayTopic";
import TeamBAddTopicTitlePage from "./TeamBComponents/components/Topic/AddTopicTitlePage";
import TeamBEditChapterTitle from "./TeamBComponents/components/CourseList & AddCourseList/EditChapterTitle";
import TeamBCreateNewChapterTitle from "./TeamBComponents/components/CourseList & AddCourseList/CreateNewChapterTitle";

function TeamIntegrationRoutes() {
  return (
    <>
      <Routes>
        {/* TEAM A */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<ProfileEdit />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/change" element={<ChangePassword />} />
        <Route path="/about" element={<About />} />

        {/* TEAM B */}
        <Route path="/teambdashboard" element={<TeamBDashboard />} />
        <Route path="/teambprofile" element={<TeamBProfile />} />
        <Route path="/teambcourselist" element={<TeamBCourseList />} />
        <Route path="/teambaddnewcourse" element={<TeamBAddNewCourse />} />
        <Route path="/teambcourseoverview" element={<TeamBCourseOverview />} />
        <Route path="/teambeditchaptertitle" element={<TeamBEditChapterTitle />} />
        <Route
          path="/teambcreatenewchaptertitle"
          element={<TeamBCreateNewChapterTitle />}
        />
        <Route path="/teambaddtopictitlepage" element={<TeamBAddTopicTitlePage />} />
        <Route path="/teambdisplaytopic" element={<TeamBDisplayTopic />} />
        <Route path="/teambedittopic" element={<TeamBEditTopicPage />} />t
      </Routes>
    </>
  );
}

export default TeamIntegrationRoutes;
