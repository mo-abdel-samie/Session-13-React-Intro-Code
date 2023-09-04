import React, { useRef, useState } from "react";
import { Container } from "../components/Container";

const AnswerCard = ({ answer, corectAnswer, useRef }) => (
  <div className="card shadow-sm mb-2">
    <div className="card-body ">
      <div className="form-check">
        <input
          value={corectAnswer ? 1 : 0}
          className="form-check-input"
          type="radio"
          ref={useRef}
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {answer}
        </label>
      </div>
    </div>
  </div>
);

export const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      title: "Question:1",
      answers: ["A1", "A2", "A3", "A4"],
      corect: 0,
    },
    {
      title: "Question:2",
      answers: ["A1", "A2", "A3", "A4"],
      corect: 1,
    },
    {
      title: "Question:3",
      answers: ["A1", "A2", "A3", "A4"],
      corect: 3,
    },
    {
      title: "Question:4",
      answers: ["A1", "A2", "A3", "A4"],
      corect: 2,
    },
  ]);

  const [curentQ, setCurentQ] = useState(0);

  const [score, setScore] = useState(0);

  const [userAnswers, setUserAnswers] = useState([]);

  const inputAnswers = useRef(0);

  const nextBtnHandle = () => {
      setUserAnswers();
      console.log(inputAnswers.current);
    if (curentQ < questions.length - 1) {
      setCurentQ(curentQ + 1);
    }
  };

  const prevBtnHandle = () => {
    if (curentQ > 0) {
      setCurentQ(curentQ - 1);
    }
  };

  const submitHandle = () => {
    console.log("Hello");
  };

  return (
    <section>
      <Container>
        <h2>Quiz</h2>
        <div className="card">
          <div className="align-items-center card-header d-flex justify-content-between py-3">
            <h3 className="m-0">Qize title</h3>
            <p className="m-0">
              {curentQ + 1} outof {questions.length}
            </p>
          </div>

          <div className="card-body">
            <h5 className="card-title">{questions[curentQ].title}</h5>

            {questions[curentQ].answers.map((an, i) => (
              <AnswerCard
                useRef={inputAnswers}
                corectAnswer={questions[curentQ].corect === i ? true : false}
                answer={an}
                key={i}
              />
            ))}
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button onClick={prevBtnHandle} className="btn btn-outline-success">
              Prev
            </button>
            {curentQ === questions.length - 1 ? (
              <button onClick={submitHandle} className="btn btn-danger">
                Submit
              </button>
            ) : (
              <button onClick={nextBtnHandle} className="btn btn-success">
                Next
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
