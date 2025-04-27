import React from "react";
import { useFirebase } from "../context/FirebaseContext.jsx";
import { useMovieContext } from "../context/MovieContext.jsx";
import { useState } from "react";
const AddData = () => {
  const { addData } = useFirebase();
  const { title, setTitle, description, setDescription } = useMovieContext();
  const [isFlag, setFlag] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "title") {
      setTitle(value);
    }
    if (name == "description") {
      setDescription(value);
    }
  };

  const handleAddMovie = async () => {
    if (isFlag) return;
    setFlag(true);

    const data = {
      title: title,
      description: description,
    };

    try {
      await addData("masaimovies", data);
      console.log("data added successfully ", data);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error.message);
    } finally {
      setFlag(false);
    }
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Enter the Movie title"
        value={title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Enter the description"
        value={description}
        onChange={handleChange}
        required    
      />
      <button onClick={handleAddMovie} disabled={isFlag}>
        Add Movie
      </button>
    </div>
  );
};

export default AddData;
