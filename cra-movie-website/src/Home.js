import React, { useState, useEffect } from "react";

function Home() {
  const [page, setPage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/api/pages/home")
      .then((response) => response.json())
      .then((page) => {
        setPage(page);
      });
  }, []);
  return (
    <>
      <div className="main">
        {/* <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>{page.quote}</h1>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <a href="#link">
                <img
                  src="media/classicCollection.png"
                  className="img-responsive"
                  alt=""
                  sizes=""
                  srcset=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <a href="#link">
              <img
                src="media/seven.png"
                className="img-responsive"
                alt=""
                sizes=""
                srcset=""
              />
            </a>
            <h3 className="center">
              <strong>CRUISE THE 1970S</strong>
            </h3>
          </div>
          <div className="col-sm-4">
            <a href="#link">
              <img
                src="media/eight.png"
                className="img-responsive"
                alt=""
                sizes=""
                srcset=""
              />
            </a>
            <h3 className="center">
              <strong>I LOVE THE 80s</strong>
            </h3>
          </div>
          <div className="col-sm-4">
            <a href="#link">
              <img
                src="media/nine.png"
                className="img-responsive"
                alt=""
                sizes=""
                srcset=""
              />
            </a>
            <h3 className="center">
              <strong>ROLLING WITH THE 90s</strong>
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>FUNKO!</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <a href="#link">Complete Your Collection</a>
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
            <h3>HORROR FILMS</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <img src="media/rabid.png" alt="" sizes="" srcset="" />
            <div>
              <a href="http://localhost:3000/movie/72">Rabid (1977)</a>
            </div>
          </div>
          <div className="col-sm-3">
            <img src="media/evilDead.png" alt="" sizes="" srcset="" />
            <div>
              <a href="http://localhost:3000/movie/24"> The Evil Dead(1981)</a>
            </div>
          </div>
          <div className="col-sm-3">
            <img src="media/frightNight.png" alt="" sizes="" srcset="" />
            <div>
              <a href="http://localhost:3000/movie/31">Fright Night (1985)</a>
            </div>
          </div>
          <div className="col-sm-3">
            <img src="media/it1990.png" alt="" sizes="" srcset="" />
            <div>
              <a href="http://localhost:3000/movie/89">
                Stephen King's IT (1990)
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <a href="http://localhost:3000/genre/Horror">
              SEE THE HORROR COLLECTION
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img
              src="media/romanceCollection.png"
              class="img-responsive"
              alt=""
              sizes=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div className="container section8">
        <div className="row">
          <div className="col-sm-6">
            <img src="media/lovePotion.png" class="img-responsive" alt="" />
          </div>
          <div className="col-sm-6">
            <img src="media/valleyGirl.png" class="img-responsive" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
