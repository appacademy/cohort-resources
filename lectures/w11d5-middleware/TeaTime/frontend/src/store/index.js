import {createStore, combineReducers} from 'redux';
import teaReducer from './teaReducer';

const rootReducer = combineReducers({
  teas: teaReducer
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
  createStore(rootReducer, preloadedState)
);

export default configureStore;