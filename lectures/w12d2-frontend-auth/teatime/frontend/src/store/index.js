import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import sessionReducer from './sessionReducer';
import teaReducer from './teaReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer,
  session: sessionReducer
});

// const dummyReducer = (state, action) => ({});

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;