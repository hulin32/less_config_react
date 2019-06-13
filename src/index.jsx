import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import Demo from 'pages/Demo';
import * as models from './models';

// generate Redux store
const store = init({
  models,
});
console.log('store', store);
const Root = () => (
  <Provider store={store}>
    <Demo />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
