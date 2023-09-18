import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { routes } from "../../../system/routes";

const Navbar = () => {
  let location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle between the opened and closed state of hamburger (Mobile view)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to add "active" class against the current location on browser
  const activeRoute = (currentRoute) => {
    return currentRoute.path === location.pathname ? "active" : "";
  };

  return (
    <header>
      <div className="menu-btn" onClick={() => toggleMenu()}>
        <div className={`menu-btn__burger ${showMenu ? "open" : ""}`}></div>
      </div>
      <nav className={`nav ${showMenu ? "open" : ""}`}>
        <ul className={`menu-nav ${showMenu ? "open" : ""}`}>
          {routes.map((route) => (
            <li
              className={`menu-nav__item ${activeRoute(route)} ${
                showMenu ? "open" : ""
              }`}
            >
              <Link to={route.path} className="menu-nav__link">
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
