import React from "react";

export default function Display({ currentInput }) {
  return (
    <div className="display">
      {currentInput || "0"}
    </div>
  );
}
