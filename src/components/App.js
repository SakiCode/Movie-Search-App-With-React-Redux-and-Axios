import React from "react";
import UpcomingMovies from "./Upcoming";

import "../assets/css/app.scss";
import Slideshow from "./Slideshow";
const App = () => {
  return (
    <>
      <Slideshow />
      <div className="container text-center">
        <div
          className="row"
          style={{
            justifyContent: "center"
          }}
        >
          <UpcomingMovies />
        </div>
      </div>
    </>
  );
};

export default App;
