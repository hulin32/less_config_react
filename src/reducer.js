import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import localForage from 'localforage';
import foo from './foo';

const persistConfig = {
  key: 'root',
  storage: localForage,
};

const rootReducer = combineReducers({
  foo,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default persistedReducer;
