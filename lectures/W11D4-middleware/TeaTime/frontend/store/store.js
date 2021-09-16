import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import myMiddleware from './middleware';

const configureStore = (preloadedState = {}) => {
  // return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger, myMiddleware))
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
};

export default configureStore;