import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/course_page.css';

function TeamC_ChapterSvn() {
  return (
    <>
      <div className="container mt-5 mx-auto" style={{marginLeft: '5rem', marginRight: '5rem'}}>
        <h2 className="text-center mb-4" style={{fontWeight: 'bold', fontSize: '2rem'}}>The Program Overview</h2>
        <hr />

        {/* Chapter 1 */}
        <div className="c_course_itemcontainer d-flex align-items-center">

          <div className='c_course_tag d-flex align-items-center justify-content-center' style={{ marginTop: '0.5rem', marginRight: '0.5rem', width: '7rem', height: '4rem', 
          backgroundColor: '#BCE8B1', borderRadius: '0.5rem', border: '2px solid #126912',}}>
            <span>BSQL-01</span>
          </div>  

          <div className="c_course_cardmain card flex-grow-1" style={{ marginTop: '10px', willChange: 'filter', transition: 'filter 300ms', backgroundColor: '#126912', borderRadius: '1rem',}}>
            <Link to="/chapters_sql" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_course_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px', borderRadius: '1rem', }}>
                The SQL Query
              </div>
            </Link>
          </div>
          
        </div>

        {/* Chapter 2 */}
        <div className="c_course_itemcontainer d-flex align-items-center">

        <div className='c_course_tag d-flex align-items-center justify-content-center' style={{ marginTop: '0.5rem', marginRight: '0.5rem', width: '7rem', height: '4rem', 
          backgroundColor: '#BCE8B1', borderRadius: '0.5rem', border: '2px solid #126912',}}>
            <span>BSVN-01</span>
          </div>  

          <div className="c_course_cardmain card flex-grow-1" style={{ marginTop: '10px', willChange: 'filter', transition: 'filter 300ms', backgroundColor: '#126912', borderRadius: '1rem',}}>
            <Link to="/chapters_svn" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_course_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px', borderRadium: '1rem', }}>
                Version Control: Subversion
              </div>
            </Link>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="c_course_itemcontainer d-flex align-items-center">

        <div className='c_course_tag d-flex align-items-center justify-content-center' style={{ marginTop: '0.5rem', marginRight: '0.5rem', width: '7rem', height: '4rem', 
          backgroundColor: '#BCE8B1', borderRadius: '0.5rem', border: '2px solid #126912',}}>
            <span>BHPROG-01</span>
          </div>  

          <div className="c_course_cardmain card flex-grow-1" style={{ marginTop: '10px', willChange: 'filter', transition: 'filter 300ms', backgroundColor: '#126912', borderRadius: '1rem',}}>
            <Link to="/chapters_hprog" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_course_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px', borderRadius: '1rem', }}>
                HTML Programming Language
              </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default TeamC_ChapterSvn;
