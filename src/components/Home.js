/**
 * Created by sushanta on 2/2/18.
 */
import React from 'react';
import SearchMovie from '../containers/SearchMovie';
import Header from '../containers/Header';
import NowPlayingMovies from '../containers/NowPlayingMovies';
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchNowPlayingMovies } from '../actions';
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchNowPlayingMovies();
  }
  render() {
    return (
      <div>
        <Header />
        <Container text style={{ marginTop: '4em' }}>
          <SearchMovie />
          <span className="now-playing-title">Now Playing Movies</span>
          <NowPlayingMovies />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchNowPlayingMovies
};

export default connect(null, mapDispatchToProps)(Home);
