import React, { useState, useEffect } from "react";

// import Logo from "./Logo";
import { Link } from "react-router-dom";

function Genre() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/genres")
      .then((response) => response.json())
      .then((data) => {
        let postData = data.map((post) => (
          <div className="post" key={post.genre}>
            <div className="col-sm-3">
              <h1>
                <img
                  src={post.genre_pic}
                  alt="genre pictures"
                  className="img-responsive"
                />
                <Link to={`genre/${post.genre}`}> {post.genre}</Link>
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
      <div className="main border-top container">
        <div className="row">
          <div className="col-sm-12">
            <div className="Blog"></div>
            {posts}
            {/* {post.map(post => <div>{post.title}</div>)} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Genre;
