import {
  FETCH_MOVIE_CREDITS
} from "../actions/types";

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_CREDITS:
      return action.payload;
    default:
      return state;
  }
};