import { createStore, combineReducers, applyMiddleware } from 'redux';
import teaReducer from './teaReducer';
import transactionReducer from './transactionReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer
});

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;