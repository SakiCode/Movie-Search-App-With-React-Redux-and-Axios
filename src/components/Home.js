import React from "react";
import Slideshow from "./Slideshow";
import MoviesList from "./MoviesList";
import MovieSearch from "./MovieSearch";
const Home = () => {
  return (
    <>
      <MovieSearch />
      <Slideshow />
      <MoviesList />
    </>
  );
};

export default Home;
