import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  console.log(data[0].question.choices.length);
  var questionNum = 0;
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Questions number={questionNum} />
      <NextQuestion />
    </div>
  );
}

function Questions(props) {
  return (
    <div className="question">
      {data[props.number].question.text}
      <div className="answers">{data[props.number].question.choices[0]}</div>
    </div>
  );
}
function NextQuestion(props) {
  return (
    <div className="nextButton">
      <button className="next"> Next Question </button>
    </div>
  );
}
export default App;
