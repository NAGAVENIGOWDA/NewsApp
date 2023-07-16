import React  from "react";
import { Link } from "react-router-dom";
import "../style.css";

export default function Navbar() {

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <img src="newspaper-307829_1280.png" alt="" width={50} />
            <Link className="mx-3 navbar-brand" to="/">
              BuzzFeed
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active mx-4"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/science">
                    Science
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

