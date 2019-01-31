import React from "react";
import { connect } from "react-redux";

import { fetchMovieTrailer } from "../actions";

class MovieTrailer extends React.Component {
  render() {
    {
      console.log(this.props);
    }
    return (
      <div className="container">
        {this.props.movieTrailer.map(trailer => {
          return (
            <iframe
              title={trailer.name}
              src={`https://www.youtube.com/embed/${trailer.key}`}
              key={trailer.key}
              frameBorder="0"
              allowFullScreen
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieTrailer: state.movieTrailer
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovieTrailer
  }
)(MovieTrailer);
