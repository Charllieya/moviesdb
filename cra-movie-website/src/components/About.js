import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function About() {
  const [page, setPage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3075/api/pages/about")
      .then((response) => response.json())
      .then((page) => {
        setPage(page);
      });
  }, []);
  return (
    <>
      <div className="mainBody">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="Blog"></div>
              <h1 className="mainHeading">{page.name}</h1>
              <img
                src="media/ratings.png"
                class="img-responsive"
                alt="Romance Collection"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img
                src="media/ferrisB.png"
                class="img-responsive"
                alt="Romance Collection"
              />
            </div>
            <div className="col-sm-8">
              <h3>{page.quote}</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h3>{page.content}</h3>
            </div>
            <div className="col-sm-4">
              <img
                src="media/breakfast.png"
                class="img-responsive"
                alt="Romance Collection"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
