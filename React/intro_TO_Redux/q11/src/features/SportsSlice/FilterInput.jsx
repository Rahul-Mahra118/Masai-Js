import { useState } from "react";
import { useSelector } from "react-redux";

export const FilterInput = ({ query, setQuery }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e)
    const { name, value } = e.target;
    setQuery(prev=>({ ...prev, [name]: value }));
  };

 

  return (
    <>
      <input
        type="text"
        required
        value={query.name}
        placeholder="enter the teamName, venue"
        name="search"
        onChange={handleChange}
      />
      {/* <input type="date" required value={query.date} onChange={handleChange} /> */}
    </>
  );
};
