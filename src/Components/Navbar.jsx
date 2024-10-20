import React from "react";

const Navbar = ({ setCategory }) => {
  const navLinkStyle = {
    cursor: 'pointer'
  };

  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <nav className="navbar navbar-expand-lg navbar-dark-blue" data-bs-theme="dark">


      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-3">NewsMania</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <div
      className="nav-link text-white cursor-pointer fs-5"
      onClick={() => setCategory("technology")}
      data-bs-theme='white'
      style={navLinkStyle}
    >
      Technology
    </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white cursor-pointer fs-5" onClick={() => setCategory("business")} style={navLinkStyle}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white cursor-pointer fs-5" onClick={() => setCategory("sports")} style={navLinkStyle}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white cursor-pointer fs-5" onClick={() => setCategory("health")} style={navLinkStyle}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link text-white cursor-pointer fs-5" onClick={() => setCategory("entertainment")} style={navLinkStyle}>
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
