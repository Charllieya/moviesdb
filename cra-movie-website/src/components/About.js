import React, { useState, useEffect } from "react";

// import Logo from "./Logo";
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
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="Blog"></div>
            <h1>{page.name}</h1>
            <h3>{page.quote}</h3>
            <h1>{page.content}</h1>
            {/* {post.map(post => <div>{post.title}</div>)} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
