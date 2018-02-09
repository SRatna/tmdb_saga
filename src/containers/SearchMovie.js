/**
 * Created by sushanta on 2/1/18.
 */
import React from 'react';
import { searchMovieRequest } from '../actions';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react'

let SearchMovie = ({ onMovieRequest, movieFetchStatus }) => {
  let searchMovie = (e) => {
    if (e.key === 'Enter') {
      let movieName = e.target.value;
      if (movieName === '') return;
      e.target.value = '';
      onMovieRequest(movieName);
    }
  };
  return (
    <div>
      <Input loading={movieFetchStatus === 'fetching'} fluid icon='search' placeholder='Search a movie...' onKeyPress={searchMovie} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    movieFetchStatus: state.searchMovie.movieFetchStatus
  }
};
const mapDispatchToProps = {
  onMovieRequest: searchMovieRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
