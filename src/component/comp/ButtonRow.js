import React from "react";
import Button from "./Button";

function ButtonRow({ onButtonClick }) {
  const buttons = [
    { label: "C", className: "clear-icon bg-icon" },
    { label: "DEL", className: "delete-icon bg-icon" },
    { label: "%", className: "percentage-icon bg-icon" },
    { label: "/", className: "divide-icon bg-icon" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "*", className: "multiply-icon bg-icon" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "+", className: "add-icon bg-icon" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "-", className: "minus-icon bg-icon" },
    { label: "0", className: "zero" },
    { label: "." },
    { label: "=", className: "equal-icon bg-icon" },
  ];

  return (
    <>
      <section className="btn-row">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={btn.className}
            // onClick={() => onButtonClick(btn.label)}
          >
            {btn.label}
          </button>
        ))}
      </section>
    </>
  );
}

export default ButtonRow;
