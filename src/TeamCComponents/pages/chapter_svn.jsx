import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/chapter_list.css';

function TeamC_ChapterSvn() {
  return (
    <>
    {/* Back button */}
    <Link to='/course' className="buttonReturn d-flex align-items-center c_chapter_returncontainer">
          <div className="d-flex align-items-center">
            <div>
              <img src="/pics/return1.png" className="btnReturn c_chapter_return" alt="return-icon" />
            </div>
            <span className="returnTitle c_chapter_returnText">Back</span>
          </div>
        </Link>
      <div className="container mt-5 mx-auto">
        <h2 className="text-left mb-4">The Subversion Chapters</h2>
        <hr />

        {/* Chapter 1 */}
        <div className="d-flex align-items-center">
          <div className="c_chapter_cardmain card flex-grow-1" style={{ marginTop: '10px' }}>
            <Link to="/course1_svn" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_chapter_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
                CHAPTER 1: TITLE OF THE CHAPTER
              </div>
            </Link>
          </div>
          <div className="small-box-container c_chapter_scoremain">
          <div className="small-box c_chapter_scoresub d-flex align-items-center justify-content-center text-white">
            <span>-$-</span>
          </div>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="d-flex align-items-center">
          <div className="c_chapter_cardmain card flex-grow-1" style={{ marginTop: '10px' }}>
            <Link to="/course2_svn" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_chapter_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
                CHAPTER 2: TITLE OF THE CHAPTER
              </div>
            </Link>
          </div>
          <div className="small-box-container c_chapter_scoremain">
          <div className="small-box c_chapter_scoresub d-flex align-items-center justify-content-center text-white">
            <span>-$-</span>
          </div>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="d-flex align-items-center">
          <div className="c_chapter_cardmain card flex-grow-1" style={{ marginTop: '10px' }}>
            <Link to="/course3_svn" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_chapter_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
                CHAPTER 3: TITLE OF THE CHAPTER
              </div>
            </Link>
          </div>
          <div className="small-box-container c_chapter_scoremain">
          <div className="small-box c_chapter_scoresub d-flex align-items-center justify-content-center text-white">
            <span>-$-</span>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamC_ChapterSvn;
