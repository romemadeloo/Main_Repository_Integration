import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { enroll } from "../js/script";
import CardCarousel from "../components/slideshow";


import "bootstrap/dist/css/bootstrap.min.css";

function TeamC_Dashboard() {
  return (
    <Fragment>
      {/* Header title */}
      <div className="c_dashboard_header header p-3 h-50 d-flex align-items-center justify-content-center">
        <div className="c_dashboard_title title p-3 text-center">
          <div className="c_dashboard_japchar jap-char">
            <h1 className="c_dashboard_char fw-bold">
              月伝で自分のやり方を学びましょう。
            </h1>
          </div>
          <div className="eng-char">
            <h4>Learn your way at Tsukiden.</h4>
          </div>
        </div>
      </div>
      {/* End of Header title */}

      {/* Course Previews */}
      <div className="course-title">
        <h1 className="course-prev fw-bold text-center mt-5">
          Course Previews
        </h1>
      </div>

      {/* Courses */}
      <CardCarousel />
      {/* End of Courses */}

      {/* Modals */}
      {/* MODAL C-LANG */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                C Language Course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>You will be enrolled in this course.</p>
            </div>
            <div className="modal-footer">
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
                onClick={() => enroll(1)}
              >
                Enroll
              </button>
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
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel2">
                The Subversion Course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>You will be enrolled in this course.</p>
            </div>
            <div className="modal-footer">
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
                onClick={() => enroll(2)}
              >
                Enroll
              </button>
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

      {/* MODAL HTML PROGRAMMING */}
      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel3"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#D9FFCF" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel3">
                HTML Programming Course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>You will be enrolled in this course.</p>
            </div>
            <div className="modal-footer">
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
                onClick={() => enroll(3)}
              >
                Enroll
              </button>
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
      >
        <div className="flex-grow-1"></div>
        <p className="footerText text-center">
          All Rights Reserved | Copyright © 2024
        </p>
      </div>

      {/* End of Modals */}
    </Fragment>
  );
}

export default TeamC_Dashboard;
