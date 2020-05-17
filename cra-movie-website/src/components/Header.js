import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="top-nav font">
        <div className="container">
          <div className="row">
            <div className="hidden-xs col-sm-4">
              <h2 className="nav-heading">
                MOVIES FROM EVERY DECADE, EVERY GENRE
              </h2>
            </div>
            <div className="col-sm-4">
              <h2 className="nav-heading">
                WELCOME TO MY PERSONAL MOVIE DATABASE
              </h2>
            </div>
            <div className="hidden-xs col-sm-4">
              <h2 className="nav-heading">
                CLICK BELOW TO SURF MY COLLECTION!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="name">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <a href="http://localhost:3000/">
                <img src="/media/cinepixx.png" alt="CINEPHIXX" srcset="" />
              </a>
            </div>
            <div className="col-sm-8">
              <ul>
                <li>
                  <strong>
                    <Link to="/">HOME</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to="/movie">FILMS</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to="/about">ABOUT</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to="/contact">CONTACT</Link>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
