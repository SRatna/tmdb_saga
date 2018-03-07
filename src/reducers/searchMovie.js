/**
 * Created by sushanta on 2/5/18.
 */
let initialState = {
  movies: {},
  response: null,
  error: null,
  fetchStatus: null,
};

const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_FETCH_SUCCESS':
      if (action.error === null) {
        return {
          ...state, response: true, error: null, movies: action.movies, fetchStatus: 'fetched'
        }
      } else {
        return {
          ...state, response: false, error: action.error, movies: {}, fetchStatus: 'fetched'
        }
      }
    case 'MOVIE_FETCHING':
      return {
        ...state, fetchStatus: 'fetching'
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