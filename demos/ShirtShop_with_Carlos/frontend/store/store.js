import { createStore, applyMiddleware } from 'redux';
// import shirtsReducer from '../reducers/shirts_reducer';
import rootReducer from '../reducers/root_reducer';
// import {myThunk} from "../thunk/thunk"
import thunk from "redux-thunk"
import logger from "redux-logger"

// const store = createStore(rootReducer, preloadedState, enhancers);

const configureStore = (preloadedState = {}) => {
  // debugger
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk,logger))
};

export default configureStore;