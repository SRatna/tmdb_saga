/**
 * Created by sushanta on 2/8/18.
 */
import React from 'react'
import { Tab } from 'semantic-ui-react'
import MovieCast from './MovieCast';
import MovieCrew from './MovieCrew';

const CastAndCrew = ({ movieCast, movieCrew }) => {
  const panes = [
    { menuItem: `Cast (${movieCast.length})`, render: () => <MovieCast movieCast={movieCast}/> },
    { menuItem: `Crew (${movieCrew.length})`, render: () => <MovieCrew movieCrew={movieCrew}/> }
  ];
  return (
    <Tab className="cast-crew-tab"
         menu={{ borderless: true, attached: false, tabular: false }} panes={panes} />
  );
};

export default CastAndCrew