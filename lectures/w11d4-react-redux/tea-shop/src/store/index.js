import { createStore, combineReducers } from 'redux';
import teaReducer from './teaReducer';

const dummyReducer = (state = {}, action) => state;

const rootReducer = combineReducers({
  teas: teaReducer,
  dummy: dummyReducer
})

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState)
)

export default configureStore;