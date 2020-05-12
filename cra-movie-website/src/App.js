import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Movie from "./Movie";
import Genre from "./Genre";
import GenreList from "./GenreList";
import MovieSingle from "./MovieSingle";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div id="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/movie/:id" component={MovieSingle} />
          <Route path="/movie" component={Movie} />
          <Route path="/genre" component={Genre} exact />
          <Route path="/genre/:genre" component={GenreList} exact />
          <Route path="/genre/:genre/:id" component={MovieSingle} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
