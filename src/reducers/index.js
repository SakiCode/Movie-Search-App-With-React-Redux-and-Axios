import {
  combineReducers
} from "redux";
import upcomingMoviesReducer from "./upcomingMoviesReducer";
import popularMoviesReducer from "./popularMoviesReducer";
import topRatedMoviesReducer from "./topRatedMoviesReducer";
import movieDetails from './movieDetails';

export default combineReducers({
  slideshow: popularMoviesReducer,
  upcoming: upcomingMoviesReducer,
  toprated: topRatedMoviesReducer,
  movieDetails: movieDetails
});