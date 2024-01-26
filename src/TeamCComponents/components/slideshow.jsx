import React from 'react';
import '../css/slideshow_dashboard.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/slideshow_dashboard.css";

function CardCarousel () {

  return (
    <div className="c_cardpreview_cardouter course-preview-ctn">
  {/* C - LANGUAGE */}
  <div className="c_cardpreview_cardcontainer card-container">
    <div className="c_cardpreview_cardborder card border-success mt-3 mb-3 ">
      <div className="c_cardpreview_cardheader card-header bg-transparent border-success"></div>
      <div className="c_cardpreview_cardbody card-body text-success" style={{ maxHeight: '100px', overflow: 'hidden' }}>
        {/* Set the fixed height for the card body */}
        <h3 className="card-title fw-bold text-center">The SQL Queries</h3>
      </div>
      <div className="card-footer bg-transparent border-success">
        <p className="card-text mt-4">
        In a SQL querying workshop, participants delve into fundamental concepts such as syntax, database design, and optimization, empowering them with practical skills to write efficient queries and manage relational databases effectively.
        </p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '30px'
            }}
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
            id="enrollButton2"
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Version Control: SVN */}
  <div className="card-container">
    <div className="card border-success mt-3 mb-3" style={{ maxWidth: '235px', borderRadius: '10px' }}>
      <div className="card-header bg-transparent border-success"></div>
      <div className="card-body text-success" style={{ maxHeight: '100px', overflow: 'hidden' }}>
        {/* Set the fixed height for the card body */}
        <h3 className="card-title fw-bold text-center">Version Control: SVN</h3>
      </div>
      <div className="card-footer bg-transparent border-success">
        <p className="card-text mt-4">
          Apache Subversion (SVN) is a centralized version control system, facilitating collaborative
          software development through version tracking, allowing multiple developers to work on projects
          concurrently.
        </p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '30px'
            }}
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            id="enrollButton1"
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* HTML PROGRAMMING */}
  <div className="card-container">
    <div className="card border-success mt-3 mb-3" style={{ maxWidth: '235px', borderRadius: '10px' }}>
      <div className="card-header bg-transparent border-success"></div>
      <div className="card-body text-success" style={{ height: '100px', overflow: 'hidden' }}>
        {/* Set the fixed height for the card body */}
        <h3 className="card-title fw-bold text-center">HTML Programming</h3>
      </div>
      <div className="card-footer bg-transparent border-success">
        <p className="card-text mt-4">
          HTML (Hypertext Markup Language) is the standard language for creating web pages, defining the
          structure and content using tags, ensuring compatibility and accessibility across various browsers.
        </p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '30px'
            }}
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
            id="enrollButton3"
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
 /* End of Courses */
  );
}

export default CardCarousel;
