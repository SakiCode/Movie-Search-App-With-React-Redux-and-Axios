import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../actions";
import "../assets/css/details.scss";
class MovieDetails extends React.Component {
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    this.props.fetchMovieDetails(id);
  };
  render() {
    const path = this.props.movieDetails;
    return (
      <>
        {console.log(this.props)}
        <div
          className="jumbotron"
          style={{
            background: `url(${`https://image.tmdb.org/t/p/original/${
              path.backdrop_path
            }`}) center top no-repeat / cover`
          }}
        >
          <div className="overlay" />
          <div className="description container">
            <div className="description-details">
              <img
                className="side-image"
                src={`https://image.tmdb.org/t/p/w154/${path.poster_path}`}
                alt={path.original_title}
              />
              <div className="description-text">
                <span>{path.release_date}</span>
                <h1>{path.original_title}</h1>
                <p>{path.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieDetails: state.movieDetails
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails }
)(MovieDetails);
