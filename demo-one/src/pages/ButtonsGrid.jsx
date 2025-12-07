import React from "react";

const buttons = [
  "C", "⌫", "/", "*",
  "7", "8", "9", "-",
  "4", "5", "6", "+",
  "1", "2", "3", "=",
  "0", "."
];

export default function ButtonsGrid({ handleButtonClick }) {
  return (
    <div className="buttons-grid">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="btn"
          onClick={() => handleButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
