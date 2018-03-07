/**
 * Created by sushanta on 2/2/18.
 */
import React from 'react';
import SearchMovie from '../containers/SearchMovie';
import Header from '../containers/Header';
import { Container } from 'semantic-ui-react'

let Home = () => {
  return (
    <div>
      <Header />
      <Container text style={{ marginTop: '4em' }}>
        <SearchMovie />
      </Container>
    </div>
  );
};

export default Home;
