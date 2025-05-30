import { configureStore } from "@reduxjs/toolkit";
import intensityReducer from '../features/intensitySlice'
export const store = configureStore({
  reducer: {
    intensity:intensityReducer
  },
})