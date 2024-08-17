import React from "react";
import "../styles/Footer.css";
import githubIcon from "../assets/github-icon.svg"
import linkedinIcon from "../assets/linkedIn-icon.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Shawn Harris</p>
        <div className="social-links">
          <a href="https://github.com/conversayShawn" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/conversayshawn/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
