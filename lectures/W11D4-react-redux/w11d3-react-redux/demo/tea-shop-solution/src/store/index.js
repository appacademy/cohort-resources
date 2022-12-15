import { createStore, combineReducers } from 'redux';
import teaReducer from './teaReducer';
// import { legacy_createStore as createStore} from 'redux'

const rootReducer = combineReducers({
  teas: teaReducer
});

// const dummyReducer = (state, action) => ({});

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState)
);

export default configureStore;