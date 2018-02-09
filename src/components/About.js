/**
 * Created by sushanta on 2/2/18.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../containers/Header';
import { Container, Message, Icon } from 'semantic-ui-react';

let About = () => {
  return (
    <div>
      <Header />
      <Container text style={{ marginTop: '4em' }}>
        <Message floating>
          <p>Use this app to <Link to='/'>search</Link> for any movie but provide a valid movie name <Icon disabled name='smile' />.</p>
        </Message>
      </Container>
    </div>
  );
};

export default About;
