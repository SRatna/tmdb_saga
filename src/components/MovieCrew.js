/**
 * Created by sushanta on 2/6/18.
 */
import React from 'react';
import { Segment } from 'semantic-ui-react';
import CastCrewItem from '../components/CastCrewItem';

let MovieCrew = ({movieCrew}) => {
  let departments = [...new Set(movieCrew.map(crew => crew.department))].sort();
  return (
    <Segment raised>
      {
        departments.map((department, i) => {
          return (
            <div key={i}>
              <h4 style={{marginTop: 10}}>{department.toUpperCase()}</h4>
              {
                movieCrew.map(crew => {
                  if (crew.department === department) {
                    return (
                      <CastCrewItem key={crew.credit_id} person_id={crew.id}
                                    image_path={crew.profile_path} name={crew.name} meta={crew.job} />
                    );
                  }
                  return null;
                })
              }
            </div>
          )
        })
      }
    </Segment>
  )
};
export default MovieCrew;