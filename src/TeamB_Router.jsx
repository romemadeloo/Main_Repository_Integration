import { Route, Routes } from "react-router-dom";


//TEAM B IMPORTS
// import Nav from "./components/NavBar/Nav";
import Nav from "./TeamBComponents/components/NavBar/Nav";
// import Profile from "./components/Profile/Profile";
import Profile from "./TeamBComponents/components/Profile/Profile";

// import Dashboard from "./components/DashBoard/Dashboard";
import Dashboard from "./TeamBComponents/components/DashBoard/Dashboard";

// import CourseList from "./components/CourseList & AddCourseList/CourseList";
import CourseList from "./TeamBComponents/components/CourseList & AddCourseList/CourseList";

// import AddNewCourse from "./components/CourseList & AddCourseList/AddNewCourse";
import AddNewCourse from "./TeamBComponents/components/CourseList & AddCourseList/AddNewCourse";

// import CourseOverview from "./components/CourseList & AddCourseList/CourseOverview";
import CourseOverview from "./TeamBComponents/components/CourseList & AddCourseList/CourseOverview";

// import EditTopicPage from "./components/Topic/EditTopicPage";
import EditTopicPage from "./TeamBComponents/components/Topic/EditTopicPage";

// import DisplayTopic from "./components/Topic/DisplayTopic";
import DisplayTopic from "./TeamBComponents/components/Topic/DisplayTopic";

// import AddTopicTitlePage from "./components/Topic/AddTopicTitlePage";
import AddTopicTitlePage from "./TeamBComponents/components/Topic/AddTopicTitlePage";

// import EditChapterTitle from "./components/CourseList & AddCourseList/EditChapterTitle";
import EditChapterTitle from "./TeamBComponents/components/CourseList & AddCourseList/EditChapterTitle";

// import CreateNewChapterTitle from "./components/CourseList & AddCourseList/CreateNewChapterTitle";
import CreateNewChapterTitle from "./TeamBComponents/components/CourseList & AddCourseList/CreateNewChapterTitle";

function TeamB_Router() {
  return (
    <div className="bg-[#EBFFE5]">
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/addnewcourse" element={<AddNewCourse />} />
        <Route path="/courseoverview" element={<CourseOverview />} />
        <Route path="/editchaptertitle" element={<EditChapterTitle />} />
        <Route
          path="/createnewchaptertitle"
          element={<CreateNewChapterTitle />}
        />
        <Route path="/addtopictitlepage" element={<AddTopicTitlePage />} />
        <Route path="/displaytopic" element={<DisplayTopic />} />
        <Route path="/edittopic" element={<EditTopicPage />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default TeamB_Router;
