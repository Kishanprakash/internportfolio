import "./Navbar.css";
import { renderIntoDocument } from "react-dom/test-utils";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const hamburger = (value) => {
    setMobileNavbar(value);
  };

  return (
    <nav>
      <div className="topnavigation" id="myTopnav">
        <button className="ham" onClick={() => hamburger(true)}>
          &#9776;
        </button>
        <ul>
          {activeNav === "/" ? (
            ""
          ) : (
            <li>
              <Link className="home" to={"/"}>
                HOME
              </Link>
            </li>
          )}
          {activeNav === "/aboutus" ? "" : <Link to="/aboutus">ABOUTUS</Link>}
          {activeNav === "/contact" ? "" : <Link to="/contact">CONTACT</Link>}
          {activeNav === "/skills" ? "" : <Link to="/skills">SKILLS</Link>}
        </ul>
      </div>

      {mobileNavbar ? (
        <div className="sidebar">
          <span className="closebtn" onClick={() => hamburger(false)}>
            &times;
          </span>
          <li>
            <Link className="#home" onClick={() => hamburger(false)} to={"/"}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="#about"
              onClick={() => hamburger(false)}
              to={"/Aboutus"}
            >
              ABOUTUS
            </Link>
          </li>
          <li>
            <Link
              className="#contact"
              onClick={() => hamburger(false)}
              to={"/Contact"}
            >
              CONTACT
            </Link>
          </li>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
export default Navbar;
