import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import teaReducer from './teaReducer';
import transactions from './transactionReducer'
import modal from './modalReducer'

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions,
  modal
})

/*
{
  teas: {
    1: {
      ...
    },
    2: {
      ...
    }
  }
}
*/

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;