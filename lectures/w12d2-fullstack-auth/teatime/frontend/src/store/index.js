import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teaReducer from './teaReducer';
import transactionReducer from './transactionReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer,
  users: usersReducer
});

const configureStore = (preloadedState = {}) => (
  legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;