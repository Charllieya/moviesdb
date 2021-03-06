import React, { useState, useEffect, Component } from "react";
// import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [page, setPage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3075/api/pages/home")
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
              <h1 className="mainHeading">{page.content}</h1>
            </div>
          </div>
        </div>
        <Carousel>
          <div>
            <img src="media/topmovie2.jpg" />
            <a href="http://localhost:3000/year/1995/15">
              <p className="legend">Clueless (1995)</p>
            </a>
          </div>
          <div>
            <img src="media/topmovie1.jpg" />
            <a href="http://localhost:3000/movie/25">
              <p className="legend">Ferris Bueller's Day Off (1985)</p>
            </a>
          </div>
          <div>
            <img src="media/topmovie3.jpg" />
            <a href="http://localhost:3000/year/1973/107">
              <p className="legend">Westworld (1973)</p>
            </a>
          </div>
        </Carousel>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="subHeaders">
                <span>CHOOSE YOUR DECADE</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <a href="http://localhost:3000/year/1970">
                <img
                  src="media/seven.png"
                  className="img-responsive"
                  alt="the 70s"
                />
              </a>
              <h3 className="center">
                <a href="http://localhost:3000/year/1970">
                  <strong>CRUISE THE 1970s</strong>
                </a>
              </h3>
            </div>
            <div className="col-sm-4">
              <a href="http://localhost:3000/year/1980">
                <img
                  src="media/eight.png"
                  className="img-responsive"
                  alt="the 80s"
                />
              </a>
              <h3 className="center">
                <a href="http://localhost:3000/year/1980">
                  <strong>I LOVE THE 80s</strong>
                </a>
              </h3>
            </div>
            <div className="col-sm-4">
              <a href="http://localhost:3000/year/1990">
                <img
                  src="media/nine.png"
                  className="img-responsive"
                  alt="the 90s"
                />
              </a>
              <h3 className="center">
                <a href="http://localhost:3000/year/1990">
                  <strong>ROLLING WITH THE 90s</strong>
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="subHeaders">
                <span> CHOOSE YOUR GENRE </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <a href="http://localhost:3000/genre/Horror">
                <img
                  src="media/horroCollection.png"
                  className="img-responsive"
                  alt=""
                  sizes=""
                  srcset=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="subHeaders">
                <span> HORROR FILMS</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <img src="media/rabid.png" alt="" />
              <div>
                <h2 className="homeMovies">
                  <a href="http://localhost:3000/movie/72">Rabid (1977)</a>
                </h2>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="media/evilDead.png" alt="" />
              <div>
                <h2 className="homeMovies">
                  <a href="http://localhost:3000/movie/24">
                    The Evil Dead(1981)
                  </a>
                </h2>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="media/frightNight.png" alt="" />
              <div>
                <h2 className="homeMovies">
                  <a href="http://localhost:3000/movie/31">
                    Fright Night (1985)
                  </a>
                </h2>
              </div>
            </div>
            <div className="col-sm-3">
              <img src="media/it1990.png" alt="" />
              <div>
                <h2 className="homeMovies">
                  <a href="http://localhost:3000/movie/89">
                    Stephen King's IT (1990)
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <a href="http://localhost:3000/genre/Romance">
                <img
                  src="media/romanceCollection.png"
                  className="img-responsive"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="subHeaders">
                <span> ROMANTIC FILMS</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="container section8">
          <div className="row">
            <div className="col-sm-6">
              <img src="media/lovePotion.png" class="img-responsive" alt="" />
              <div>
                <h2 className="homeMovies">
                  <a href="http://localhost:3000/movie/55">
                    Love Potion No.9 (1992)
                  </a>
                </h2>
              </div>
            </div>
            <div className="col-sm-6">
              <img src="media/valleyGirl.png" class="img-responsive" alt="" />
              <div>
                <h2 className="homeMovies">
                  <a href="http://localhost:3000/movie/100">
                    Valley Girl (1983)
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
