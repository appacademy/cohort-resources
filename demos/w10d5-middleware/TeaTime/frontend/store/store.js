import { createStore, applyMiddleware } from 'redux';
import { myMiddleware, myThunk } from './middleware'; 
import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState, // optional argument
    applyMiddleware(myThunk, myMiddleware, logger) // optional argument - they'll learn about middleware tomorrow but we're going to throw in a logger for the demo today
  )
}

export default configureStore;