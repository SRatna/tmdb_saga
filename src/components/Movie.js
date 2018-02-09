/**
 * Created by sushanta on 2/1/18.
 */
import React from 'react';
import { Segment, Message, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoadingMsg from './LoadingMsg';

class Movie extends React.Component {
  componentWillMount() {
    this.props.onPageLoadResetSearchedMovie();
  }

  render() {
    let {movie, error, response, movieFetchStatus} = this.props;
    if (movieFetchStatus === 'fetching') return (
      <LoadingMsg />
    );
    if (response === null) return <div></div>;
    if (response === false) return (
      <Message negative>
        <p>{error}</p>
      </Message>
    );
    return (
      <Segment raised>
        <h3>{movie.Title}</h3>
        <hr/>
        <img src={movie.Poster} alt={movie.Title}/>
        <p>{movie.Plot}</p>
        <Link style={{color: 'white'}} to={'/movie/' + movie.imdbID}><Button primary>View Details</Button></Link>
      </Segment>
    )
  }
}

export default Movie;