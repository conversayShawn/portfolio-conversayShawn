import React, { useEffect, useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <h1 className={`logo ${scrolled ? "logo-scrolled" : ""}`}>Shawn Harris</h1>
      <nav>
        <ul className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
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
