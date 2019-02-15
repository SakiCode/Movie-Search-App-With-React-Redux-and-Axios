import React from "react";
class MovieRow extends React.Component {
  viewMovie() {
    const movieId = this.props.movie.id;
    const url = `/details/${movieId}`;
    window.location.href = url;
  }

  render() {
    return (
      <div key={this.props.movie.id}>
        <div className="container">
          <div className="col">
            <div className="movie-poster">
              <img alt="poster" width="120" src={this.props.movie.poster_src} />
            </div>

            <div className="movie-details">
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <div>
                <button
                  className="btn btn-about"
                  type="button"
                  onClick={this.viewMovie.bind(this)}
                  value="View"
                >
                  Read More
                  <i className="fas fa-info-circle" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default MovieRow;
