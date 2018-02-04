import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Demo from './Demo';
import Home from './Home';

const route = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/demo" component={Demo} />
    </Switch>
  </Router>
);

export default route;
