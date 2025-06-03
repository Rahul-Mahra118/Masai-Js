import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WaterForm from "./WaterForm";
import WaterList from "./WaterList";

function App() {
  const [logs, setLogs]=useState([]);
  return (
    <>
      <WaterForm  setLogs={setLogs} logs={logs}/>
      <WaterList logs={logs} setLogs={setLogs}></WaterList>
    </>
  );
}

export default App;
