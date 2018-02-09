/**
 * Created by sushanta on 2/6/18.
 */
import React from 'react';
import { Segment } from 'semantic-ui-react';
import CastCrewItem from '../components/CastCrewItem';

let MovieCast = ({movieCast}) => {
  return (
    <Segment raised>
      {
        movieCast.map(cast => {
          return (
            <CastCrewItem key={cast.id} person_id={cast.id}
                          image_path={cast.profile_path} name={cast.name} meta={cast.character} />
          );
        })
      }
    </Segment>
  )
};
export default MovieCast;