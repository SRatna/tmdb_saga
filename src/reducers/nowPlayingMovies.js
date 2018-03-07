/**
 * Created by sushanta on 3/7/18.
 */
let initialState = {
  movies: {},
  error: null,
  fetchStatus: null,
};

const nowPlayingMovies = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOW_PLAYING_MOVIES_DONE':
      if (action.error === null) {
        return {
          ...state, response: true, error: null, movies: action.movies, fetchStatus: 'fetched'
        }
      } else {
        return {
          ...state, response: false, error: action.error, movies: {}, fetchStatus: 'fetched'
        }
      }
    case 'NOW_PLAYING_MOVIES_FETCHING':
      return {
        ...state, fetchStatus: 'fetching'
      };
    case 'LOGOUT_USER':
      return {
        ...state, ...initialState
      };
    default:
      return state
  }
};
export default nowPlayingMovies;