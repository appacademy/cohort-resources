import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teaReducer from './teaReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  transactions: transactionReducer,
  teas: teaReducer
});

const configureStore = (preloadedState = {}) => (
  legacy_createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;