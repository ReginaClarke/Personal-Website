import React from "react";
import { NavLink } from "react-router-dom";

const gohome = function () {
  window.open("/", "_blank");
};

function Header() {
  return (
    <header>
      <h1 className="headerbackhome" onClick={gohome}>
        Regina Clarke
      </h1>
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

        <NavLink to={"/resume"} activeClassName={"active"}>
          Resume
        </NavLink>

        <NavLink to={"/discovery"} activeClassName={"active"}>
          Discovery
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
