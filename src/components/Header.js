import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
      <h1 className={`logo ${scrolled ? "logo-scrolled" : ""}`}>
        Shawn Harris
      </h1>
      <nav>
        <ul className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
          <li>
            <Link to="about" smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
