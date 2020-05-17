import React from "react";

function Footer() {
  return (
    <>
      <div className="footer name-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h4>
                <a href="http://localhost:3000/">
                  <img src="/media/cinepixx.png" alt="CINEPHIXX" srcset="" />
                </a>
              </h4>
              <p>"WHERE ALL FILMS ARE PERMITTED"</p>
              <a href="https://www.linkedin.com/in/charllieya-smith-6aba51102/">
                LEARN MORE
              </a>
            </div>
            <div className="col-sm-6">
              <div className="row"></div>
              <h4> ABOUT </h4>
              <a href="http://localhost:3000/about">About</a>
              <h4>SERVICES </h4>
              <a href="http://localhost:3000/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
