import React from "react";
import "./Header.css";

// southhelpdesk@hathway.net"

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>Welcome to My Simple React App</h1>
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
