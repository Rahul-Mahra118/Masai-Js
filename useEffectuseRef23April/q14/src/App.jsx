import { useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let ref1 = useRef("");
  let ref2 = useRef("");
  let ref3 = useRef("");
  const handleInput = () => {
    // ref1.current.focus()
    ref2.current.focus();
  };
  const handleInput1 = () => {
    ref3.current.focus();
  };
  const handleInput2 = () => {};

  const handleKeyDown=(e)=>{
    if (e.key === 'Backspace'){
      e.preventDefault();
      ref2.current.focus()
    }
  }
  useEffect(() => {
    ref1.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={ref1} onInput={handleInput} />
      <input type="text" ref={ref2} onChange={handleInput1} />
      <input type="text" ref={ref3} onInput={handleInput2} onKeyDown={handleKeyDown} />
    </>
  );
}

export default App;
