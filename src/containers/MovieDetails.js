/**
 * Created by sushanta on 2/5/18.
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchMovieDetails, resetMovieDetails } from '../actions';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import MovieDetailsComponent from '../components/MovieDetails';
import MovieFacts from '../components/MovieFacts';
import MovieTrailer from '../components/MovieTrailer';
import CastAndCrew from '../components/CastAndCrew';

class MovieDetails extends Component {
  componentWillMount() {
    this.props.dispatch(resetMovieDetails());
  }

  componentDidMount() {
    this.props.dispatch(fetchMovieDetails(this.props.match.params.id));
  }

  render() {
    let {
      movie,
      error,
      response,
      movieFetchStatus,
      movieFacts,
      movieVideos,
      movieCast,
      movieCrew
    } = this.props;
    return (
      <div>
        <Header />
        <Container text style={{ marginTop: '4em' }}>
          <MovieDetailsComponent movie={movie} error={error} response={response} movieFetchStatus={movieFetchStatus}/>
          {movieFacts &&
          <MovieFacts movieFacts={movieFacts}/>}
          {movieVideos &&
          <MovieTrailer movieVideos={movieVideos}/>}
          {movieCast && movieCrew &&
          <CastAndCrew movieCast={movieCast} movieCrew={movieCrew}/>}
        </Container>
      </div>
    )
  }
}
const mapStateToProps = (state) => state.movieDetails;
export default withRouter(connect(mapStateToProps)(MovieDetails));