import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";

class FilmList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    console.log(this.props.movies);

    // return <div>hello</div>;
    return this.props.movies.map(movie => {
      return (
        <div className="pera" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
            alt=""
          />
          <h1>{movie.title}</h1>
        </div>
      );
    });
  }
}
const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(FilmList);
