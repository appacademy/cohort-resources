import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

// function that builds store from preloaded state
const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState
  );
}

export default configureStore;