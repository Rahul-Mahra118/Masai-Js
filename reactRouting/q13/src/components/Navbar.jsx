import React from "react";
import { NavLink } from "react-router"

const Navbar = () => {
    console.log('navi bar')
  return (
    <ul style={{backgroundColor:'red'}}>
      <li>
        <NavLink to='/'>Add Data</NavLink>
      </li>   
      <li>
        <NavLink to='/movies'>Display Movies</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
