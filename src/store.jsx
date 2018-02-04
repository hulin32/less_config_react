import { createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunk from 'redux-thunk';
import reducer from './reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, reduxPackMiddleware),
);
/* eslint-enable */

export default store;
