import {
  combineReducers
} from "redux";
import upcomingMoviesReducer from "./upcomingMoviesReducer";
import popularMoviesReducer from "./popularMoviesReducer"


export default combineReducers({
  slideshow: popularMoviesReducer,
  upcoming: upcomingMoviesReducer
});