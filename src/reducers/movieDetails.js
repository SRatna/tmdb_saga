/**
 * Created by sushanta on 2/5/18.
 */
let initialState = {
  movie: {},
  response: null,
  error: null,
  movieFetchStatus: 'fetching',
  movieFacts: null,
  movieVideos: null,
  movieCast: null,
  movieCrew: null
};

const movieDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_DETAILS_FETCH_SUCCESS':
      const movie = action.movie;
      const response = movie.response;
      if (response === true) {
        return {
          ...state, response: true, error: null, movie: movie.movie, movieFetchStatus: 'fetched'
        }
      }
      if (response === false) {
        return {
          ...state, response: false, error: movie.error, movie: {}, movieFetchStatus: 'fetched'
        }
      }
      break;
    case 'MOVIE_FACTS_FETCH_SUCCESS':
      return {
        ...state, movieFacts: action.movieFacts
      };
    case 'MOVIE_VIDEOS_FETCH_SUCCESS':
      return {
        ...state, movieVideos: action.movieVideos.results
      };
      case 'MOVIE_CAST_AND_CREW_FETCH_SUCCESS':
      return {
        ...state, movieCast: action.movieCastAndCrew.cast, movieCrew: action.movieCastAndCrew.crew
      };
    case 'LOGOUT_USER':
    case 'RESET_MOVIE_DETAILS':
      return {
        ...state, ...initialState
      };
    default:
      return state
  }
};
export default movieDetails;