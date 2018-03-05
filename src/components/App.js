import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from '../containers/PrivateRoute';
import Home from '../components/Home';
import About from '../components/About';
import Login from '../containers/Login';
import MovieDetails from '../containers/MovieDetails';
import PersonDetails from '../containers/PersonDetails';

let App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/person/:id" component={PersonDetails} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
