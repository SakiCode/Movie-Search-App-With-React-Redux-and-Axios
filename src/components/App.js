import React from "react";
import FilmList from "../components/FilmList";
import Jumbotron from "../components/Jumbotron";

import "../assets/css/app.scss";
const App = () => {
  return (
    <>
      <Jumbotron />
      <div className="movies-container">
        <FilmList />
      </div>{" "}
    </>
  );
};

export default App;
