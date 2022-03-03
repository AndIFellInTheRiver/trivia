import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

// let [ questionNum, setquestionNum ] = useState(0);

function App() {
  console.log(data[0].question.choices.length);
  const [questionNum, setquestionNum] = useState(0);
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Questions number={questionNum} />
      <NextQuestion number={questionNum} />
      <CorrectAnswer number={questionNum} />
    </div>
  );
}

function Questions(props) {
  /*
      {data[props.number].question.choices[0]}
      */
  return (
    <div className="question">
      {data[props.number].question.text}
      {data[props.number].question.choices.map((choice) => (
        <Answer choiceText={choice} />
      ))}
    </div>
  );
}

//  <button onClick={() => setPopulation(population + 1)}>+</button>,

function NextQuestion(props) {
  return (
    <div className="nextButton">
      <button className="next" onClick={() => setquestionNum(props.number + 1)}>
        {" "}
        Next Question{" "}
      </button>
    </div>
  );
}

function Answer(props) {
  return (
    <div className="answers">
      <span>{props.choiceText}</span>
    </div>
  );
}

function CorrectAnswer(props) {
  const [answerShow, setanswerShow] = useState(false);
  return (
    <div className="CorrectAnswer">
      <button onClick={() => setanswerShow(true)}>Show Answer</button>
      {answerShow && (
        <p>
          The correctanswer is{" "}
          {
            data[props.number].question.choices[
              data[props.number].question.correct_choice_index
            ]
          }{" "}
        </p>
      )}
    </div>
  );
}
export default App;
