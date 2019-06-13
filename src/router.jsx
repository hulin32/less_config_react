import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Demo from 'pages/Demo';
import Home from 'pages/Home';

import { history } from './store';

const route = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/demo" component={Demo} />
    </Switch>
  </ConnectedRouter>
);

export default route;
