import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h4> Lorem, ipsum. </h4>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae,
                error.{" "}
              </p>{" "}
              <a href="#link"> LEARN MORE </a>{" "}
            </div>{" "}
            <div className="col-sm-6">
              <div className="col-xs-2">
                <h5> ACCOUNT </h5>{" "}
                <ul>
                  <li> My Account </li> <li> Orders </li> <li> Wish List </li>{" "}
                </ul>{" "}
                <h5> ABOUT </h5>{" "}
                <ul>
                  <li> About </li> <li> Blog </li> <li> Careers </li>{" "}
                  <li> Vendors </li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="col-xs-2">
                <h5> CUSTOMER SERVICE </h5>{" "}
                <ul>
                  <li> Help </li> <li> Contact Us </li> <li> Accessibility </li>{" "}
                </ul>{" "}
                <h5> CONTEST & EVENTS </h5>{" "}
                <ul>
                  <li> Sweepstakes </li> <li> FYE Events </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Footer;
