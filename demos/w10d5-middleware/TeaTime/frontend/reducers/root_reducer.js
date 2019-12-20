import { combineReducers } from 'redux';

import teasReducer from './teas_reducer';

const RootReducer = combineReducers({
  teas: teasReducer
});

export default RootReducer;
