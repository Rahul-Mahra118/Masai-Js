import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BookSlice";

const Book = () => {
    const dispatch = useDispatch()
  const [form, setForm] = useState({
    id: Date.now(),
    bookName: "",
    genre: "",
    author: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addBook(form));
    setForm({
    id: Date.now(),
    bookName: "",
    genre: "",
    author: ""
  })
  };
  const handleChange = (e) => {
    const {name, value}= e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    })
    )
    
  };
  const handlereadChange=()=>{

  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the book name"
          value={form.bookName}
          name="bookName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="enter the genre"
          name="genre"
          value={form.genre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="enter the author"
          name="author"
          value={form.author}
          onChange={handleChange}
          required
        />
       
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Book;
