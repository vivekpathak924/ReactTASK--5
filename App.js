import React, { useState } from "react";
import "./index.css";

export default function App() {
  var currentYear = 2023;
  const [birthYear, setbirthYear] = useState(0);
  const [age, setAge] = useState(0);

  function clickHandler() {
    var theAge = currentYear - birthYear;
    setAge(theAge);
  }

  function inputChangeHandler(e) {
    setbirthYear(e);
  }

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <input onChange={(e) => inputChangeHandler(e.target.value)} /><br/>
      <div>
        {" "}
        <button onClick={clickHandler}>Submit</button>
      </div>

      <div>The age is: {age}</div>
    </div>
  );
}
