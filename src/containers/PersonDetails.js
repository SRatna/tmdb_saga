/**
 * Created by sushanta on 2/8/18.
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import PersonDetailsComponent from '../components/PersonDetails';
import KnownForMovies from '../components/KnownForMovies';
import Filmography from '../components/Filmography';

import { fetchPersonDetails, resetPersonDetails } from '../actions';

class PersonDetails extends Component {
  componentWillMount() {
    this.props.dispatch(resetPersonDetails());
  }

  componentDidMount() {
    this.props.dispatch(fetchPersonDetails(this.props.match.params.id));
  }

  static sortByDate(a, b) {
    return ((new Date(Date.parse(b.release_date))).getFullYear() - (new Date(Date.parse(a.release_date))).getFullYear());
  }

  render() {
    let {
      person,
      error,
      response,
      personFetchStatus,
    } = this.props;
    let firstEightMovies = null;
    let movieCast = [];
    let movieCrew = [];
    if (personFetchStatus === 'fetched') {
      movieCast = person.movie_credits.cast;
      movieCrew = person.movie_credits.crew;
      let movies = movieCast > movieCrew ? movieCast : movieCrew;
      if (movies) {
        movies.sort((a, b) => (b.vote_count - a.vote_count));
        movies = movies.filter((movie, index) => movies.map(mapMovie => mapMovie['id']).indexOf(movie['id']) === index);
        firstEightMovies = movies.slice(0, 8);
      }
    }
    return (
      <div>
        <Header />
        <Container text style={{ marginTop: '4em' }}>
          <PersonDetailsComponent person={person} error={error} response={response} personFetchStatus={personFetchStatus}/>
          {firstEightMovies &&
          <KnownForMovies movies={firstEightMovies} />}
          {(movieCast.length > 0 || movieCrew.length > 0) &&
          <Filmography
            movieCast={movieCast.sort(PersonDetails.sortByDate)}
            movieCrew={movieCrew.sort(PersonDetails.sortByDate)} />}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.personDetails;
export default withRouter(connect(mapStateToProps)(PersonDetails));