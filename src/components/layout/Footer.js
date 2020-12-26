import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      Data from
      <a
        className="footer__apiLink"
        href="https://pokeapi.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        PokeAPI.co
      </a>
    </footer>
  );
}

export default Footer;
