import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, payload) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const {addTodo, deleteTodo}= TodoSlice.actions;
export default TodoSlice.reducer;
