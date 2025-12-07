import React from "react";

export default function HistoryPanel({ history }) {
  return (
    <div className="history-panel">
      <h3>History</h3>
      <div className="history-list">
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
