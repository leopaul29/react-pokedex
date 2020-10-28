import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__title">
        Pokedex
      </Link>
    </nav>
  );
}

export default NavBar;
