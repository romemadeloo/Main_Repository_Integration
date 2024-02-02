import { useLocation, Link } from "react-router-dom";
import { useRef, useState } from "react";
import { data } from "../data/quiz_content_data";

import '../css/quizform_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamC_QuizForm_Component (){
    const { pathname } = useLocation();
    let quizTitle = '';
    let descText = '';
    let urlReturn = '';
    
    switch (pathname) {
       /* COURSE 1 */
      case '/quizform':
        quizTitle = 'Quiz Title Goes Here';
        descText = 'Please keep your notes before taking the quiz. No cheating! Go anzen ni.';
        urlReturn = '/course';        
        break;  
        
      default:
        quizTitle = '-NO SUBTITLE-';
        descText = '-NO DESCTEXT-';
        urlReturn = '-MISSING URL-';
        break;
    }
    {/* FOR QUIZ QUESTIONS */}
    let [index,setIndex] = useState(0);
    let [question,setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score,setScore] = useState(0);
    let [result,setResult] = useState(false);

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_array = [option1, option2, option3, option4];
    {/* END FOR QUIZ QUESTIONS */}
    
    {/* VALIDATORS */}
    const checkAns = (e,answer) => {
        if(lock === false){
            if( question.answer===answer){
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev=>prev+1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.answer-1].current.classList.add("correct");
            }
        }
    }

    const next = () => {
        if(lock === true){
            if(index === data.length -1){
                setResult(true);
                return 0;

            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false); 
            option_array.map((option)=> {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        window.location.reload();
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        result(false);
    }
    {/* END OF VALIDATORS */}

        return(
        <>
        <Link to={urlReturn} className="buttonReturn d-flex align-items-center c_chapter_returncontainer" style={{ textDecoration: 'none', color: 'black', width: 'fit-content',}}>
            <div className="d-flex align-items-center" style={{marginTop: '1rem'}}>
                <div>
                    <img src="../../src/assets/TeamCassets/green_button.png" className="btnReturn c_chapter_return" alt="return-icon" style={{ transition: 'transform .1s', color: '#ffffff', 
                    marginLeft:'1rem', width: '2rem', height: '2rem', }}/>
                </div>
                <span className="returnTitle c_chapter_returnText" style={{ marginLeft: '0.5rem', color: '#126912', fontSize: '1.5rem', marginTop: '0rem',}}>Back</span>
            </div>
        </Link>

        {/* Main layout */}
        <main className="c_chapcourse_mainlayout" style={{marginTop: '1.5rem', marginLeft: '10rem', marginRight: '10rem'}}>

        {/* Start of Topic Container */}
        <div>

          <div className="container">
            <p style={{ fontSize: '2.5rem'}}>{quizTitle}</p>
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
                
                {/* QUIZ QUESTIONS GOES HERE */}
                <div id="quizContainer" style={{marginTop: '2.5rem', marginBottom: '2.5rem', marginLeft: '2.5rem', marginRight: '2.5rem',}}>
                <div className="quizItemList" style={{textAlign: 'left', fontWeight: 'bold'}}>
                    {result?<></>:<>
                    <p>{index+1}. {question.question}</p>
                    <ul>    
                        <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                        <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
                        <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                        <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
                    </ul>
                    <button onClick={next} className="btn-success" style={{width: '5rem', borderRadius: '0.5rem'}}>Next</button>
                    <div className="index">{index+1} of {data.length} questions.</div>
                    </>}
                    {result?<><p>You scored {score} out of {data.length}</p>
                    <button onClick={reset} className="btn-success" style={{width: '5rem', borderRadius: '0.5rem'}}>RESET</button>
                    </> : <></>}
                    
                </div>
                </div>
                </div>
                {/* END OF QUIZ QUESTION */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{margin: '10px'}}>

                <button className="btn courseButton" 
                data-bs-toggle="modal" 
                data-bs-target="#subId"
                type="button"
                style={{backgroundColor: '#0E3B03', 
                color: 'white',
                boxShadow: '0 2px 5px 0 rgb(0 0 0 / 25%), 0 5px 5px 0 rgb(0 0 0 / 30%)', 
              }}
                >SUBMIT</button>
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

export default TeamC_QuizForm_Component;