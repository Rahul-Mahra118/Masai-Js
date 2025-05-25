import { useState, type ChangeEvent } from "react";
import { addOrUpdateTask, type PayloadType } from "./taskSlice";
import { useAppDisPatch } from "../../hooks/hooks";

const initialState: PayloadType = {
  id: Date.now(),
  description: "",
  priority: "low",
  completed: false,
};
const Tasks: React.FC = () => {
  const [formState, setFormState] = useState<PayloadType>(initialState);
  const dispatch= useAppDisPatch();
  const handleChange=(e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
    setFormState({...formState, description:e.target.value })

  }
const handleSubmit=(e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(addOrUpdateTask(formState))
}
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
        />

        <select name="Priority_dropdown" id="priority_id" onChange={handleChange}>
            <option value="">Choose Priority</option>
            <option value="low">Low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select>
        <input type="submit" value='Submit' />
      </form>
    </>
  );
};

export default Tasks;
