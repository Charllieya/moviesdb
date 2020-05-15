import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Movie() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3075/api/movies")
      .then((response) => response.json())
      .then((data) => {
        let postData = data.map((post) => (
          <div className="post" key={post.id}>
            <div className="col-sm-3">
              <Link to={`movie/${post.id}`}> {post.title}</Link>
              {/* <p>{post.body}</p> */}
            </div>
          </div>
        ));
        setPosts(postData);
      });
  }, []);
  return (
    <>
      <div className="sub-heading">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul>
                <li>
                  <strong>
                    <Link to="/genre">FILMS BY GENRE</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to="/year">FILMS BY DECADE</Link>
                  </strong>
                </li>
                <li>
                  <strong>
                    <Link to="/genre">FILMS BY DIRECTORS</Link>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main border-top container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="guideHeading">Full Film Collection</h3>
          </div>{" "}
          {posts}{" "}
        </div>{" "}
      </div>
      {/* <div className="container_12">
        <div className="grid_12"> */}
      {/* <div className="Blog"></div>
      <div className="col-sm-3">{posts}</div> */}
      {/* {posts} */}
      {/* {post.map(post => <div>{post.title}</div>)} */}
      {/* </div>
      </div> */}
    </>
  );
}

export default Movie;
