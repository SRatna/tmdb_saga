/**
 * Created by sushanta on 2/1/18.
 */
import { OMDB_API_KEY, TMDB_API_KEY } from './config';
import { fetchData } from './helper';

export const getMovie = (movieName) => {
  const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${movieName}`;
  return fetchData(url);
};

export const loginUserApi = (username, password) => {
  if (username === 'admin' && password === 'admin') {
    return {
      token: 'kjsdfejfoijweioji2i3423423goiii90',
      username
    }
  } else {
    return {
      token: '',
      loginError: 'Incorrect username and pasword'
    }
  }
};

export const getMovieDetails = (id) => {
  const url = `https://api.themoviedb.org/3/find/${id}?api_key=${TMDB_API_KEY}&external_source=imdb_id`;
  return fetchData(url);
};

export const getMovieCompleteFacts = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=keywords`;
  return fetchData(url);
};

export const getMovieVideos = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}`;
  return fetchData(url);
};

export const getMovieCastAndCrew = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}`;
  return fetchData(url);
};

export const getPersonDetails = (id) => {
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API_KEY}&append_to_response=movie_credits`;
  return fetchData(url);
};