import React, { useState } from "react";
import Screen from "./Screen";
import ButtonPannel from "./ButtonPannel";
import Display from "./Display";
import ButtonRow from "./ButtonRow";

function Calculator() {
  // Define state to store the current expression and result
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  // Function to handle button click and update input
  const handleButtonClick = (value) => {
    if (value === "C") {
      // Clear both input and result
      setInput("0");
      setResult("");
    } else if (value === "DEL") {
      // Remove last character from input
      setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "=") {
      // Calculate result
      try {
        setResult(eval(input).toString()); // Basic eval for simplicity; avoid for production
      } catch {
        setResult("Error");
      }
    } else {
      // Append number/operator to input
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className="calculator-container">
      <div className="background-circle"></div>
      <div className="calculator">
        {/* <Display input={input} result={result} />
        <ButtonRow onButtonClick={handleButtonClick} /> */}
        <Display />
        <ButtonRow />
      </div>
    </div>
  );
}

export default Calculator;
