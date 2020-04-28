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
      <nav>
        <NavLink exact to={"/"} className="navLinks" activeClassName={"active"}>
          Home
        </NavLink>

        <NavLink to={"/about"} className="navLinks" activeClassName={"active"}>
          About
        </NavLink>

        <NavLink to={"/projects"} className="navLinks" activeClassName={"active"}>
          Projects
        </NavLink>

        <NavLink to={"/resume"} className="navLinks" activeClassName={"active"}>
          Resume
        </NavLink>

        <NavLink to={"/discovery"} className="navLinks" activeClassName={"active"}>
          Discovery
        </NavLink>

        {/* <NavLink to={"/contact"} activeClassName={"active"}>
          Contact Me
        </NavLink> */}
      </nav>
    </header>
  );
}

export default Header;
