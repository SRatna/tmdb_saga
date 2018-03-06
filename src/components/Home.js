/**
 * Created by sushanta on 2/2/18.
 */
import React from 'react';
import SearchMovie from '../containers/SearchMovie';
import ShowMovie from '../containers/ShowMovie';
import Header from '../containers/Header';
import { Container } from 'semantic-ui-react'
import { searchMovieRequest } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    const { onMovieRequest, match } = this.props;
    let movieName = match.params.query;
    if (movieName) {
      onMovieRequest(movieName);
    }
  }
  componentWillReceiveProps(props) {
    const { onMovieRequest, match } = props;
    let movieName = match.params.query;
    if (movieName) {
      onMovieRequest(movieName);
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Container text style={{ marginTop: '4em' }}>
          <SearchMovie />
          <ShowMovie />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onMovieRequest: searchMovieRequest
};
export default withRouter(connect(null, mapDispatchToProps)(Home));
