import React from "react";
import { NavLink } from "react-router-dom";
import { useBox } from "../../contexts/BoxContext";
import Icon from "./icon.png";
function Header() {
  const { box } = useBox();
  return (
    <header>
      <div>
        <NavLink to={"/"}>
          <img src={Icon} alt="" />
        </NavLink>
      </div>
      <nav>
        <NavLink to={"/cart"} className={"box"}>
          <span>{box.length}</span>
          <ion-icon name="cart" size={"large"}></ion-icon>
        </NavLink>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
    </header>
  );
}

export default Header;
