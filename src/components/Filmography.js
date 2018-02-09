/**
 * Created by sushanta on 2/9/18.
 */
import React from 'react'
import { Segment } from 'semantic-ui-react'
import FilmographyItem from './FilmographyItem';

const Filmography = ({ movieCast, movieCrew }) => {
  let departments = [...new Set(movieCrew.map(crew => crew.department))].sort();
  return (
    <Segment raised>
      <h2>
        Filmography
      </h2>
      <hr/>
      {movieCast.length > 0 &&
      <div>
        <h3>Acting</h3>
        {
          movieCast.map(movie => (
            <FilmographyItem key={movie.id} id={movie.id} name={movie.title} meta={movie.character} date={movie.release_date} />
          ))
        }
      </div>}
      {
        departments.map((department, i) => {
          return (
            <div key={i}>
              <h3 style={{marginTop: 10}}>{department.toUpperCase()}</h3>
              {
                movieCrew.map(movie => {
                  if (movie.department === department) {
                    return (
                      <FilmographyItem key={movie.id} id={movie.id} name={movie.title} meta={movie.job} date={movie.release_date} />
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
  );
};

export default Filmography;