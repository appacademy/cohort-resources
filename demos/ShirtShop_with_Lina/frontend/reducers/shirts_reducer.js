// import { ADD_SHIRT } from '../actions/shirt_actions';
// import * as ShirtActions from '../actions/shirt_actions';
import { RECEIVE_ALL_SHIRTS, RECEIVE_SHIRT, RECEIVE_SHIRT_DETAIL } from "../actions/shirt_actions"

const shirtsReducer = (state = {}, action) => {
  // console.log(state);
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    // case ADD_SHIRT:
    //   nextState[action.shirt.id] = action.shirt;
    //   return nextState;
    case RECEIVE_ALL_SHIRTS:
      //debugger
      // action.shirts.forEach(shirt => nextState[shirt.id] = shirt);
      return Object.assign(nextState, action.shirts)
      // return nextState;
    case RECEIVE_SHIRT:
      //debugger
      nextState[action.shirt.id] = action.shirt
      return nextState
    // case RECEIVE_SHIRT_DETAIL:
    //   // debugger
    //   nextState[action.shirtDetail.shirt.id] = action.shirtDetail.shirt
    //   // debugger
    //   return nextState
    default:
      return state;
  }

};

export default shirtsReducer;