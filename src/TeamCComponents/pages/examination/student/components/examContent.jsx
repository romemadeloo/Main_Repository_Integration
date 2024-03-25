import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Team_D_HeaderV2 from "../../../../../TeamDComponents/Team_D_HeaderV2";

export default function ExamContent() {
  const [main, setMain] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [userSelection, setUserSelection] = useState({});
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [quizTitle, setQuizTitle] = useState(""); // State to store the quiz title
  const { id } = useParams();
  const [score, setScore] = useState(0); // State to store the score
  const [enrollmentId, setEnrollmentId] = useState(""); // State to store enrollment id
  const [quizId, setQuizId] = useState(""); // State to store quiz id
  const [currentDate, setCurrentDate] = useState(""); // State to store current date
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch user enrollment id, quiz id, and current date
    const fetchUserData = async () => {
      try {
        // Fetch user data from your backend API or any other source
        // For demonstration, let's assume you have a function getUserData() that returns user data
        const userData = await getUserData();
        setEnrollmentId(userData.enrollmentId);
        setQuizId(id); // Quiz id is obtained from URL params
        setCurrentDate(new Date().toISOString());
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call fetchUserData function
    fetchUserData();

    // Your existing code for fetching questions and quiz title
    const fetchMain = async () => {
      try {
        // Fetch questions
        const questionsResult = await axios.get(`http://localhost:8080/api/v1/auth/questionbyquiz/${id}`);
        const coursesArray = Array.isArray(questionsResult.data) ? questionsResult.data : [questionsResult.data];
        setMain(coursesArray);
        setTotalItems(coursesArray.length);

        // Fetch quiz title
        const quizResult = await axios.get(`http://localhost:8080/api/v1/auth/quiz/${id}`);
        const quizData = quizResult.data;
        setQuizTitle(quizData.quiz_title);
      } catch (error) {
        console.error("Error loading quiz:", error);
      }
    };

    // Call the API request
    fetchMain();

  }, [id]);

  useEffect(() => {
    // Shuffle choices only once when the component mounts
    if (main.length > 0) {
      const choicesArray = main.map(con => [con.choice_1, con.choice_2, con.choice_3, con.correct_answer]);
      setShuffledChoices(choicesArray.map(shuffleArray));
    }
  }, [main]);

  // Function to handle radio button selection
  const handleRadioSelection = (questionId, selectedChoice) => {
    setUserSelection((prevSelection) => ({
      ...prevSelection,
      [questionId]: selectedChoice,
    }));
  };

  // Function to handle scoring and show alert on submission
  const scoringFunction = () => {
    let score = 0;
    for (let i = 0; i < main.length; i++) {
      const questionId = main[i].question_id;
      const correctAnswer = main[i].correct_answer;
      const userAnswer = userSelection[questionId]; // Access selected choice for the question

      console.log("Question ID:", questionId);
      console.log("Correct Answer:", correctAnswer);
      console.log("User's Answer:", userAnswer);

      if (correctAnswer === userAnswer) {
        score++;
      }
    }

    // Set the score to state
    setScore(score);

    // Display alert after calculating the score
    alert(`Your score: ${score}/${totalItems}`);

    // Call function to save quiz taken data
    saveQuizTakenData(score);
  };

  // Function to save quiz taken data
  const saveQuizTakenData = async (score) => {
    // Prepare data for the POST request
    const quizTakenData = {
      enrollmentId: enrollmentId,
      quizId: quizId,
      score: score,
      dateTaken: currentDate,
    };

    // Make a POST request to your backend API
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/quiztaken",
        quizTakenData
      );
      console.log("Quiz taken data saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving quiz taken data:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator while data is being fetched
  }

  return (
    <>
      <Team_D_HeaderV2 />
      <div id="outerContainer">
        <div className="mt-10 ml-20 text-[2rem] font-semibold">{quizTitle}</div>
        <div className="ml-20"> TOTAL ITEMS: {totalItems}</div>
        <div id="parentExamContent">
          {main &&
            main.map((con, ida) => {
              const { question } = con;

              return (
                <div id="childExamContent" key={ida} className="rounded-3">
                  <div id="questionContainer">
                    <p className="lh-base">
                      {ida + 1}. {question}
                    </p>

                    {shuffledChoices.length > 0 &&
                      shuffledChoices[ida].map((choice, index) => (
                        <div className="form-check" key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`flexRadioDefault${ida}`}
                            id={`flexRadioDefault${ida}_${index}`}
                            onChange={() => handleRadioSelection(con.question_id, choice)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`flexRadioDefault${ida}_${index}`}
                          >
                            {choice}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          <div id="btnContainer">
            <button
              id="btnCancel"
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#cancelModal"
            >
              Cancel
            </button>
            <button id="btnSubmit" className="btn" onClick={scoringFunction}>
              Submit
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Dummy function to simulate fetching user data
async function getUserData() {
  return {
    enrollmentId: "user123", // Replace with actual enrollment id
  };
}
