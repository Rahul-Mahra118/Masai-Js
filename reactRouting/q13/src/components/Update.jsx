import React from "react";
import { useFirebase } from "../context/FirebaseContext";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [movieItem, setMovie] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  async function fetchmovie() {
    try {
      let response = await axios.get(
        `https://movies-4b857-default-rtdb.asia-southeast1.firebasedatabase.app/masaimovies/${id}.json`
      );
      let movie = response.data;
      setMovie({ ...movie });
      setTitle(movie.title);
      setDescription(movie.description);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchmovie();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.patch(
        `https://movies-4b857-default-rtdb.asia-southeast1.firebasedatabase.app/masaimovies/${id}.json`,
        {
          title,
          description,
        }
      );

      navigate("/movies");
      alert("movie updated successfully");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Movie</button>
    </>
  );
};

export default Update;
