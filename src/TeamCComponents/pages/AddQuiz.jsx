import React from "react";
import "../css/addquiz.css";
//import { Button } from 'react-bootstrap/Button';
import { IoIosAdd } from "react-icons/io";
import Pagination from 'react-bootstrap/Pagination';

const AddQuiz = () => {
  return (
    <>
      <div>
        <form>
          <div className="row justify-content-center">
            <p>Topic 1:Quiz</p>
            <div className="row text-left mb-5 m-5">
              <div className="col-lg-6">
                <button>
                  <IoIosAdd />
                </button>
              </div>
            </div>
            <div>
              <label></label>
              <textarea></textarea>
              <div className="grid grid-cols-2 gap-2">
      <input className="quizOption p-1" />
      <input className="quizOption p-2"/>
      <input className="quizOption p-2"/>
      <input className="quizOption p-2"/>

              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddQuiz;
