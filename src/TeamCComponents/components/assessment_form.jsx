import React, { useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { data } from "../data/quiz_content_data";

import '../css/quizform_style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamC_AssessmentForm_Component() {
  /* DISPLAY OF DATA BASED ON URL */
  const { pathname } = useLocation();
  let quizTitle = '';
  let descText = '';
  let urlReturn = '';

  switch (pathname) {
    case '/assessment_sql':
      quizTitle = 'Assessment Examination [SQL Programming]';
      descText = 'Please keep your notes before taking the quiz. No cheating! Go anzen ni.';
      urlReturn = '/assessment';
      break;
    case '/assessment_svn':
      quizTitle = 'Assessment Examination [Subversion]';
      descText = 'Please keep your notes before taking the quiz. No cheating! Go anzen ni.';
      urlReturn = '/assessment';
      break;
    case '/assessment_html':
      quizTitle = 'Assessment Examination [HTML Programming]';
      descText = 'Please keep your notes before taking the quiz. No cheating! Go anzen ni.';
      urlReturn = '/assessment';
      break;
    default:
      quizTitle = 'Quiz Title Goes Here';
      descText = 'Please keep your notes before taking the quiz. No cheating! Go anzen ni.';
      urlReturn = '/course';
      break;
  }

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [userAnswers, setUserAnswers] = useState([]);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const checkAns = (e, answer) => {
    if (lock === false) {
      option_array.map((option) => {
        option.current.classList.remove("selected");
        return null;
      });

      e.target.classList.add("selected");

      const userChoice = { question: question.question, answer };

      const answeredQuestionIndex = userAnswers.findIndex(
        (userAnswer) => userAnswer.question === userChoice.question
      );

      if (answeredQuestionIndex === -1) {
        setUserAnswers((prevAnswers) => [...prevAnswers, userChoice]);
      }
    }
  };

  const next = () => {
    if (lock === false) {
      if (userAnswers[index]?.answer === question.answer) {
        setScore((prev) => prev + 1);
      }

      if (index + 1 < data.length) {
        setIndex((prevIndex) => prevIndex + 1);
        setQuestion(data[index + 1]);
        setLock(false);
        option_array.map((option) => {
          option.current.classList.remove("selected");
          return null;
        });
      } else {
        setResult(true);
      }
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setUserAnswers([]);
  };

  // The rest of your component code remains unchanged

  return (
    // Your JSX code remains here
  );
}

export default TeamC_AssessmentForm_Component;
