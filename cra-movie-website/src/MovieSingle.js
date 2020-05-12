import React, { useState, useEffect } from "react";
// import Logo from "./Logo";
import { Link, Redirect } from "react-router-dom";

function MovieSingle(props) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    console.log(props.match);

    const { id } = props.match.params;
    fetch(`http://localhost:3030/api/movies/${id}`)
      .then((response) => response.json())
      .then((post) => {
        // let prevID = id - 1;
        // console.log("Current ID: ", id);
        // console.log("Prev ID: ", prevID);
        let postData = (
          <div className="post" key={post.id}>
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    src={post.picture}
                    className="img-responsive"
                    className="moviePics"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="col-sm-8">
                  <h1>{post.title}</h1>
                  <h3>
                    {post.rating} <span>{post.year} </span>
                  </h3>
                  <h4>{post.description}</h4>
                  <a href="http://localhost:3000/movie">BACK TO MOVIES</a>
                </div>
              </div>
            </div>
          </div>
        );
        setPost(postData);
      });
  }, []); //Passing in an empty array is equvialent to component did mount!

  return (
    <>
      <div className="container_12">
        <div className="grid_12">
          <div className="MovieSingle"></div>
          {post}
        </div>
      </div>
    </>
  );
}

export default MovieSingle;
