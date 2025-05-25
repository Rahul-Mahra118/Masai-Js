import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //addTask
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    //removeTask
    removeTask: (state, action) => {
      const idx = state.task.findIndex((t) => t.id == action.payload);
      state.task.splice(idx, 1);
    },
    //toggleCompleteStatus
    toggleTask: (state, action) => {},
  },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
