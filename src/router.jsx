import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Demo from 'pages/Demo';
import Home from 'pages/Home';

import { history } from './store';

const route = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/demo" component={Demo} />
    </Switch>
  </Router>
);

export default route;
