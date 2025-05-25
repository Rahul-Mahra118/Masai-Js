import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
interface Task{
    description:string,
    priority:'low'|'medium'|'high',
    completed:boolean

}
interface TaskState{
    [id:number]:Task
}
export interface PayloadType extends Task{
    id:number

}
const initialState:TaskState={}

// {id:123, task:{}}

// {id:1213, des:'are'} 
const taskSlice= createSlice({
    name:'tasks',
    initialState,
    reducers:{
       addOrUpdateTask:(state, action:PayloadAction<PayloadType>)=>{
          const{id, description,priority,completed}=action.payload;
          state[id]={description,priority,completed}
       },
       deleteTask:(state,action:PayloadAction<number>)=>{
        delete state[action.payload]
       }
    }
})

export const{addOrUpdateTask,deleteTask}= taskSlice.actions;
export default taskSlice.reducer;
