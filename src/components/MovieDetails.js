import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetails } from "../actions";

class MovieDetails extends React.Component {
  componentDidMount = async () => {
    this.props.fetchMovieDetails();
  };
  render() {
    return (
      <div>
        <h1>{this.props.movieDetais.original_title}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieDetais: state.movieDetais
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieDetails }
)(MovieDetails);
