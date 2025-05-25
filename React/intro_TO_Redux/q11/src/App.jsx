import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sports from "./features/SportsSlice/Sports";
import { FilterInput } from "./features/SportsSlice/FilterInput";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState({
    search: ""
  });
  return (
    <>
      <FilterInput query={query} setQuery={setQuery} />
      <Sports query={query} />
    </>
  );
}

export default App;
