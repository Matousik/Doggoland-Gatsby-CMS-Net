import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/Logo_black_left_aligned.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand"  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
>
          <Link to="/" className=" navbar-logo-item" title="Logo">
            <img src={logo} alt="Doggoland Logo" style={{ width: 'clamp(220px, 8vw, 300px)', height: 'auto' }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <ul id="navMenu" className={`navbar-start navbar-menu ${isActive && "is-active"}`}>
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}

          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/adopce">
              Adopce
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/blog">
              Články
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/jakpomoci">
              Jak pomoci
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/kontakt">
              Kontakt
            </Link>
          </li>
          <span id="button-in-navbar-instead-of-a" className="navbar-item has-dropdown is-hoverable" style={{ padding: "0px" }} href="#">
            <Link className="navbar-link">
              Více informací
            </Link>
            <div className="navbar-dropdown is-boxed">
              <Link className="navbar-item" to="/jaktounaschodi">
                Jak to u nás chodí?
              </Link>
              <Link className="navbar-item" to="/harmonogram">
                Harmonogram
              </Link>
              <Link className="navbar-item" to="/slevy">
                Slevové kódy
              </Link>
            </div>
          </span>

          <li className="navbar-end has-text-centered">
            <div className="navbar-item">
              <a
                className="custom-button last-menu-element"
                href="https://trenujemesdajou.doggoland.cz/"
                target="_blank"
                rel="noopener noreferrer"
              >Trénujeme s Dájou
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
