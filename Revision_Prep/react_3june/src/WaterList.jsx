import React from "react";

import { getTodayTotal } from "./utils";

const WaterList = ({ logs, setLogs }) => {
  const handleRemove = (id) => {
    const logi = logs.filter((log) => log.id !== id);
    //findIndex or splice
    setLogs(logi);
  };
  const value=getTodayTotal(logs)
  return (
    <div style={{ display: "grid" }}>
        <h1>Todays Intake-{value} </h1>
      {logs.map((log, idx) => (
        <div key={idx + 1} style={{ border: "1px solid black " }}>
          <h2>Water Amount:{log.amount}</h2>
          <h3>Time:{log.time}</h3>
          <button onClick={() => handleRemove(log.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default WaterList;
