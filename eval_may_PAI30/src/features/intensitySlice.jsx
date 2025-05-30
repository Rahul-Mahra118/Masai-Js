import { createSlice } from "@reduxjs/toolkit";

const initialState={
    rawData:[]
}

const intensitySlice= createSlice({
    name:'intensity',
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.rawData.push(...action.payload)
        }
    }
})

export const {addData}= intensitySlice.actions
export default intensitySlice.reducer