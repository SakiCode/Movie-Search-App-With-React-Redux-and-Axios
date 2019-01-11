import {
  combineReducers
} from "redux";
import movieReducer from "./moviesReducer";
import jumbotronReducer from "./jumbotronReducer"


export default combineReducers({
  movies: movieReducer,
  jumbotron: jumbotronReducer
});