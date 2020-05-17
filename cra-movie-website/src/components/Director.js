import React, { useState, useEffect } from "react";

// import Logo from "./Logo";
import { Link } from "react-router-dom";

function Director() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3075/api/directors")
      .then((response) => response.json())
      .then((data) => {
        let postData = data.map((post) => (
          <div className="post" key={post.id}>
            <div className="col-sm-3">
              <h3>
                <Link to={`director/${post.id}`}>
                  {post.fname} {post.lname}
                </Link>
              </h3>
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
            <h1>SEARCH BY DIRECTOR</h1>
            {posts}
            {/* {post.map(post => <div>{post.title}</div>)} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Director;
