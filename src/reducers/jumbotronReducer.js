export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_MOVIE_JUMBOTRON":
            return action.payload;
        default:
            return state;
    }
};