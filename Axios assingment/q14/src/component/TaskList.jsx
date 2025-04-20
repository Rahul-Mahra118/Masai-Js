import { useState, useEffect } from "react";
import axios from "axios";
function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchData = () => {
    axios("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
           let responseArray= Object.entries(response.data).map(([id,task])=>({id,...task}))
      })
      .catch((error) => console.log("Error fetching tasks:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li> // Error here?
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
