import React, { useEffect, useState } from "react";
import axios from "axios";
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    let response = await axios("https://rickandmortyapi.com/api/character");
    let data = response.data.results;
    console.log(data);
    setCharacters(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const characterPerPage = 5;
  const indexOfLastPost = currentPage * characterPerPage; // 1*5
  const indexOfCurrentPost = indexOfLastPost - characterPerPage; // 5-5
  const currentPost = characters.slice(indexOfCurrentPost, indexOfLastPost);

  return (
    <div>
      {characters &&
        currentPost.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
          </div>
        ))}
        <button onClick={()=>setCurrentPage(prev=>prev-1)} disabled={currentPage==1}>back</button>
        <button onClick={()=>setCurrentPage(prev=>prev+1)}>Next</button>
    </div>
  );
};

export default Characters;
