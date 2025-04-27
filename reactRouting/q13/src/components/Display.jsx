import { useEffect} from "react";
import axios from "axios";
import React from "react";
import { useMovieContext } from "../context/MovieContext";
import {useNavigate} from 'react-router-dom'



const Display = () => {
  const { movie, setMovie } = useMovieContext();
  const navigate= useNavigate()

  const showMovies = async () => {
    let response = await axios.get(
      "https://movies-4b857-default-rtdb.asia-southeast1.firebasedatabase.app/masaimovies.json"
    );
    let movies = response.data;
    // console.log(movies)
    let movieArray = Object.entries(movies).map(([id, movie]) => ({
      id,
      ...movie,
    }));
    setMovie([...movieArray]);
  };

  const handleUpdate=(id)=>{
     navigate(`/update-movies/${id}`)
  }

  return (
    <div>
      <button onClick={showMovies}>Show Movies</button>
      {movie &&
        movie.map((item) => (
          <div key={item.id}>
            <h2>Title: {item.title}</h2>
            <h4> Description : {item.description}</h4>
             <button onClick={()=>handleUpdate(item.id)}>Update</button>
          </div>
        ))}
    </div>
  );
};

export default Display;
