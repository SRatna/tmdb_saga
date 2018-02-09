/**
 * Created by sushanta on 2/5/18.
 */
let initialState = {
  movie: {},
  response: null,
  error: null,
  movieFetchStatus: null,
};

const searchMovie = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_FETCH_SUCCESS':
      const movie = action.movie;
      const response = movie.Response;
      if (response === 'True') {
        return {
          ...state, response: true, error: null, movie, movieFetchStatus: 'fetched'
        }
      }
      if (response === 'False') {
        return {
          ...state, response: false, error: movie.Error, movie: {}, movieFetchStatus: 'fetched'
        }
      }
      break;
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