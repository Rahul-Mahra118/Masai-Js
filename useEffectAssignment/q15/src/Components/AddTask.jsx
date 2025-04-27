import React from "react";
import { useState } from "react";
import { db } from "../../firbase-config";
import { getDatabase, ref, set } from "firebase/database";
const AddTask = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    console.log(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="enter the value"
        onInput={handleInput}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
