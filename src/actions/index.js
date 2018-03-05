/**
 * Created by sushanta on 2/1/18.
 */
export const searchMovieRequest = (name) => ({
  type: 'SEARCH_MOVIE_REQUEST',
  name
});

export const movieFetchSuccess = ({ error, movies }) => ({
  type: 'MOVIE_FETCH_SUCCESS',
  error, movies
});

export const movieFetching = () => ({
  type: 'MOVIE_FETCHING'
});

export const loginUser = (username, password) => ({
  type: 'USER_LOGIN', username, password
});

export const loginUserDone = (authData) => ({
  type: 'LOGIN_USER_DONE', ...authData
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});

export const fetchMovieDetails = (id) => ({
  type: 'FETCH_MOVIE_DETAILS',
  id
});

export const movieDetailsFetchSuccess = (movie) => ({
  type: 'MOVIE_DETAILS_FETCH_SUCCESS',
  movie
});

export const movieFactsFetchSuccess = (movieFacts) => ({
  type: 'MOVIE_FACTS_FETCH_SUCCESS',
  movieFacts
});

export const movieVideosFetchSuccess = (movieVideos) => ({
  type: 'MOVIE_VIDEOS_FETCH_SUCCESS',
  movieVideos
});

export const movieCastAndCrewFetchSuccess = (movieCastAndCrew) => ({
  type: 'MOVIE_CAST_AND_CREW_FETCH_SUCCESS',
  movieCastAndCrew
});

export const resetMovieDetails = () => ({
  type: 'RESET_MOVIE_DETAILS'
});

export const resetSearchedMovie = () => ({
  type: 'RESET_SEARCHED_MOVIE'
});

export const fetchPersonDetails = (id) => ({
  type: 'FETCH_PERSON_DETAILS',
  id
});

export const personDetailsFetchSuccess = (person) => ({
  type: 'PERSON_DETAILS_FETCH_SUCCESS',
  person
});

export const resetPersonDetails = () => ({
  type: 'RESET_PERSON_DETAILS'
});