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
    let {movies, error, response, movieFetchStatus} = this.props;
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
      <div style={{marginTop: '10px'}}>
        {
          movies.map(movie => (
            <Segment raised key={movie.id}>
              <h3>{movie.title}</h3>
              <hr/>
              {movie.poster_path &&
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>}
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <Link style={{color: 'white'}} to={'/movie/' + movie.id}><Button primary>View Details</Button></Link>
            </Segment>
          ))
        }
      </div>
    )
  }
}

export default Movie;