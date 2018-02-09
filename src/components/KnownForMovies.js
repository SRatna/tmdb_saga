/**
 * Created by sushanta on 2/9/18.
 */
import React from 'react'
import { Card, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const viewMovie = (id) => (
  <Link to={`/movie/${id}`}>
    <Icon name='film' />
    View Movie
  </Link>
);

const KnownForMovies = ({ movies }) => (
  <Segment raised>
    <h2>
      Known For
    </h2>
    <hr/>
    {
      movies.map((movie, i) => (
        <Card key={i}
          image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          header={movie.title}
          meta={(new Date(Date.parse(movie.release_date))).getFullYear()}
          description={movie.overview}
          extra={viewMovie(movie.id)}
        />
      ))
    }
  </Segment>
);

export default KnownForMovies;