import React from "react";
import { connect } from "react-redux";
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieActors
} from "../actions";
import "../assets/css/details.scss";

class MovieDetails extends React.Component {
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const person_id = this.props.match.params.person_id;
    this.props.fetchMovieDetails(id);
    this.props.fetchMovieCredits(id);
    this.props.fetchMovieActors(person_id);
  };
  render() {
    const details = this.props.movieDetails;
    const actors = this.props.movieCredits;
    return (
      <>
        {console.log(this.props)}
        <div
          className="jumbotron"
          style={{
            background: `url(${`https://image.tmdb.org/t/p/original/${
              details.backdrop_path
            }`}) center top no-repeat / cover`
          }}
        >
          <div className="overlay" />
          <div className="movie-description container">
            <div className="description-details">
              <img
                className="side-image"
                src={`https://image.tmdb.org/t/p/w154/${details.poster_path}`}
                alt={details.original_title}
              />
              <div className="movie-description-text">
                <span>{details.release_date}</span>
                <h1>{details.original_title}</h1>
                <em>" {details.overview} "</em>
              </div>
            </div>
          </div>
        </div>
        <div className="actors container">test</div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails,
    movieCredits: state.movieCredits,
    movieActors: state.movieActors
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchMovieCredits, fetchMovieActors }
)(MovieDetails);
