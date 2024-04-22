import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("0");

  const data = [
    {
        id: 1,
        question: "What is the capital city of France?",
        answers: [
            {
                text: "Paris",
                correct: true,
            },
            {
                text: "London",
                correct: false,
            },
            {
                text: "Berlin",
                correct: false,
            },
            {
                text: "Rome",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        answers: [
            {
                text: "Mars",
                correct: true,
            },
            {
                text: "Venus",
                correct: false,
            },
            {
                text: "Jupiter",
                correct: false,
            },
            {
                text: "Saturn",
                correct: false,
            },
        ],
    },
    {
        id: 3,
        question: "Who is the author of the Harry Potter book series?",
        answers: [
            {
                text: "J.K. Rowling",
                correct: true,
            },
            {
                text: "Stephen King",
                correct: false,
            },
            {
                text: "George R.R. Martin",
                correct: false,
            },
            {
                text: "Dan Brown",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 4,
        question: "What is the largest ocean in the world?",
        answers: [
            {
                text: "Pacific Ocean",
                correct: true,
            },
            {
                text: "Atlantic Ocean",
                correct: false,
            },
            {
                text: "Indian Ocean",
                correct: false,
            },
            {
                text: "Arctic Ocean",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            {
                text: "Japan",
                correct: true,
            },
            {
                text: "China",
                correct: false,
            },
            {
                text: "South Korea",
                correct: false,
            },
            {
                text: "Thailand",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 6,
        question: "What is the largest desert in the world by area?",
        answers: [
            {
                text: "Antarctica",
                correct: true,
            },
            {
                text: "Sahara Desert",
                correct: false,
            },
            {
                text: "Arabian Desert",
                correct: false,
            },
            {
                text: "Gobi Desert",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 7,
        question: "Who painted the Mona Lisa?",
        answers: [
            {
                text: "Leonardo da Vinci",
                correct: true,
            },
            {
                text: "Pablo Picasso",
                correct: false,
            },
            {
                text: "Vincent van Gogh",
                correct: false,
            },
            {
                text: "Michelangelo",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 8,
        question: "What is the chemical symbol for the element Gold?",
        answers: [
            {
                text: "Au",
                correct: true,
            },
            {
                text: "Ag",
                correct: false,
            },
            {
                text: "Pb",
                correct: false,
            },
            {
                text: "Fe",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 9,
        question: "Which philosopher is known for his work 'Critique of Pure Reason'?",
        answers: [
            {
                text: "Immanuel Kant",
                correct: true,
            },
            {
                text: "Socrates",
                correct: false,
            },
            {
                text: "Plato",
                correct: false,
            },
            {
                text: "Aristotle",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 10,
        question: "In which year did the French Revolution begin?",
        answers: [
            {
                text: "1789",
                correct: true,
            },
            {
                text: "1799",
                correct: false,
            },
            {
                text: "1809",
                correct: false,
            },
            {
                text: "1819",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 11,
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {
                text: "William Shakespeare",
                correct: true,
            },
            {
                text: "George Bernard Shaw",
                correct: false,
            },
            {
                text: "Arthur Miller",
                correct: false,
            },
            {
                text: "Tennessee Williams",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 12,
        question: "What is the chemical symbol for the element Iron?",
        answers: [
            {
                text: "Fe",
                correct: true,
            },
            {
                text: "Ir",
                correct: false,
            },
            {
                text: "In",
                correct: false,
            },
            {
                text: "Au",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 13,
        question: "Which physicist formulated the theory of relativity?",
        answers: [
            {
                text: "Albert Einstein",
                correct: true,
            },
            {
                text: "Isaac Newton",
                correct: false,
            },
            {
                text: "Niels Bohr",
                correct: false,
            },
            {
                text: "Galileo Galilei",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 14,
        question: "What is the highest mountain peak in the world?",
        answers: [
            {
                text: "Mount Everest",
                correct: true,
            },
            {
                text: "K2",
                correct: false,
            },
            {
                text: "Kangchenjunga",
                correct: false,
            },
            {
                text: "Lhotse",
                correct: false,
            },
        ],
    },
    // Add more trivia questions here
    {
        id: 15,
        question: "Which scientist discovered the law of gravity?",
        answers: [
            {
                text: "Isaac Newton",
                correct: true,
            },
            {
                text: "Albert Einstein",
                correct: false,
            },
            {
                text: "Galileo Galilei",
                correct: false,
            },
            {
                text: "Stephen Hawking",
                correct: false,
            },
        ],
    },
];


const moneyPyramid = useMemo(
    () =>
        [
            { id: 1, amount: "Rs. 1,000" },
            { id: 2, amount: "Rs. 2,000" },
            { id: 3, amount: "Rs. 3,000" },
            { id: 4, amount: "Rs. 5,000" },
            { id: 5, amount: "Rs. 10,000" },
            { id: 6, amount: "Rs. 20,000" },
            { id: 7, amount: "Rs. 40,000" },
            { id: 8, amount: "Rs. 80,000" },
            { id: 9, amount: "Rs. 1,60,000" },
            { id: 10, amount: "Rs. 3,20,000" },
            { id: 11, amount: "Rs. 6,40,000" },
            { id: 12, amount: "Rs. 12,50,000" },
            { id: 13, amount: "Rs. 25,00,000" },
            { id: 14, amount: "Rs. 50,00,000" },
            { id: 15, amount: "Rs. 1 Crore" },
        ].reverse(),
    []
);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;