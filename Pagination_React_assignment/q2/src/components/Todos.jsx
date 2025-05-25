import React, { useEffect, useState } from "react";

export const Todoss = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalTodos = todos.length;
  const fetchdata = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    console.log(data);
    setTodos(data)
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const todoPerPage=5
  let indexOfLastPost= currentPage*todoPerPage; //1*5=5
  let indexOfFirstPost=indexOfLastPost-todoPerPage ;//5-5=0;

  const Todos= todos.slice(indexOfFirstPost,indexOfLastPost)
  return (
    <div>
        <h1>Page:{currentPage}</h1>
      {todos &&
        Todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
          </div>
        ))}
      <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage==1}> Prev</button>
      <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage==Math.ceil(totalTodos/todoPerPage)}>Next</button>
    </div>
  );
};
