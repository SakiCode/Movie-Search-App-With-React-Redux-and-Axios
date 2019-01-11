import movieApi from '../apis/movieapi';

export const fetchMovies = () => async dispatch => {
    const response = await movieApi.get('')
    // console.log(response.data.results);
    dispatch({
        type: 'FETCH_MOVIES',
        payload: response.data.results
    })
}

export const fetchJumbotron = () => async dispatch => {
    const response = -await movieApi.get('')
    console.log(response.data.results);

    dispatch({
        type: 'FETCH_MOVIE_JUMBOTRON',
        payload: response.data.results
    })
}