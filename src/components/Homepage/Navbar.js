import React from "react";
import "./styles.css";
function Navbar() {
  return (
    <div className="navbar navbar-expand-md navbar-sticky-top bg-faded navbar-center">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse navbar-collapse" id="navbarResponsive">
          <a className="navbar-brand" href="#">
            PriceMatch
          </a>
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-info">Try It Out!</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
