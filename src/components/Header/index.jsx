import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to={"/"}>Shopilantee</NavLink>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/"}>About</NavLink>
        <NavLink to={"/"}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
