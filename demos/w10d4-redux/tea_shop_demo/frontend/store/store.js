import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

// const reducer = () => ({});

// static store
// const store = createStore(reducer);

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState);
};

export default configureStore;