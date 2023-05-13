import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className=" navbar-item-logo" title="Logo">

          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/about">
              O nás
            </Link>
          </li>

          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/adopce">
              Adopce
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/kontakt">
              Kontakt
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
            <li className="navbar-item" style={{ padding: "0px" }}>
            </li>
            <Link className="navbar-item" to="/slevy">
              Slevy
            </Link>
            <li className="navbar-item" style={{ padding: "0px" }}>
            </li>
            <li className="navbar-item" style={{ padding: "0px" }}></li>
            <Link className="navbar-item" to="/harmonogram">
              Harmonogram
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link className="navbar-link">
                Více informací
              </Link>

              <div className="navbar-dropdown">
                <Link className="navbar-item">
                  About
                </Link>
                <Link className="navbar-item">
                  Jobs
                </Link>
                <Link className="navbar-item">
                  Contact
                </Link>
                  <Link className="navbar-item">
                    Report an issue
                  </Link>
              </div>
            </div>
          </li>

          <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >End placeholder(tréninky)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
