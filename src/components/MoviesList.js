import React from "react";

import UpcomingMovies from "./Upcoming";
import TopratedMovies from "./TopRated";
class MoviesList extends React.Component {
  render() {
    return (
      <>
        <div className="container text-center">
          <h1> UPCOMING </h1>
          <div
            className="row"
            style={{
              justifyContent: "center"
            }}
          >
            <UpcomingMovies />
          </div>
        </div>
        <div className="container text-center">
          <h1>TOP RATED</h1>
          <div
            className="row"
            style={{
              justifyContent: "center"
            }}
          >
            <TopratedMovies />
          </div>
        </div>
      </>
    );
  }
}

export default MoviesList;
