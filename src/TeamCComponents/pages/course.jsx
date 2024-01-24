import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../css/course_page.css';

function TeamC_Course() {
    return (
        <Fragment>
            {/* Header title */}
            <div className="header p-3 h-50 d-flex align-items-center justify-content-center">
                <div className="title p-3 text-center">
                    <div className="jap-char">
                        <h1 className="fw-bold">Program Overview</h1>
                    </div>
                    <div className="jap-char">
                        <h6 className="fw-bold">月伝で自分のやり方を学びましょう。</h6>
                    </div>
                </div>
            </div>

            {/* Course Previews */}
            <div className="course-title">
            </div>
            <div className="container mt-5">
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="courseTabs nav-link active text-dark" id="clang-tab" data-bs-toggle="tab" href="#clang">The SQL Queries</a>
                            </li>
                            <li className="nav-item">
                                <a className="courseTabs nav-link text-dark" id="svn-tab" data-bs-toggle="tab" href="#hprog">Version Control: SVN</a>
                            </li>
                            <li className="nav-item">
                                <a className="courseTabs nav-link text-dark" id="hprog-tab" data-bs-toggle="tab" href="#svn">HTML Programming</a>
                            </li>
                        </ul>
                    </div>
                    {/* C LANGUAGE */}
                    <div className="card-body tab-content">
                        <div className="tab-pane fade show active" id="clang">
                            <h5 className="card-title text-center">The SQL Queries</h5>
                            <p className="card-text">This course guarantees that learners will acquire the essential expertise to compose and comprehend SQL queries effectively.</p>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="space mt-4"></div>
                            <Link to="/chapters_sql" className="btn btn-primary bg-success">Start Course</Link>
                        </div>
                        
                        {/* HTML */}
                        <div className="tab-pane fade" id="svn">
                            <h5 className="card-title">HTML Programming</h5>
                            <p className="card-text">The usage of HTML seems to have no end anytime soon. Upon taking this course, the user will develop necessary skills and knowledge to create HTML-based webpages.</p>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="space mt-4"></div>
                            <Link to="/chapters_hprog" className="btn btn-primary bg-success">Start Course</Link>
                        </div>
                        
                        {/* SUBVERSION */}
                        <div className="tab-pane fade" id="hprog">
                            <h5 className="card-title">Version Control: Subversion (SVN)</h5>
                            <p className="card-text">The user will learn the purpose and commands needed to utilize Subversion.</p>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="space mt-4"></div>
                            <Link to="/chapters_svn" className="btn btn-primary bg-success">Start Course</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
}

export default TeamC_Course;
