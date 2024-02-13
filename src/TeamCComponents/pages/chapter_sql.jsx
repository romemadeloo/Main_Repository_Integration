import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Team_D_HeaderV2 from "../../TeamDComponents/Team_D_HeaderV2";

// This function represents the component for displaying SQL query chapters.
function TeamC_ChapterSql() {
  return (
    <>
      {/* Render the Team_D_HeaderV2 component */}
      <Team_D_HeaderV2 />

      {/* Back button to navigate to the course page */}
      <Link to='/course' className="buttonReturn d-flex align-items-center c_chapter_returncontainer" style={{ textDecoration: 'none', color: 'black', width: 'fit-content', }}>
        <div className="d-flex align-items-center" style={{ marginTop: '1rem' }}>
          <div>
            {/* Back button icon */}
            <img src="../../src/assets/TeamCassets/green_button.png" className="btnReturn c_chapter_return" alt="return-icon" style={{
              transition: 'transform .1s', color: '#ffffff',
              marginLeft: '1rem', width: '2rem', height: '2rem',
            }} />
          </div>
          {/* Text for the back button */}
          <span className="returnTitle c_chapter_returnText" style={{ marginLeft: '0.5rem', color: '#126912', fontSize: '1.5rem', marginTop: '0rem', }}>Back</span>
        </div>
      </Link>

      {/* Container for SQL query chapters */}
      <div className="container mt-4 mx-auto">
        {/* Title for the chapter section */}
        <h2 className="text-left mb-4" style={{ fontWeight: 'bold', fontSize: '2rem' }}>The SQL Query Chapters</h2>
        {/* Horizontal line */}
        <hr />

        {/* Chapter 1 */}
        <div className="d-flex align-items-center">
          {/* Card for Chapter 1 */}
          <div className="c_chapter_cardmain card flex-grow-1" style={{
            willChange: 'filter',
            transition: 'filter 300ms', marginTop: '10px', backgroundColor: '#126912', borderRadius: '1rem',
          }}>
            {/* Link to Chapter 1 */}
            <Link to="/course1_sql" className="h4 text-white text-decoration-none c_chapter_cardtext">
              {/* Card body for Chapter 1 */}
              <div className="card-body d-flex c_chapter_cardbody" style={{
                backgroundColor: '#126912', borderRadius: '1rem',
              }}>
                CHAPTER 1: TITLE OF THE CHAPTER
              </div>
            </Link>
          </div>
          {/* Placeholder for the score of Chapter 1 */}
          <div className="small-box-container c_chapter_scoremain" style={{ marginTop: '0.6rem', marginLeft: '0.99rem', }}>
            <div className="small-box c_chapter_scoresub d-flex align-items-center justify-content-center text-white" style={{
              backgroundColor: '#126912', width: '4rem',
              height: '4rem', borderRadius: '10px',
            }}>
              <span>-$-</span>
            </div>
          </div>
        </div>

        {/* Similar structure for Chapter 2 and Chapter 3 */}
      </div>
    </>
  )
}


export default TeamC_ChapterSql;
