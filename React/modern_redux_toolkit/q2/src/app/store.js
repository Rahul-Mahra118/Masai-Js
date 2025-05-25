import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/TaskSlice/taskSlice";
export const store = configureStore({
  reducers: {},
});
