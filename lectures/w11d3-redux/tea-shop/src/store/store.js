import { legacy_createStore, combineReducers } from 'redux';
import teaReducer from './teaReducer';

const dummyReducer = (state = {}, action) => state;

const rootReducer = combineReducers({
  teas: teaReducer,
  users: dummyReducer,
  session: dummyReducer
})

const configureStore = (preloadedState = {}) => (
  legacy_createStore(rootReducer, preloadedState)
)

export default configureStore;