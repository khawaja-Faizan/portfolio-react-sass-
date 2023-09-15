import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="menu-btn" onClick={() => toggleMenu()}>
        <div className={`menu-btn__burger ${showMenu ? "open" : ""}`}></div>
      </div>
      <nav className={`nav ${showMenu ? "open" : ""}`}>
        <ul className={`menu-nav ${showMenu ? "open" : ""}`}>
          <li className={`menu-nav__item active ${showMenu ? "open" : ""}`}>
            <a href="/home" className="menu-nav__link">
              Home
            </a>
          </li>
          <li className={`menu-nav__item ${showMenu ? "open" : ""}`}>
            <a href="about.jsx" className="menu-nav__link">
              About me
            </a>
          </li>
          <li className={`menu-nav__item ${showMenu ? "open" : ""}`}>
            <a href="/projects" className="menu-nav__link">
              My Projcts
            </a>
          </li>
          <li className={`menu-nav__item ${showMenu ? "open" : ""}`}>
            <a href="/Contact" className="menu-nav__link">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
