/**
 * Created by sushanta on 3/7/18.
 */
import { connect } from 'react-redux';
import Movie from '../components/Movie';

const mapStateToProps = state => state.nowPlayingMovies;

export default connect(mapStateToProps)(Movie);