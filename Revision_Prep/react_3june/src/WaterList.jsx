import React, { useEffect ,useRef} from "react";

import { getTodayTotal } from "./utils";

const WaterList = ({ logs, setLogs }) => {
  const ref= useRef()
  const handleRemove = (id) => {
    const logi = logs.filter((log) => log.id !== id);
    //findIndex or splice
    setLogs(logi);
  };

  const value=parseInt(getTodayTotal(logs))
  {console.log('value',value)}
  useEffect(()=>{
    console.log(ref.current.value)
    const value1= +(ref.current.textContent.split('-')[1])
    if(value1>3000){
      ref.current.style.backgroundColor = "red";
    }
  },[value])
  return (
    <div style={{ display: "grid" }}>
        <h1 ref={ref}>Todays Intake-{value} </h1>

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
