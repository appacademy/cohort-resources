import { legacy_createStore, combineReducers } from 'redux';
import entitiesReducer from './entitiesReducer';

const dummyReducer = (state = {}, action) => state

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: dummyReducer,
  ui: dummyReducer
})

const configureStore = (preloadedState = {}) => (
  legacy_createStore(rootReducer, preloadedState)
)

export default configureStore;