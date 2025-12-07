import React, { useState } from "react";
// import "../DemoBMIStyle.css";

export default function DemoBMI() {
  const [numPersons, setNumPersons] = useState("");
  const [people, setPeople] = useState([]);

  // When user enters number of persons
  const start = (e) => {
    e.preventDefault();
    const n = parseInt(numPersons);
    if (n > 0) {
      let temp = [];
      for (let i = 0; i < n; i++) {
        temp.push({ fullName: "", height: "", weight: "", bmi: "", category: "" });
      }
      setPeople(temp);
    }
  };

  // Calculate BMI for a person
  const calculate = (index) => {
    let person = people[index];
    if (person.fullName === "" || person.height === "" || person.weight === "") return;

    let heightM = person.height / 100;
    let bmi = (person.weight / (heightM * heightM)).toFixed(1);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal Weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    // Update this person
    let newPeople = [...people];
    newPeople[index].bmi = bmi;
    newPeople[index].category = category;
    setPeople(newPeople);
  };

  // Reset a person’s inputs
  const reset = (index) => {
    let newPeople = [...people];
    newPeople[index] = { fullName: "", height: "", weight: "", bmi: "", category: "" };
    setPeople(newPeople);
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      {/* Ask number of persons */}
      {people.length === 0 && (
        <form onSubmit={start} className="form-box">
          <input
            type="number"
            placeholder="How many persons?"
            value={numPersons}
            onChange={(e) => setNumPersons(e.target.value)}
          />
          <button type="submit">Start</button>
        </form>
      )}

      {/* Person inputs */}
      {people.length > 0 &&
        people.map((person, index) => (
          <div key={index} className="person-box">
            <h3>Person {index + 1}</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={person.fullName}
              onChange={(e) => {
                let newPeople = [...people];
                newPeople[index].fullName = e.target.value;
                setPeople(newPeople);
              }}
            />
            <input
              type="number"
              placeholder="Height (cm)"
              value={person.height}
              onChange={(e) => {
                let newPeople = [...people];
                newPeople[index].height = e.target.value;
                setPeople(newPeople);
              }}
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={person.weight}
              onChange={(e) => {
                let newPeople = [...people];
                newPeople[index].weight = e.target.value;
                setPeople(newPeople);
              }}
            />
            <button onClick={() => calculate(index)}>Calculate</button>

            {/* Show reset button only if input exists */}
            {(person.fullName || person.height || person.weight || person.bmi) && (
              <button className="reset-btn" onClick={() => reset(index)}>
                Reset
              </button>
            )}

            {/* Show result */}
            {person.bmi && (
              <div className="result">
                <p>Name: {person.fullName}</p>
                <p>BMI: {person.bmi}</p>
                <p>Category: {person.category}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
