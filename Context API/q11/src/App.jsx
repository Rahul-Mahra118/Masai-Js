import { useState } from "react";
import "./App.css";
import Child1 from "./components/Child1";

function App() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <Child1 props={input}></Child1>
    </>
  );
}

export default App;
