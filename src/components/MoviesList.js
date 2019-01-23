import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UpcomingMovies from "./Upcoming";
import TopratedMovies from "./TopRated";
import MovieDetails from "./MovieDetails";

import "../assets/css/moviesList.scss";
class MoviesList extends React.Component {
  state = { topRated: true, active: true, unactive: false };

  onClickTopRated = () => {
    this.setState({ topRated: true, active: true, unactive: false });
  };

  onClickUpcoming = () => {
    this.setState({ topRated: false, active: false, unactive: false });
  };

  render() {
    let active = this.state.active ? "active" : "unactive";
    let unactive = this.state.active ? "unactive" : "active";
    return (
      <>
        <div className="container text-center">
          <button onClick={this.onClickTopRated} className={active}>
            Top Rated
          </button>
          <button onClick={this.onClickUpcoming} className={unactive}>
            Upcoming
          </button>

          <div className="movie-list mt-5">
            <BrowserRouter>
              <Switch>
                {this.state.topRated ? <TopratedMovies /> : <UpcomingMovies />}
                <Route path={"/details"} component={MovieDetails} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </>
    );
  }
}

export default MoviesList;
