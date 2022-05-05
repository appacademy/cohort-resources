import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const store = createStore(() => ({}), preloadedState); 
// replace with below after explaining that we want to be able to configure our store with options like preloadedState

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;