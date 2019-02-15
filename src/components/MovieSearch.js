import React from "react";
import { connect } from "react-redux";
import "../assets/css/search.scss";
import { fetchMovieSearch } from "../actions";
import MovieRow from "./MovieSearchRow";

class movieSearch extends React.Component {
  state = { movie_title: "" };

  searchChangeHandler(event) {
    const movie_title = event.target.value;
    this.props.fetchMovieSearch(movie_title);
    var movieRows = [];

    this.props.movieSearch.map(movie => {
      movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
      const movieRow = <MovieRow key={movie.id} movie={movie} />;
      movieRows.push(movieRow);
    });
    if (movie_title !== "") {
      this.setState({ rows: movieRows });
    } else {
      this.setState({ rows: "" });
    }
  }
  render() {
    return (
      <div className="search">
        <input
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Search for movie"
        />
        <div className="search-results">{this.state.rows}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieSearch: state.movieSearch
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovieSearch
  }
)(movieSearch);
