/**
 * Created by sushanta on 2/6/18.
 */
import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

let MovieFacts = ({movieFacts}) => {
  const movieKeywords = movieFacts.keywords.keywords;
  let release_date = (new Date(Date.parse(movieFacts.release_date))).toLocaleDateString('en-US', {
    day : 'numeric',
    month : 'long',
    year : 'numeric'
  });
  return (
    <Segment raised>
      <h3>Facts</h3>
      <hr/>
      <span><b>Status</b></span><br/>
      <span>{movieFacts.status}</span><br/>
      <span><b>Release Date</b></span><br/>
      <span>{movieFacts.release_date ? release_date : '-'}</span><br/>
      <span><b>Runtime</b></span><br/>
      <span>{movieFacts.runtime + ' minutes'}</span><br/>
      <span><b>Budget</b></span><br/>
      <span>{movieFacts.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span><br/>
      <span><b>Revenue</b></span><br/>
      <span>{movieFacts.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span><br/>
      <span><b>Genres</b></span><br/>
      {movieFacts.genres.map((genre) => {
        return <Button size='tiny' style={{cursor: 'inherit', marginTop: '7px', padding: '5px'}} key={genre.id} basic color='black' content={genre.name.toUpperCase()} />;
      })}<br/>
      {(movieFacts.homepage !== '') &&
      <span>
        <span><b>Homepage</b></span><br/>
        <span><a target="_blank" href={movieFacts.homepage}>{movieFacts.homepage}</a></span><br/>
      </span>}
      <span><b>IMDb Page</b></span><br/>
      <span><a target="_blank" href={'http://www.imdb.com/title/' + movieFacts.imdb_id}>{'www.imdb.com/title/' + movieFacts.imdb_id}</a></span><br/>
      {movieKeywords.length > 0 && <span><span><b>Keywords</b></span><br/></span>}
      {movieKeywords.map((keyword) => {
        return <Button size='tiny' style={{cursor: 'inherit', marginTop: '7px', padding: '5px'}} key={keyword.id} basic color='black' content={keyword.name} />;
      })}<br/>
    </Segment>
  )
};
export default MovieFacts;