import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="top-nav font">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h2>ENABLE ACCESSIBILITY</h2>
            </div>
            <div className="col-sm-4">
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
            </div>
            <div className="col-sm-4">
              <h2>Lorem, ipsum.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="name">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
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
                    <Link to="/genre">GENRE</Link>
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
            {/* <div className="col-sm-4">
              <form action="#Link">
                <input type="search" name="search" value="Search Here" />
                <input type="submit" name="submit" value="Submit" />
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
