import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  books: [],
};
export const BookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      console.log(action);
      state.books.push({...action.payload,isRead:false});
    },
    updateBook:(state,payload)=>{
       const book=state.books.find(book=>book.id===action.payload)
       book.isRead=true;
    }
  },
});

export const {addBook} = BookSlice.actions;
export default BookSlice.reducer;