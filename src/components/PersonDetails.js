/**
 * Created by sushanta on 2/8/18.
 */
import React from 'react';
import { Segment, Message } from 'semantic-ui-react';
import LoadingMsg from './LoadingMsg';

let PersonDetails = ({person, error, response, personFetchStatus}) => {
  if (personFetchStatus === 'fetching') {
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
      <h2>
        {person.name}
      </h2>
      <hr/>
      {person.profile_path &&
      <img src={`https://image.tmdb.org/t/p/w300${person.profile_path}`} alt={person.name}/>}
      <h3>Biography</h3>
      <p>{person.biography || 'We have no biography for this person.'}</p>
      <h3>Personal Info</h3>
      <span><b>Birthday</b></span><br/>
      <span>{person.birthday || '-'}</span><br/>
      <span><b>Birth Place</b></span><br/>
      <span>{person.place_of_birth || '-'}</span><br/>
      {person.deathday &&
      <span>
        <span><b>Deathday</b></span><br/>
        <span>{person.deathday}</span><br/>
      </span>}
      {person.gender > 0 &&
        <span>
          <span><b>Gender</b></span><br/>
          <span>{person.gender === 1 ? 'Female' : 'Male'}</span><br/>
        </span>}
      {person.also_known_as.length > 0 &&
        <span>
          <span><b>Also Known As</b></span><br/>
          {
            person.also_known_as.map((aka, i) => {
              return <p style={{marginBottom: 0}} key={i}>{aka}</p>;
            })
          }
        </span>}
      {person.homepage &&
      <span>
        <span><b>Homepage</b></span><br/>
        <span><a target="_blank" href={person.homepage}>{person.homepage}</a></span><br/>
      </span>}
      <span><b>IMDb Page</b></span><br/>
      <span><a target="_blank" href={'http://www.imdb.com/name/' + person.imdb_id}>{'www.imdb.com/name/' + person.imdb_id}</a></span><br/>

    </Segment>
  )
};

export default PersonDetails;