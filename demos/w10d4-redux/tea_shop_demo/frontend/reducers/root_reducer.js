import { combineReducers } from 'redux';
import TeasReducer from './teas_reducer';

const rootReducer = combineReducers({
  teas: TeasReducer,
  biscuits: () => ({}),
});

export default rootReducer;