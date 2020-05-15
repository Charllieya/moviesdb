import React, { useState, useEffect } from "react";

// import Logo from "./Logo";
import { Link } from "react-router-dom";

function YearList(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const { year } = props.match.params;
    fetch(`http://localhost:3075/api/years/${year}`)
      .then((response) => response.json())
      .then((data) => {
        let postData = data.map((post) => (
          <div className="post" key={post.id}>
            <h1>
              {/* <Link to={`genre/${post.id}`}> {post.genre}</Link> */}
              <Link to={`${post.year}/${post.id}`}> {post.title}</Link>
            </h1>
            {/* <p>{post.body}</p> */}
          </div>
        ));
        setPosts(postData);
      });
  }, []);
  return (
    <>
      <div className="container_12">
        <div className="grid_12">
          <div className="Blog"></div>
          {posts}
          {/* {post.map(post => <div>{post.title}</div>)} */}
        </div>
      </div>
    </>
  );
}

export default YearList;
