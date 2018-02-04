import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Route from './router';
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('app'),
);
