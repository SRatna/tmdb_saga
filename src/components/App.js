import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from '../containers/PrivateRoute';
import Home from './Home';
import SearchResult from './SearchResult';
import About from './About';
import ScrollToTop from './ScrollToTop';
import Login from '../containers/Login';
import MovieDetails from '../containers/MovieDetails';
import PersonDetails from '../containers/PersonDetails';

let App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/person/:id" component={PersonDetails} />
          <Route path="/login" component={Login} />
          <Route exact path="/:query" component={SearchResult} />
        </Switch>
      </ScrollToTop>

    </Router>
  );
};

export default App;
