import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import { myMiddleware, myThunk } from './middleware';

// const store = createStore(() => ({}), preloadedState); 
// replace with below after explaining that we want to be able to configure our store with options like preloadedState

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState,
    applyMiddleware(myThunk, logger)
  );
}

export default configureStore;