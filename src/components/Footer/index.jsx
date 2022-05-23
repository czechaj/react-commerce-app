import React from "react";
import Icon from "./icon.png";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <NavLink to={"/"}>
        {" "}
        <img src={Icon} alt="" />{" "}
      </NavLink>
    </footer>
  );
}

export default Footer;
