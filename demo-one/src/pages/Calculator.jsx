import React, { useState } from "react";
import Display from "./Display";
import ButtonsGrid from "./ButtonsGrid";
import HistoryPanel from "./HistoryPanel";
import './calculator.css';

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operator, setOperator] = useState("");
  const [history, setHistory] = useState([]);

  function handleButtonClick(value) {
    if (
      value === "0" ||
      value === "1" ||
      value === "2" ||
      value === "3" ||
      value === "4" ||
      value === "5" ||
      value === "6" ||
      value === "7" ||
      value === "8" ||
      value === "9"
    ) {
      setCurrentInput(currentInput + value);
    } else if (value === ".") {
      if (!currentInput.includes(".")) {
        setCurrentInput(currentInput + ".");
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      if (currentInput !== "") {
        setPreviousInput(currentInput);
        setOperator(value);
        setCurrentInput("");
      }
    } else if (value === "C") {
      setCurrentInput("");
      setPreviousInput("");
      setOperator("");
    } else if (value === "⌫") {
      setCurrentInput(currentInput.slice(0, -1));
    } else if (value === "=") {
      if (previousInput && operator && currentInput) {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let result = 0;
        if (operator === "+") result = num1 + num2;
        else if (operator === "-") result = num1 - num2;
        else if (operator === "*") result = num1 * num2;
        else if (operator === "/") {
          if (num2 === 0) {
            result = "Error";
          } else {
            result = num1 / num2;
          }
        }
        setCurrentInput(result.toString());
        setHistory([
          ...history,
          `${previousInput} ${operator} ${currentInput} = ${result}`,
        ]);
        setPreviousInput("");
        setOperator("");
      }
    }
  }

  return (
    <div className="calculator-container">
      <div className="calculator-left">
        <Display currentInput={currentInput} />
        <ButtonsGrid handleButtonClick={handleButtonClick} />
      </div>
      <HistoryPanel history={history} />
    </div>
  );
}
