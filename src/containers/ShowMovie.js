/**
 * Created by sushanta on 2/1/18.
 */
import { connect } from 'react-redux';
import Movie from '../components/Movies';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => state.searchMovie;

export default withRouter(connect(mapStateToProps)(Movie));