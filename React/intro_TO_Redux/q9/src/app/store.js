import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/Todos/todoSlice'
export const store= configureStore({
    reducer:{
        todos:todoReducer
    }
})

store.subscribe(() => {
  console.log("State updated:", store.getState());
});