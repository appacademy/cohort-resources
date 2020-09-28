import { combineReducers } from 'redux';
import shirtsReducer from './shirts_reducer';
import reviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
  shirts: shirtsReducer,
  reviews: reviewsReducer
  // jeans: skinnyJeansReducer,
  // hats: hatsReducer
});

export default rootReducer;