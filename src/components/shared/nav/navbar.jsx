import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="menu_btn">
        <div className="menu_btn__brger"></div>
      </div>
      <nav className="nav">
        <ul className="menu-na">
          <li className="menu-nav__item active">
            <a href="/home" className="menu-nav__link">
              Home
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="/about" className="menu-nav__link">
              About me
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="/projects" className="menu-nav__link">
              My Projcts
            </a>
          </li>
          <li className="menu-nav__item">
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
