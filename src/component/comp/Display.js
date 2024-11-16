// Display.js
import React from "react";

function Display({ input, result }) {
  return (
    <div className="output-field-container">
      <input type="text" className="output-field" value={result} readOnly />
      <input type="text" className="input-field" value={input} readOnly />
    </div>
  );
}

export default Display;
