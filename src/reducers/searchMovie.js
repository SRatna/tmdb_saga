/**
 * Created by sushanta on 2/5/18.
 */
let initialState = {
  movies: {},
  response: null,
  error: null,
  movieFetchStatus: null,
};

const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_FETCH_SUCCESS':
      if (action.error === null) {
        return {
          ...state, response: true, error: null, movies: action.movies, movieFetchStatus: 'fetched'
        }
      } else {
        return {
          ...state, response: false, error: action.error, movies: {}, movieFetchStatus: 'fetched'
        }
      }
    case 'MOVIE_FETCHING':
      return {
        ...state, movieFetchStatus: 'fetching'
      };
    case 'RESET_SEARCHED_MOVIE':
    case 'LOGOUT_USER':
      return {
        ...state, ...initialState
      };
    default:
      return state
  }
};
export default searchMovie;