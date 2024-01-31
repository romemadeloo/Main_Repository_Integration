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
import Email from "./TeamAComponents/components/Email";

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

// TEAM C IMPORT

import TeamC_Dashboard from "./TeamCComponents/pages/dashboard";
import TeamC_Assessments from "./TeamCComponents/pages/assessment";
import TeamC_Course from "./TeamCComponents/pages/course";
import TeamC_Forum from "./TeamCComponents/pages/Forum";
import TeamC_CourseSql1 from "./TeamCComponents/pages/course/course1_sql";
import TeamC_CourseSvn1 from "./TeamCComponents/pages/course/course1_svn";
import TeamC_CourseHprog1 from "./TeamCComponents/pages/course/course1_hprog";
import TeamC_CourseSvn2 from "./TeamCComponents/pages/course/course2_svn";
import TeamC_CourseHprog2 from "./TeamCComponents/pages/course/course2_hprog";
import TeamC_CourseSql2 from "./TeamCComponents/pages/course/course2_sql";
import TeamC_CourseSql3 from "./TeamCComponents/pages/course/course3_sql";
import TeamC_CourseSvn3 from "./TeamCComponents/pages/course/course3_svn";
import TeamC_CourseHprog3 from "./TeamCComponents/pages/course/course3_hprog";
import TeamC_ChapterSql from "./TeamCComponents/pages/chapter_sql";
import TeamC_ChapterSvn from "./TeamCComponents/pages/chapter_svn";
import TeamC_ChapterHprog from "./TeamCComponents/pages/chapter_hprog";
import TeamA_NewPass from "./TeamAComponents/components/NewPass";

// team D
import Team_D_View from "./TeamDComponents/Team_D_View";
import Team_D_Verification from "./TeamDComponents/Team_D_Verification";
import Team_D_Verif_nonuser from "./TeamDComponents/Team_D_Verif_nonuser";
import Team_D_Content from "./TeamDComponents/Team_D_Content";

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
        <Route path="/email" element={<Email />} />
        <Route path="new" element={<TeamA_NewPass />} />

        {/* TEAM B */}
        <Route path="/teambdashboard" element={<TeamBDashboard />} />
        <Route path="/teambprofile" element={<TeamBProfile />} />
        <Route path="/teambcourselist" element={<TeamBCourseList />} />
        <Route path="/teambaddnewcourse" element={<TeamBAddNewCourse />} />
        <Route path="/teambcourseoverview" element={<TeamBCourseOverview />} />
        <Route
          path="/teambeditchaptertitle"
          element={<TeamBEditChapterTitle />}
        />
        <Route
          path="/teambcreatenewchaptertitle"
          element={<TeamBCreateNewChapterTitle />}
        />
        <Route
          path="/teambaddtopictitlepage"
          element={<TeamBAddTopicTitlePage />}
        />
        <Route path="/teambdisplaytopic" element={<TeamBDisplayTopic />} />
        <Route path="/teambedittopic" element={<TeamBEditTopicPage />} />

        {/* TEAM C */}
        <Route path="/teamcdashboard" element={<TeamC_Dashboard />} />
        <Route path="/assessment" element={<TeamC_Assessments />} />
        <Route path="/course" element={<TeamC_Course />} />
        <Route path="/forum" element={<TeamC_Forum />} />
        {/* COURSE 1 */}
        <Route
          path="/course1_svn/*"
          element={
            <>
              <TeamC_CourseSvn1 />
            </>
          }
        />
        <Route
          path="/course1_hprog/*"
          element={
            <>
              <TeamC_CourseHprog1 />
            </>
          }
        />
        <Route
          path="/course1_sql/*"
          element={
            <>
              <TeamC_CourseSql1 />
            </>
          }
        />
        {/* COURSE 2 */}
        <Route
          path="/course2_svn/*"
          element={
            <>
              <TeamC_CourseSvn2 />
            </>
          }
        />
        <Route
          path="/course2_hprog/*"
          element={
            <>
              <TeamC_CourseHprog2 />
            </>
          }
        />
        <Route
          path="/course2_sql/*"
          element={
            <>
              <TeamC_CourseSql2 />
            </>
          }
        />
        {/* COURSE 3 */}
        <Route
          path="/course3_svn/*"
          element={
            <>
              <TeamC_CourseSvn3 />
            </>
          }
        />
        <Route
          path="/course3_hprog/*"
          element={
            <>
              <TeamC_CourseHprog3 />
            </>
          }
        />
        <Route
          path="/course3_sql/*"
          element={
            <>
              <TeamC_CourseSql3 />
            </>
          }
        />
        {/* CHAPTER LIST */}
        <Route path="/chapters_svn/*" element={<TeamC_ChapterSvn />} />
        <Route path="/chapters_sql/*" element={<TeamC_ChapterSql />} />
        <Route path="/chapters_hprog/*" element={<TeamC_ChapterHprog />} />

        {/* Team D */}

        <Route path="/certificate" element={<Team_D_Content />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/viewCert" element={<Team_D_View />} />
        <Route path="/verification" element={<Team_D_Verification />} />
        <Route path="/verif_nonuser" element={<Team_D_Verif_nonuser />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default TeamIntegrationRoutes;
