// create our store
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import teaReducer from './teaReducer';

const dummyReducer = (state, action) => (state);

const rootReducer = combineReducers({
  teas: teaReducer,
  // cookies: cookieReducer,
  // scones: sconeReducer,
})
// { teas: ...., cookies: ..., scones: ....}

// createStore takes in 2 non-optional args

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger)) // => {}
);

export default configureStore;