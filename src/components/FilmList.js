import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";

import "../assets/css/filmlist.scss";

class FilmList extends React.Component {
  componentDidMount = async () => {
    this.props.fetchMovies();
  };

  render() {
    console.log(this.props.movies);

    return this.props.movies.map(movie => {
      return (
        <div
          className="card"
          style={{
            width: "10rem"
          }}
          key={movie.id}
        >
          <div className="card-img-top">
            <img
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt=""
            />
            <span>☆{movie.vote_average}</span>
          </div>
          <div className="card-title">
            <p>{movie.release_date}</p>
            <h6> {movie.title} </h6>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovies
  }
)(FilmList);
