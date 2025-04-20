import React, { useState } from "react";
import About from "./About.jsx";
import { Dashboard } from "./Dashboard.jsx";
import { Home } from "./Home.jsx";
const Navbar = () => {
  const [isActive, setActive] = useState("");
  const handleClick = (section) => {
    setActive(section);
  };
  return (
    <div>
      <ul>
        <li
          onClick={() => {
            handleClick("home");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            handleClick("about");
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            handleClick("dashboard");
          }}
        >
          Dashboard
        </li>
      </ul>

      <div>
        {isActive === "home" && <Home />}
        {isActive === "about" && <About />}
        {isActive === "dashboard" && <Dashboard />}
      </div>
    </div>
  );
};

export default Navbar;
