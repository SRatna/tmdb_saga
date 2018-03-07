/**
 * Created by sushanta on 2/1/18.
 */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  getMovie,
  loginUserApi,
  getMovieDetails,
  getMovieCompleteFacts,
  getMovieVideos,
  getMovieCastAndCrew,
  getPersonDetails,
  getNowPlayingMovies
} from '../api';
import {
  movieFetchSuccess,
  movieFetching,
  loginUserDone,
  movieDetailsFetchSuccess,
  movieFactsFetchSuccess,
  movieVideosFetchSuccess,
  movieCastAndCrewFetchSuccess,
  personDetailsFetchSuccess,
  nowPlayingMoviesFetching,
  fetchNowPlayingMoviesDone
} from '../actions';

function* searchMovie({ name }) {
  try {
    yield put(movieFetching());
    const response = yield call(getMovie, name);
    let data = {
      error: 'Movie could not be found.',
      movies: {}
    };
    if (response === 'connection lost') {
      data = { ...data, error: 'No internet connection.', movies: {} };
    }
    if (response.results) {
      if (response.results.length > 0) {
        data = { ...data, error: null, movies: response.results };
      }
    }
    yield put(movieFetchSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

function* loginUser({ username, password }) {
  // console.log(username, password);
  try {
    const authData = yield call(loginUserApi, username, password);
    yield put(loginUserDone(authData));
  } catch (err) {
    console.log(err);
  }
}

function* fetchMovieDetails({ id }) {
  try {
    let movieDetails = {
      movie: {},
      response: false,
      error: 'Movie Not Found'
    };
    if (id.startsWith('tt')) {
      const result = yield call(getMovieDetails, id);
      if (result.movie_results.length > 0) {
        movieDetails = {
          ...movieDetails, movie: result.movie_results[0], response: true, error: ''
        };
      }
    } else {
      const result = yield call(getMovieCompleteFacts, id);
      if (result.response === undefined) {
        movieDetails = {
          ...movieDetails, movie: result, response: true, error: ''
        };
      }
    }

    yield put(movieDetailsFetchSuccess(movieDetails));
    if (movieDetails.response) {
      const movieFacts = yield call(getMovieCompleteFacts, movieDetails.movie.id);
      yield put(movieFactsFetchSuccess(movieFacts));
      const movieVideos = yield call(getMovieVideos, movieDetails.movie.id);
      yield put(movieVideosFetchSuccess(movieVideos));
      const movieCastAndCrew = yield call(getMovieCastAndCrew,movieDetails.movie.id);
      yield put(movieCastAndCrewFetchSuccess(movieCastAndCrew));
    }
  } catch (err) {
    console.log(err);
  }
}

function* fetchPersonDetails({ id }) {
  try {
    const result = yield call(getPersonDetails, id);
    let personDetails = {
      person: {}, error: null, response: true
    };
    if (result.response === false) {
      personDetails = {
        ...personDetails, response: false, error: 'The person of given ID could not be found.'
      }
    } else {
      personDetails = {
        ...personDetails, person: result
      }
    }
    yield put(personDetailsFetchSuccess(personDetails));
  } catch (err) {
    console.log(err);
  }
}

function* fetchNowPlayingMovies() {
  try {
    yield put(nowPlayingMoviesFetching());
    const response = yield call(getNowPlayingMovies);
    let data = {
      error: 'No Movies found.',
      movies: {}
    };
    if (response === 'connection lost') {
      data = { ...data, error: 'No internet connection.', movies: {} };
    }
    if (response.results) {
      if (response.results.length > 0) {
        data = { ...data, error: null, movies: response.results };
      }
    }
    yield put(fetchNowPlayingMoviesDone(data));
  } catch (err) {
    console.log(err);
  }
}


export default function* watcher() {
  yield all([
    takeLatest('SEARCH_MOVIE_REQUEST', searchMovie),
    takeLatest('USER_LOGIN', loginUser),
    takeLatest('FETCH_MOVIE_DETAILS', fetchMovieDetails),
    takeLatest('FETCH_PERSON_DETAILS', fetchPersonDetails),
    takeLatest('FETCH_NOW_PLAYING_MOVIES', fetchNowPlayingMovies)
  ]);
}
