import { createStore } from 'redux';
// import shirtsReducer from '../reducers/shirts_reducer';
import rootReducer from '../reducers/root_reducer';

// const store = createStore(rootReducer, preloadedState, enhancers);

const configureStore = (preloadedState = {}) => {
  // debugger
  return createStore(rootReducer, preloadedState)
};

export default configureStore;