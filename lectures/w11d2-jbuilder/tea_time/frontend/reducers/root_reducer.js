import { combineReducers } from 'redux';
import teasReducer from './teas_reducer';

// Root Reducer is higher level reducer that combines sub-reducers
const rootReducer = combineReducers({
  teas: teasReducer
});

export default rootReducer;

/*
New State Shape:
teas: {
  1: {
    flavor: 'green',
    amount: 2.75
    id: 1
  }
},
cookies: {
  ...
}
*/