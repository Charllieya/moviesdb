import React, { useState, useEffect } from "react";
// import Logo from "./Logo";
import { Link, Redirect } from "react-router-dom";

function MovieSingle(props) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    console.log(props.match);

    const { id } = props.match.params;
    fetch(`http://localhost:3075/api/movies/${id}`)
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
                  />
                </div>
                <div className="col-sm-8">
                  <h1 className="title-heading">{post.title}</h1>
                  <h3 className="movie-data">
                    <span className="movie-rating"> {post.rating} </span>
                    {post.year} {post.genre} {post.runtime}min.
                  </h3>
                  <div className="movies">
                    <p>
                      <em>"{post.tagline}"</em>
                    </p>
                    <h4>DIRECTOR</h4>
                    <p>
                      {post.fname} <span>{post.lname}</span>
                    </p>
                    <h4>DESCRIPTION</h4>
                    <p className="movie-desc">{post.description}</p>
                    <a
                      href="http://localhost:3000/movie"
                      className="backMovies">
                      BACK TO MOVIES
                    </a>
                  </div>
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
      <div className="mainBody">
        <div className="sub-heading">
          <div className=" container">
            <div className="row">
              <div className="col-sm-12">
                <ul>
                  <li>
                    <strong>
                      <Link to="/genre">GENRES</Link>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <Link to="/year">DECADES</Link>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <Link to="/director">DIRECTORS</Link>
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="singleFilm-heading">
          <div className="sub container">
            <div className="row">
              <div className="col-sm-12">
                <div className="MovieSingle"></div>
                {post}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieSingle;
