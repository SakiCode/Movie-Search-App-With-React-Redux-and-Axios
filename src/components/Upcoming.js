import React from "react";
import { connect } from "react-redux";
import { fetchUpcomingMovies } from "../actions";

import "../assets/css/moviesList.scss";

class UpcomingMovies extends React.Component {
  componentDidMount = async () => {
    this.props.fetchUpcomingMovies();
  };

  render() {
    return (
      <div className="container text-center">
        <h2> UPCOMING </h2>
        <div
          className="row"
          style={{
            justifyContent: "center"
          }}
        >
          {this.props.upcoming.map(movie => {
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
                  <span> ☆{movie.vote_average} </span>
                </div>
                <div className="card-title">
                  <p> {movie.release_date}</p> <h6>{movie.title}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="cards-separator" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    upcoming: state.upcoming
  };
};

export default connect(
  mapStateToProps,
  {
    fetchUpcomingMovies
  }
)(UpcomingMovies);
