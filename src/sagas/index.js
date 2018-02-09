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
  getPersonDetails
} from '../api';
import {
  movieFetchSuccess,
  movieFetching,
  loginUserDone,
  movieDetailsFetchSuccess,
  movieFactsFetchSuccess,
  movieVideosFetchSuccess,
  movieCastAndCrewFetchSuccess,
  personDetailsFetchSuccess
} from '../actions';

function* searchMovie({ name }) {
  try {
    yield put(movieFetching());
    const movie = yield call(getMovie, name);
    yield put(movieFetchSuccess(movie));
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

export default function* watcher() {
  yield all([
    takeLatest('SEARCH_MOVIE_REQUEST', searchMovie),
    takeLatest('USER_LOGIN', loginUser),
    takeLatest('FETCH_MOVIE_DETAILS', fetchMovieDetails),
    takeLatest('FETCH_PERSON_DETAILS', fetchPersonDetails)
  ]);
}
