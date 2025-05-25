import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[],
    total:0
}
export const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action)=>{
            console.log(action.payload)
           state.cart.push(action.payload)
           state.total+=parseInt(action.payload.price)
        },
        removeItem:(state,action)=>{
           state.filter(s=>s.id!=action.payload)
           const product= state.cart.find(p=>p.id==action.payload)
           state.total-=+(product.price);
        }
    }

})

export const {addItem,removeItem}= cartSlice.actions;
export default cartSlice.reducer;