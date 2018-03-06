/**
 * Created by sushanta on 2/1/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

let SearchMovie = ({ movieFetchStatus, history }) => {
  let searchMovie = (e) => {
    if (e.key === 'Enter') {
      let movieName = e.target.value;
      if (movieName === '') return;
      e.target.value = '';
      e.target.blur();
      history.push(`/${movieName}`);
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
export default withRouter(connect(mapStateToProps)(SearchMovie));
