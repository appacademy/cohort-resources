import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';


const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;

// Sample State Shape
// [
//   "Title cannot be blank",
// ]
