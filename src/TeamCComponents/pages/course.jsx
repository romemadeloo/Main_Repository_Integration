import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/course_page.css';

function TeamC_ChapterSvn() {
  return (
    <>
      <div className="container mt-5 mx-auto">
        <h2 className="text-center mb-4">The Program Overview</h2>
        <hr />

        {/* Chapter 1 */}
        <div className="c_course_itemcontainer d-flex align-items-center">

          <div className='c_course_tag d-flex align-items-center justify-content-center'>
            <span>BSQL-01</span>
          </div>  

          <div className="c_course_cardmain card flex-grow-1" style={{ marginTop: '10px' }}>
            <Link to="/chapters_sql" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_course_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
                The SQL Query
              </div>
            </Link>
          </div>
          
        </div>

        {/* Chapter 2 */}
        <div className="c_course_itemcontainer d-flex align-items-center">

        <div className='c_course_tag d-flex align-items-center justify-content-center'>
            <span>BSVN-01</span>
          </div>  

          <div className="c_course_cardmain card flex-grow-1" style={{ marginTop: '10px' }}>
            <Link to="/chapters_svn" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_course_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
                Version Control: Subversion
              </div>
            </Link>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="c_course_itemcontainer d-flex align-items-center">

        <div className='c_course_tag d-flex align-items-center justify-content-center'>
            <span>BHPROG-01</span>
          </div>  

          <div className="c_course_cardmain card flex-grow-1" style={{ marginTop: '10px' }}>
            <Link to="/chapters_hprog" className="h4 text-white text-decoration-none c_chapter_cardtext">
              <div className="card-body d-flex c_course_cardbody" style={{ backgroundColor: '#126912', borderRadius: '10px' }}>
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
