import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { enroll } from "../js/script";
import CoursePreview from "../components/course_preview";
import Team_D_HeaderV2 from "../../TeamDComponents/Team_D_HeaderV2";
import ModalSeeMore from "../components/modal_course_seemore";

import "../css/base_style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TeamC_Dashboard() {
  return (
    <Fragment>
      {/* Header title */}
      <Team_D_HeaderV2/>
      <div className="header p-3 h-50 d-flex align-items-center justify-content-center" id="c_dashboard_header">
        <div className="c_dashboard_title title p-3 text-center">
          <div className="c_dashboard_japchar jap-char">
            <h1 className="c_dashboard_char fw-bold" id="c_preview_headerTitle">
              月伝で自分のやり方を学びましょう。
            </h1>
          </div>
          <div className="eng-char" id="c_preview_headerSub">
            <h4 id="c_preview_headerSub fw-bold">Learn your way at Tsukiden.</h4>
          </div>
        </div>
      </div>
      {/* End of Header title */}

      {/* Course Previews */}
      <div className="course-title">
        <h1 className="course-prev fw-bold text-center mt-5" id="c_preview_headerTitle">   
          Course Previews
        </h1>
      </div>

      {/* Courses */}
      <CoursePreview />
      <ModalSeeMore />
      {/* End of Courses */}

      {/* Modals */}

      {/* MODAL HTML PROGRAMMING */}
      <div
        className="modal fade"
        id="modal1"
        tabIndex="-1"
        aria-labelledby="modal1"
        aria-hidden="true"
       >
        {/* Modal dialog */}
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
            {/* Modal header */}
            <div className="modal-header">
              {/* Title of the modal */}
              <h5 className="modal-title" id="modal1">
                HTML Programming Course
              </h5>
              {/* Close button */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              {/* Text informing the user about enrollment */}
              <p>You will be enrolled in this course.</p>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              {/* Enroll button */}
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#0e3b03",
                  color: "#ffffff",
                  borderRadius: "20px",
                  fontSize: "15px",
                }}
                data-bs-dismiss="modal"
                onClick={() => enroll(3)} // onClick event to enroll in the course
               >
                Enroll
              </button>
              {/* Close button */}
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#0e3b03",
                  color: "#ffffff",
                  borderRadius: "20px",
                  fontSize: "15px",
                }}
                data-bs-dismiss="modal"
               >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

            {/* MODAL SQL */}
            <div
        className="modal-sql modal fade" // Class names for styling and behavior
        id="modal2" // Unique identifier for the modal
        tabIndex="-1"
        aria-labelledby="modal2"
        aria-hidden="true"
        >
        {/* Modal dialog */}
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
            {/* Modal header */}
            <div className="modal-header">
              {/* Title of the modal */}
              <h5 className="modal-title" id="modal2">
                The SQL Query Course
              </h5>
              {/* Close button */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              {/* Text informing the user about enrollment */}
              <p>You will be enrolled in this course.</p>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              {/* Enroll button */}
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#0e3b03",
                  color: "#ffffff",
                  borderRadius: "20px",
                  fontSize: "15px",
                }}
                data-bs-dismiss="modal"
                onClick={() => enroll(1)} // onClick event to enroll in the course
              >
                Enroll
              </button>
              {/* Close button */}
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#0e3b03",
                  color: "#ffffff",
                  borderRadius: "20px",
                  fontSize: "15px",
                }}
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* MODAL SUBVERSION */}
      <div
        className="modal fade"
        id="modal3"
        tabIndex="-1"
        aria-labelledby="modal3"
        aria-hidden="true"
        >
        {/* Modal dialog */}
        <div className="modal-dialog">
          {/* Modal content */}
          <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
            {/* Modal header */}
            <div className="modal-header">
              {/* Title of the modal */}
              <h5 className="modal-title" id="modal3">
                The Version Control: Subversion
              </h5>
              {/* Close button */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              {/* Text informing the user about enrollment */}
              <p>You will be enrolled in this course.</p>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              {/* Enroll button */}
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#0e3b03",
                  color: "#ffffff",
                  borderRadius: "20px",
                  fontSize: "15px",
                }}
                data-bs-dismiss="modal"
                onClick={() => enroll(3)} // onClick event to enroll in the course
              >
                Enroll
              </button>
              {/* Close button */}
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "#0e3b03",
                  color: "#ffffff",
                  borderRadius: "20px",
                  fontSize: "15px",
                }}
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footerContainer d-flex flex-column align-items-center"
        style={{ color: "#0e3b03", minHeight: "1vh" }}
      ><br/>
        <div className="flex-grow-1"></div>
        <p className="footerText text-center">
        </p>
      </div>

      {/* End of Modals */}
    </Fragment>
  );
}

export default TeamC_Dashboard;
