import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teaReducer from './teaReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer
});

const configureStore = (preloadedState = {}) => (
  legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;