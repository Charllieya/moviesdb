import React, { useState, useEffect } from "react";

// import Logo from "./Logo";
import { Link } from "react-router-dom";

function DirectorList(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const { id } = props.match.params;
    fetch(`http://localhost:3075/api/directors/${id}`)
      .then((response) => response.json())
      .then((data) => {
        let postData = data.map((post) => (
          <div className="post" key={post.id}>
            <div className="col-sm-12">
              <h1 className="movie_genre">
                <Link to={`${post.director_id}/${post.id}`}> {post.title}</Link>
              </h1>
            </div>
          </div>
        ));
        setPosts(postData);
      });
  }, []);
  return (
    <>
      <div className="mainBody">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="Blog"></div>
              {posts}
              {/* {post.map(post => <div>{post.title}</div>)} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DirectorList;
