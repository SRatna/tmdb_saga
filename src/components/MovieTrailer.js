/**
 * Created by sushanta on 2/6/18.
 */
import React from 'react';
import { Segment } from 'semantic-ui-react';
import YouTube from 'react-youtube';

let MovieTrailer = ({movieVideos}) => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0
    }
  };
  const trailer = movieVideos.find(video => video.type === 'Trailer');
  if (trailer === undefined) return <div></div>;
  return (
    <Segment raised>
      <h3>Trailer</h3>
      <hr/>
      <YouTube videoId={trailer.key} opts={opts} />
    </Segment>
  )
};
export default MovieTrailer;