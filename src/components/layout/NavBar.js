import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <Link to="#" className="nav__item">
        Pokedex
      </Link>
    </div>
  );
}

export default NavBar;
