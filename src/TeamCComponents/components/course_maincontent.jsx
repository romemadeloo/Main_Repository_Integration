import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoArrowBackCircleSharp } from "react-icons/io5";
//import Team_D_HeaderV2 from "../../TeamDComponents/Team_D_HeaderV2";


import axios from "axios";


function TeamC_MainContent() {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };

    const [topics, setTopics] = useState([]);

    const {id} = useParams()
    useEffect(() => {
        const fetchChapters = async () => {
            try {
              const result = await axios.get(`http://localhost:8080/api/v1/auth/topic/${id}`);
        
              // Ensure that result.data is always an array by converting it
              const coursesArray = Array.isArray(result.data)
                ? result.data
                : [result.data];
                setTopics(coursesArray);
            } catch (error) {
              console.error("Error loading chapters:", error);
            }
          };
  
      fetchChapters();
    }, [id]);
console.log(topics)  

  return (
    <>
       {/* Return button linking back to the specified URL */}
      <Link onClick={goBack} className="buttonReturn d-flex align-items-center c_chapter_returncontainer" style={{ textDecoration: 'none', color: 'black', width: 'fit-content', }}>
        <div className="d-flex align-items-center" style={{ marginTop: '1rem' }}>
          <div>
            <img src="../../TeamCassets/green_button.png" className="btnReturn c_chapter_return" alt="return-icon" style={{
              transition: 'transform .1s', color: '#ffffff',
              marginLeft: '1rem', width: '2rem', height: '2rem',
            }} />
          </div>
          <span className="returnTitle c_chapter_returnText" style={{ marginLeft: '0.5rem', color: '#126912', fontSize: '1.5rem', marginTop: '0rem', }}>Back</span>
        </div>
         {/* Return button contents */}
      </Link>

      {/* Main layout */}
      <main id="c_maincontent_mainlayout">

        {/* Start of Topic Container */}
        {topics && topics.map((top, idx) => {
                const {topic_title, topic_description, topic_link} = top
            return(

              <div key={idx} id="topic0" className="c_maincontent_parentcontainer">

          <div className="container" id="c_maincontent_maincontainer" >
            {/* Displaying dynamic content based on the current pathname */}
            <p style={{ fontWeight: 'bold' }}>{topic_title}</p>
            <div style={{ backgroundColor: '#EBFFE5' }}>
              <div>
                <div
                  id="c_maincontent_textcontainer"
                >
                  <p className="lh-base" id="c_maincontent_textdesc" style={{ marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem', }}>{topic_description}</p>
                </div>

                <iframe
                src={topic_link}
                frameBorder="0"
                scrolling="no"
                className="blur-[.01rem] mt-3 h-[80%]  md:h-[350px] w-full lg:h-[450px] rounded-lg"></iframe>




                <div id="c_maincontent_buttoncontainer" >
                  <button className="btn courseButton"
                    data-bs-toggle="modal"
                    data-bs-target="#mainId"
                    type="button"
                    style={{
                      backgroundColor: '#0E3B03',
                      color: 'white',
                      boxShadow: '0 2px 5px 0 rgb(0 0 0 / 25%), 0 5px 5px 0 rgb(0 0 0 / 30%)',
                    }}
                  >Go to quiz</button>
                </div>
              </div>
            </div>
          </div>
        </div>
            )
                
        })}
        
      </main>
      {/* End of Topic Container */}
      {/* End of Main Layout */}

       {/* Modals for quiz and resource download */}              
      <div className="modal fade modalMain" id="mainId" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Take the quiz?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <p>You will be redirected to Google Form's website. Please keep your notes and answer the Quiz honestly.</p><p>Good luck trainee!</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { window.location.href = urlQuiz; }} style={{ backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Yes</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Cancel</button>

            </div>
          </div>
        </div>
        {/* Modal contents for quiz */}
      </div>

      <div className="modal fade modalSub" id="subId" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        {/* Modal contents for resource download */}
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: '#D9FFCF' }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Take the quiz?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <p>You will be downloading a resource file.</p><p>Do you wish to Proceed?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Proceed</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#0e3b03', color: '#ffffff', borderRadius: '20px', fontSize: '15px', width: '100px' }}>Cancel</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamC_MainContent;