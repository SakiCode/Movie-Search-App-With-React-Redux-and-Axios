import React from "react";

import UpcomingMovies from "./Upcoming";
import TopratedMovies from "./TopRated";

class MoviesList extends React.Component {
  state = { topRated: true };

  onClickTopRated = () => {
    this.setState({ topRated: true });
  };
  onClickUpcoming = () => {
    this.setState({ topRated: false });
  };

  render() {
    return (
      <>
        <button onClick={this.onClickUpcoming} className="btn btn-default">
          Upcoming
        </button>
        <button onClick={this.onClickTopRated} className="btn btn-default">
          Toprated
        </button>
        {this.state.topRated ? <TopratedMovies /> : <UpcomingMovies />}
      </>
    );
  }
}

export default MoviesList;
