/**
 * Created by sushanta on 2/8/18.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './CastCrewItem.css';

let CastCrewItem = ({person_id, image_path, name, meta}) => {
  return (
    <Link to={'/person/' + person_id}>
      <div className="cast-crew-container">
        <div className={image_path === null
          ? 'cast-crew-no-image cast-crew-image-holder'
          : 'cast-crew-image-holder'}>
          {image_path &&
          <img src={"https://image.tmdb.org/t/p/w66_and_h66_face" + image_path} alt={name}/>}
        </div>
        <div className="cast-crew-content-area">
          <p>
            <span className="cast-crew-content-header"><b>{name}</b></span><br/>
            <span>{meta}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CastCrewItem;