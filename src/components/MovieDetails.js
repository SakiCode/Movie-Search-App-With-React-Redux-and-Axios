import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetails, fetchMovieCredits } from "../actions";
import "../assets/css/details.scss";

class MovieDetails extends React.Component {
  componentDidMount = async () => {
    const movie_id = this.props.match.params.id;
    this.props.fetchMovieDetails(movie_id);
    this.props.fetchMovieCredits(movie_id);
  };

  render() {
    const details = this.props.movieDetails;
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
                <em>" {details.tagline} "</em>
              </div>
            </div>
          </div>
        </div>
        <div className="actors container">
          <h3>{details.overview}</h3>
          <div className="row">
            {this.props.movieCredits.map(actor => {
              return (
                <div className="col" key="cast_id">
                  <img
                    className="side-image"
                    src={`https://image.tmdb.org/t/p/w154/${
                      actor.profile_path
                    }`}
                    alt={details.original_title}
                  />
                  <p>{actor.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails,
    movieCredits: state.movieCredits
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails, fetchMovieCredits }
)(MovieDetails);
