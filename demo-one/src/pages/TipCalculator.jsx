import React, { useState } from "react";
// import "../TipCalculator.css"
import './tip.css';

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCalculate = (percentage) => {
    if (bill === "" || isNaN(bill)) {
      alert("please enter a valid bill");
      return;
    }

    const result = (parseFloat(bill) * percentage) / 100;
    setTip(result.toFixed(2));
    const total = (bill + tip);

    // convert bill to number
    const billAmount = parseFloat(bill);

    // calculate tip
    const tipAmount = (billAmount * percentage) / 100;
    setTip(tipAmount.toFixed(2));

    // calculate total
    const totalAmount = billAmount + tipAmount;
    setTotal(totalAmount.toFixed(2)); 

  };

  const handleReset = () => {
    setBill("");
    setTip(0);
    setTotal(0);
  };

  return (
    <div className="container">
      <h2>Tip Calculator</h2>
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter Bill Amount"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>

      <div className="btn">
        <button onClick={() => handleCalculate(20)}>Best: 20%</button>
        <button onClick={() => handleCalculate(5)}>Normal: 5%</button>
      </div>

      <h3>Tip Amount: ${tip}</h3>
      <h3> bill Amount: ${bill} + {tip} = {total}</h3>

      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  );
}
