import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Movie from "./components/Movie";
import MovieSingle from "./components/MovieSingle";
import Genre from "./components/Genre";
import GenreList from "./components/GenreList";
import Year from "./components/Year";
import YearList from "./components/YearList";
import Director from "./components/Director";
import DirectorList from "./components/DirectorList";
import Footer from "./components/Footer";

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
          <Route path="/year" component={Year} exact />
          <Route path="/year/:year" component={YearList} exact />
          <Route path="/year/:year/:id" component={MovieSingle} />
          <Route path="/director" component={Director} exact />
          <Route path="/director/:id" component={DirectorList} exact />
          <Route path="/director/:id/:id" component={MovieSingle} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
