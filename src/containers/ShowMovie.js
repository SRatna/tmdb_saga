/**
 * Created by sushanta on 2/1/18.
 */
import { connect } from 'react-redux';
import Movie from '../components/Movie';
import { withRouter } from 'react-router-dom';
import { resetSearchedMovie } from '../actions';
const mapStateToProps = state => state.searchMovie;
const mapDispatchToProps = {
  onPageLoadResetSearchedMovie: resetSearchedMovie
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));