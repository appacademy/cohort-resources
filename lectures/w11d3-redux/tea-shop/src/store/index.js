import { createStore, combineReducers } from 'redux';
import teaReducer from './teaReducer';

const rootReducer = combineReducers({
  teas: teaReducer
});

// const dummyReducer = (state, action) => ({});

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState)
);

export default configureStore;