/**
 * Created by sushanta on 2/9/18.
 */
import React from 'react'
import { Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const FilmographyItem = ({ id, name, meta, date }) => {
  return (
    <Message>
      <Message.Header>
        <Link to={`/movie/${id}`}>{`${name} (${date !== undefined ? (new Date(Date.parse(date))).getFullYear() : 'In Production'})`}</Link>
      </Message.Header>
      <p>
        {meta}
      </p>
    </Message>
  );
};

export default FilmographyItem;