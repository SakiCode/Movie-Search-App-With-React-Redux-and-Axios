import movieApi from "../apis/movieapi";
import {
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_MOVIE_DETAILS
} from './types'

export const fetchPopularMovies = () => async dispatch => {
  const response = await movieApi.get(
    `/popular?api_key=5fb27ee2362c619dc78fe12b56540c4e`
  );
  dispatch({
    type: FETCH_POPULAR_MOVIES,
    payload: response.data.results
  });
};

export const fetchUpcomingMovies = () => async dispatch => {
  const response = await movieApi.get(
    `/upcoming?api_key=5fb27ee2362c619dc78fe12b56540c4e`
  );
  dispatch({
    type: FETCH_UPCOMING_MOVIES,
    payload: response.data.results
  });
};


export const fetchTopRatedMovies = () => async dispatch => {
  const response = await movieApi.get('/top_rated?api_key=5fb27ee2362c619dc78fe12b56540c4e')
  dispatch({
    type: FETCH_TOP_RATED_MOVIES,
    payload: response.data.results
  });
};

export const fetchMovieDetails = (movie_id) => async dispatch => {
  const response = await movieApi.get(`/${movie_id}?api_key=5fb27ee2362c619dc78fe12b56540c4e`)
  dispatch({
    type: FETCH_MOVIE_DETAILS,
    payload: response.data
  })
}