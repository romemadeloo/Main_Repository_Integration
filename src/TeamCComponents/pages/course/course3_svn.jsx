import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../css/sidebar.css';


function TeamC_CourseSvn3(){
  const { pathname } = useLocation();
  let layoutTitle = '';
  let subTitle = '';
  let descText = '';
  
  switch (pathname) {
 
    case '/course3_svn':
      layoutTitle = 'CHAPTER 3';
      subTitle = 'Subversion Control and its history.';
      descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      break;
      
    default:
      layoutTitle = '-NO TITLE-';
      subTitle = '-NO SUBTITLE-';
      descText = '-NO DESCTEXT-';
      break;
  }

    return (
        <Fragment>
          <div id="layoutContainer">
          {/* Main layout */}
      <main className="c_chapcourse_mainlayout">
        {/* Start of Topic Container */}
        <div id="topic0" className="c_chapcourse_hidden">
          <div className="container">
            <h1>{layoutTitle}</h1>
            <h4>{subTitle}</h4>
            <br />
            <div className="row gy-5" style={{ backgroundColor: "#EBFFE5" }}>
              <div className="col-12">
                <div
                  className="rounded-3"
                  style={{
                    fontSize: "18px",
                    color: "#0e3b03",
                    backgroundColor: "#D9FFCF",
                    textAlign: "center",
                    overflow: "visible",
                    border: "2px solid",
                    borderColor: "#0e3b03"
                  }}
                >
                  <p className="lh-base">{descText}</p>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{margin: '10px'}}>
                <button class="btn btn-primary courseButton" 
                data-bs-toggle="modal" 
                data-bs-target="#mainId" 
                className="btn" 
                type="button"
                style={{backgroundColor: '#D9FFCF',
                borderColor: "0E3B03",
                boxShadow: '0 2px 5px 0 rgb(0 0 0 / 25%), 0 5px 5px 0 rgb(0 0 0 / 30%)'
                }}
                >Go to quiz</button>

                <button class="btn btn-primary courseButton" 
                data-bs-toggle="modal" 
                data-bs-target="#subId" 
                className="btn" 
                type="button"
                style={{backgroundColor: '#0E3B03', 
                color: 'white',
                boxShadow: '0 2px 5px 0 rgb(0 0 0 / 25%), 0 5px 5px 0 rgb(0 0 0 / 30%)'
                }}
                >Download</button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
      {/* End of Topic Container */}
      {/* End of Main Layout */}
    
      <div className="modal fade modalMain" id="mainId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Take the quiz?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
          <p>You will be redirected to Google Form's website. Please keep your notes and answer the Quiz honestly.</p><p>Good luck trainee!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => window.open('https://www.google.com', '_blank')} style={{backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px'}}>Yes</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Cancel</button>
            
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade modalSub" id="subId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div className="modal-dialog">
        <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Take the quiz?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
          <p>You will be downloading a resource file.</p><p>Do you wish to Proceed?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px'}}>Proceed</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Cancel</button>
            
          </div>
        </div>
      </div>
    </div>

        </Fragment>
      );
    }
export default TeamC_CourseSvn3;