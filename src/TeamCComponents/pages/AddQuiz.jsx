import React from "react";
import "../css/addquiz.css";
//import { Button } from 'react-bootstrap/Button';
import { IoIosAdd } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import Pagination from "react-bootstrap/Pagination";

const AddQuiz = () => {
  return (
    <>
      <div>
        <form>
          <div className="row justify-content-center">
            <p className="AddQuizTitle">Topic 1:Quiz</p>
            <div className="row text-left mb-5 m-5">
              <div className="col-lg-6">
                <button className="btn btn-lg btn-success py-2 px-4 mb-3 bg-op-6 roboto-bold">
                  <IoIosAdd />
                </button>
              </div>
            </div>
            <div>
              <label></label>
              <textarea></textarea>
              <div className="grid grid-cols-2 gap-2 p-3">
                <input className="quizOption p-1" placeholder="Option 1"/>
                <input className="quizOption p-2" placeholder="Option 2"/>
                <input className="quizOption p-2" placeholder="Option 3"/>
                <input className="quizOption p-2" placeholder="Option 4"/>
              </div>
            </div>
            <div>
              <div>
                <button className="btn btn-lg btn-success py-2 px-4 mb-3 bg-op-6 roboto-bold">
                  <FaTrashAlt />
                </button>
              </div>
              <div>
                <button className="btn btn-lg btn-success py-2 px-4 mb-3 bg-op-6 roboto-bold">
                  <IoIosSave />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddQuiz;
