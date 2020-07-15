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
      <h4>The Creative Problem Solver</h4>

      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                to={"/"}
                className="nav-link navLinks"
                activeClassName={"active"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/about"}
                className="nav-link navLinks"
                activeClassName={"active"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/projects"}
                className="nav-link navLinks"
                activeClassName={"active"}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/discovery"}
                className="nav-link navLinks"
                activeClassName={"active"}
              >
                Discovery
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>


    </header>
  );
}

export default Header;
