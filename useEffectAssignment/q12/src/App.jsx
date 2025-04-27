import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState({});
  const fetchJokes = async () => {
    let response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    let jokes = response.data;
    console.log(jokes);
    setJoke(jokes);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const handleClick = () => {
    fetchJokes();
  };

  return (
    <>
      {/* lets display this joke in card */}
      {joke.setup ? (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>
            <strong>Setup:</strong> {joke.setup}
          </p>
          <p>
            <strong>Punchline:</strong> {joke.punchline}
          </p>
        </div>
      ) : (
        <p>Loading joke...</p>
      )}
      <button
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
        }}
        onClick={handleClick}
      >
        Get Another Joke
      </button>
    </>
  );
}

export default App;
