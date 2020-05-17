import React, { useState, useEffect } from "react";

// import Logo from "./Logo";
import { Link } from "react-router-dom";

function Year() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3075/api/years")
      .then((response) => response.json())
      .then((data) => {
        let postData = data.map((post) => (
          <div className="post" key={post.decade}>
            <div className="col-sm-4">
              <h1 className="sub-links">
                <img
                  src={post.decade_pic}
                  alt="genre pictures"
                  className="img-responsive"
                />
                <Link to={`year/${post.decade}`}> {post.decade}</Link>
              </h1>
              <p>{post.body}</p>
            </div>
          </div>
        ));
        setPosts(postData);
      });
  }, []);
  return (
    <>
      <div className="mainBody">
        <div className="main border-top container">
          <div className="row">
            <div className="col-sm-12">
              <div className="Blog"></div>
              <h1 className="mainHeading">SEARCH BY DECADE</h1>
              {posts}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Year;
