import "../css/addquiz.css";
import React, { useEffect, useState } from "react"; // Import React and useState hook from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/addquiz.css";
import { IoIosAdd } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { IoArrowBackCircleSharp } from "react-icons/io5"
import axios from 'axios';



const QuizDesc = (props) => {

  const navigate = useNavigate();
  const { chapter_id } = useParams();
  // to save
  const [isSaved, setIsSaved] = useState([]);

  const [inputData, setInputData] = useState({
    chapter: chapter_id,
    quiz_title: "",
    quiz_description: "",
    question: "",
    choice_1: "",
    choice_2: "",
    choice_3: "",
    correct_answer: "",
   
  });
  
  const {chapter, quiz_title, quiz_description, question, choice_1, choice_2, choice_3, correct_answer } = inputData;

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const saveQuiz = async (e) => {
    e.preventDefault();
  
    try {
      const data = {
        quiz_title: inputData.quiz_title,
        quiz_description: inputData.quiz_description,
        chapter: {
          chapter_id: chapter_id
        },
        target_score:  inputData.target_score,
      };
  
      await axios.post(`http://localhost:8080/api/v1/auth/quiz`, data);
      // showModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error if the API call fails
    }
  };

  return (
    <div>
        <form action=""  onSubmit={saveQuiz}>
           <div className="">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="mr-auto">
                  <input
                    className="teambaddtitle form-control"
                    placeholder="Title"
                    name="quiz_title"
                    value={quiz_title}
                    onChange={(e) => handleInputChange(e)}
                  />
                </span>
              </div>
              <textarea
                className="teamcadddesc form-control p-4 mb-4"
                name="quiz_description"
                placeholder="Add description"
                value={quiz_description}
                onChange={(e) => handleInputChange(e)}
              />

                    {/* <textarea
                className="teamcadddesc form-control p-4 mb-4"
                name="chapter"
                placeholder="Add description"
                value={chapter_id}
                onChange={(e) => handleInputChange(e)}
              /> */}
            </div>
            <button
                  className="teamcquizbtntwo btn btn-lg btn-success py-2 px-4 m-3 bg-op-6 roboto-bold"
                  type="save" onClick={(() => window.alert("Congrats"))}> 
                  <IoIosSave />
                </button>
          </form>
    </div>
  )
}

export default QuizDesc