import { useState, type ChangeEvent, type FormEvent } from "react";
import { addOrUpdateTask, type PayloadType } from "./taskSlice";
import { useAppDisPatch } from "../../hooks/hooks";

const initialState: PayloadType = {
  id: Date.now(),
  description: "",
  priority: "",
  completed: false,
};
const Tasks: React.FC = () => {
  const [formState, setFormState] = useState(initialState);
  const dispatch = useAppDisPatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "completed") {
      setFormState({ ...formState, completed: !formState.completed });
      return;
    }

    setFormState({ ...formState, [name]: value });
     console.log(formState)
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addOrUpdateTask(formState));
     setFormState({...initialState, id:Date.now()})
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="description"></label>
        <input
          type="text"
          placeholder="enter description"
          id="description"
          value={formState.description}
          onChange={handleChange}
          required
          name="description"
        />

        <select
          name="priority"
          id="priority_id"
          onChange={handleChange}
          value={formState.priority}
        >
          <option value="">Choose Priority</option>
          <option value="low">Low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <label htmlFor="completed">Completed</label>
        <input
          type="checkbox"
          value={formState.completed ? "true" : "false"}
          checked={formState.completed}
          name="completed"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Tasks;
