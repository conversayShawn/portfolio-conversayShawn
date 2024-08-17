import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Shawn Harris</h1>
      <nav>
        <ul className="nav">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
