import movieApi from "../apis/movieapi";

export const fetchMovies = () => async dispatch => {
  const response = await movieApi.get(
    `/popular?api_key=5fb27ee2362c619dc78fe12b56540c4e`
  );
  // console.log(response.data.results);
  dispatch({
    type: "FETCH_MOVIES",
    payload: response.data.results
  });
};

export const fetchJumbotron = () => async dispatch => {
  const response = -(await movieApi.get(
    `upcoming?api_key=5fb27ee2362c619dc78fe12b56540c4e`
  ));
  console.log(response.data.results);

  dispatch({
    type: "FETCH_MOVIE_JUMBOTRON",
    payload: response.data.results
  });
};
