import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import { legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  session: sessionReducer
});

const configureStore = (initialState = {}) => (
  legacy_createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
);

export default configureStore;
