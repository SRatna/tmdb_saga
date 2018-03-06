import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from '../containers/PrivateRoute';
import Home from './Home';
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
          <Route exact path="/:query?" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/person/:id" component={PersonDetails} />
          <Route path="/login" component={Login} />
        </Switch>
      </ScrollToTop>

    </Router>
  );
};

export default App;
