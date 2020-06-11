import { combineReducers } from 'redux';
import shirtsReducer from './shirts_reducer';

const rootReducer = combineReducers({
  shirts: shirtsReducer
  // jeans: skinnyJeansReducer,
  // hats: hatsReducer
});

export default rootReducer;