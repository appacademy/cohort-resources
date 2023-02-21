import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teaReducer from './teaReducer';
import transactionReducer from './transactionReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  teas: teaReducer,
  transactions: transactionReducer
});

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;