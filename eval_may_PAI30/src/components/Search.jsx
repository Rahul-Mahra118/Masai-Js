import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

export const Search = () => {
  const [date, setDate] = useState("");
  let ref = useRef(null);
  const navigate= useNavigate()

  useEffect(() => {
    ref.current?.focus()
  }, []);

  const handleSearch=(e)=>{
    e.preventDefault();
    navigate(`/intensity/${date}`)

  }
  return (
    <>
      <input type="date" ref={ref} value={date} required  onChange={(e)=>setDate(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
    </>
  );
};
