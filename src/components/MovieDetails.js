/**
 * Created by sushanta on 2/6/18.
 */
import React from 'react';
import { Segment, Message, Rating } from 'semantic-ui-react';
import LoadingMsg from './LoadingMsg';

let MovieDetails = ({movie, error, response, movieFetchStatus}) => {
  if (movieFetchStatus === 'fetching') {
    return (
      <LoadingMsg />
    );
  }
  if (response === false) {
    return (
      <Message negative>
        <p>{error}</p>
      </Message>
    );
  }
  return (
    <Segment raised>
      <h3>
        {`${movie.title} (${movie.release_date !== '' ? (new Date(Date.parse(movie.release_date))).getFullYear() : 'In Production'})`}
      </h3>
      <Rating maxRating={5} defaultRating={Math.round((movie.vote_average)/2)} icon='star' size='large' disabled={true}/>
      <hr/>
      {movie.poster_path &&
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>}
      <h4>Overview</h4>
      <p>{movie.overview}</p>
    </Segment>
  )
};

export default MovieDetails;