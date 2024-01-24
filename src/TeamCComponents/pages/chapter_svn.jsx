import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function TeamC_ChapterSvn(){
    return(
        <> 
      <div className="container mt-5 mx-auto">
        <h2 className="text-left mb-4">The Subversion Control Chapters</h2><hr/>
        <div className="cardChapter card mb-3">
        <Link to="/course1_svn" className="h4 text-white" style={{ textDecoration: 'none', margin: '0' }}>
        <div className="card-body d-flex justify-content-between chapter" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
          CHAPTER 1: TITLE OF THE CHAPTER
        </div>
        </Link>
        </div>

        <div className="card mb-3" >
        <Link to="/course2_svn" className="h4 text-white" style={{ textDecoration: 'none', margin: '0' }}>
        <div className="card-body d-flex justify-content-between chapter" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
          CHAPTER 2: TITLE OF THE CHAPTER
        </div>
        </Link>
        </div>

        <div className="card mb-3 chapterItemList" >
        <Link to="/course3_svn" className="h4 text-white" style={{ textDecoration: 'none', margin: '0' }}>
        <div className="card-body d-flex justify-content-between chapter" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
          CHAPTER 3: TITLE OF THE CHAPTER
        </div>
        </Link>
        </div>
        
        <Link to='/course' className="buttonReturn " style={{ textDecoration: 'none', color: 'black'}}>
          <div>
            <img src="/pics/return1.png" className="btnReturn rtnzoom" alt="return-icon" style={{width: '3rem', height: '3rem'}} />
              <span className="returnTitle" style={{ marginLeft: '5px' , color: '#126912', fontSize: '1.5rem'}}>Back</span>
          </div>
        </Link>
      </div>
        </>
    )
}

export default TeamC_ChapterSvn;