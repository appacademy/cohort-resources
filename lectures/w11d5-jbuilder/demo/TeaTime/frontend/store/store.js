import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';

// function that builds store from preloaded state
const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger) // logger should go after thunk, so that it logs normal actions
  );
}

export default configureStore;