import { createStore, applyMiddleware } from 'redux';
import thunk from '../components/thunk/thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const configureStore = () => (
  createStore(rootReducer, applyMiddleware(thunk, logger))
);

export default configureStore;
