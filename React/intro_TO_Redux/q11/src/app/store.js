import { configureStore } from "@reduxjs/toolkit";
import matchReducer from '../features/SportsSlice/sportsSlice'

export const store= configureStore({
    reducer:{
        matches:matchReducer
    }
})