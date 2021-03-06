/**
 * Created by sushanta on 2/1/18.
 */
import { combineReducers } from 'redux';
import searchMovie from './searchMovie';
import login from './login';
import movieDetails from './movieDetails';
import personDetails from './personDetails';
import nowPlayingMovies from './nowPlayingMovies';

const appReducer = combineReducers({
  searchMovie, login, movieDetails, personDetails, nowPlayingMovies
});

export default appReducer;