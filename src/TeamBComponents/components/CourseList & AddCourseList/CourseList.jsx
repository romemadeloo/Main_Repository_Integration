import React from 'react';
import CourseOverview from './CourseOverview';
import CourseListCard from './CourseListCard';
import AddTopicPage from '../Topic/AddTopicPage';
import Nav from '../NavBar/Nav';

const CourseList = () => {

  
  return (
    <div>  
    <Nav/>
      {/* place the component you want to test here */}
    {/* 1/15/2024 functions buttons and routes */}

     {/* {<CourseOverview/>} */}
     <CourseListCard/>
     {/* <AddTopicPage/> */}
    </div>
  );
};

export default CourseList;
