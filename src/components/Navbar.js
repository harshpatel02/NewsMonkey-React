import React from "react";

export default function Navbar() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        {/* <!-- Collapsible wrapper --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <a className="navbar-brand mx-3 mt-2 mt-lg-0" href="/">
            <img
              src="/img/newspaper.png"
              height="30"
              alt="NewsMonkey"
              loading="lazy"
            />
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mr-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{
                  fontSize: "20px",
                  color: "black",
                  fontWeight: "bold",
                }}
                href="/"
              >
                NewsMonkey
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1 mx-1" href="/general">
                General
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1 mx-1" href="/business">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1 mx-1" href="/entertainment">
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1 mx-1" href="/health">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1 mx-1" href="/science">
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1 mx-1" href="/sports">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-1 mx-1" href="/technology">
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-4 mt-1" href="/about">
                About
              </a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
}
