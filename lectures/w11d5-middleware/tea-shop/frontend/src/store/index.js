import { createStore, combineReducers, applyMiddleware } from 'redux';
import teaReducer from './teaReducer';
import logger from 'redux-logger';
import { thunk } from './thunk';

const dummyReducer = (state = {}, action) => state;

const rootReducer = combineReducers({
  teas: teaReducer,
  dummy: dummyReducer
})

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
)

export default configureStore;