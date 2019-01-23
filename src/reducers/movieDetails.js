import { FETCH_MOVIE_DETAILS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
