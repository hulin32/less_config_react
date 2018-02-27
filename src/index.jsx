import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Route from './router';
import { persistor, store } from './store';

ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Route />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
