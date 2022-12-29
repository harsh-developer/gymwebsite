import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <img
          src="https://ik.imagekit.io/d8m85okiz/webLogo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672048997164"
          alt="logo"
          className="logo"
        />
        <ul className="navbar-elements">
          <li >
            <NavLink to="/" style={{textDecoration: 'none', color: 'black'}}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing" style={{textDecoration: 'none', color: 'black'}}>Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/program" style={{textDecoration: 'none', color: 'black'}}>Program</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{textDecoration: 'none', color: 'black'}}>About</NavLink>
          </li>
          <button className="register-button" type="submit">
            Register Now
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
