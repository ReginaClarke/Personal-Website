import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Regina Clarke</h1>
      <h4>Software Engineer & Product Manager</h4>
      <nav className="navLinks">
        <NavLink exact to={"/"} activeClassName={"active"}>
          Home
        </NavLink>

        <NavLink to={"/about"} activeClassName={"active"}>
          About
        </NavLink>

        <NavLink to={"/projects"} activeClassName={"active"}>
          Projects
        </NavLink>

        <NavLink to={"/play"} activeClassName={"active"}>
          Play
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
