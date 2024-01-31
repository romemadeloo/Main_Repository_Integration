import { useLocation, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function TeamC_MainContent (){
    const { pathname } = useLocation();
    let layoutTitle = '';
    let subTitle = '';
    let descText = '';
    
    switch (pathname) {
       /* COURSE 1 */
      case '/course1_sql':
        layoutTitle = 'CHAPTER 1';
        subTitle = 'Introduction to SQL Query';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;

      case '/course1_svn':
        layoutTitle = 'CHAPTER 1';
        subTitle = 'Introduction to Subversion';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;

      case '/course1_hprog':
        layoutTitle = 'CHAPTER 1';
        subTitle = 'Introduction to HTML Programming';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;

       /* COURSE 2 */
       case '/course2_sql':
        layoutTitle = 'CHAPTER 2';
        subTitle = 'Introduction to SQL Query';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;

      case '/course2_svn':
        layoutTitle = 'CHAPTER 2';
        subTitle = 'Introduction to Subversion';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;

      case '/course2_hprog':
        layoutTitle = 'CHAPTER 2';
        subTitle = 'Introduction to HTML Programming';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;

       /* COURSE 3 */
       case '/course3_sql':
        layoutTitle = 'CHAPTER 3';
        subTitle = 'Introduction to SQL Query';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;

      case '/course3_svn':
        layoutTitle = 'CHAPTER 3';
        subTitle = 'Introduction to Subversion';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;

      case '/course3_hprog':
        layoutTitle = 'CHAPTER 3';
        subTitle = 'Introduction to HTML Programming';
        descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        break;
        
      default:
        layoutTitle = '-NO TITLE-';
        subTitle = '-NO SUBTITLE-';
        descText = '-NO DESCTEXT-';
        break;
    }
    
        return(
        <>
        <Link to='/course' className="buttonReturn d-flex align-items-center c_chapter_returncontainer" style={{ textDecoration: 'none', color: 'black', width: 'fit-content',}}>
            <div className="d-flex align-items-center">
                <div>
                    <img src="../../src/assets/TeamCassets/green_button.png" className="btnReturn c_chapter_return" alt="return-icon" style={{ transition: 'transform .1s', color: '#ffffff', 
                    marginLeft:'1rem', width: '2rem', height: '2rem', }}/>
                </div>
                <span className="returnTitle c_chapter_returnText" style={{ marginLeft: '0.5rem', color: '#126912', fontSize: '1.5rem', marginTop: '0rem',}}>Back</span>
            </div>
        </Link>
        {/* Main layout */}
        <main className="c_chapcourse_mainlayout" style={{marginTop: '3.5rem', marginLeft: '10rem', marginRight: '10rem'}}>

        {/* Start of Topic Container */}
        <div id="topic0" className="c_chapcourse_hidden">

          <div className="container">
            <p style={{fontWeight: 'bold', fontSize: '2.5rem'}}>{layoutTitle}</p>
            <p style={{ fontSize: '2.5rem'}}>{subTitle}</p>
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
                  <p className="lh-base" style={{fontSize: '1.3rem', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem',}}>{descText}</p>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{margin: '10px'}}>
                <button className="btn courseButton" 
                data-bs-toggle="modal" 
                data-bs-target="#mainId" 
                type="button"
                style={{backgroundColor: '#D9FFCF',
                boxShadow: '0 2px 5px 0 rgb(0 0 0 / 25%), 0 5px 5px 0 rgb(0 0 0 / 30%)',
                color: '#126912',
                }}
                >Go to quiz</button>

                <button className="btn courseButton" 
                data-bs-toggle="modal" 
                data-bs-target="#subId"
                type="button"
                style={{backgroundColor: '#0E3B03', 
                color: 'white',
                boxShadow: '0 2px 5px 0 rgb(0 0 0 / 25%), 0 5px 5px 0 rgb(0 0 0 / 30%)', 
              }}
                >Download</button>
               </div>   
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End of Topic Container */}
      {/* End of Main Layout */}

      <div className="modal fade modalMain" id="mainId" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
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
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf6_s-EAisyl3bXEn1QB1IrIRnYppAQjGkk_rsO4Gvfn7PGqw/viewform', '_blank')} style={{backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px'}}>Yes</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Cancel</button>
            
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade modalSub" id="subId" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
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
    </>
    )
}

export default TeamC_MainContent;