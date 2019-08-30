import { RECEIVE_TEA, RECEIVE_ALL_TEAS } from '../actions/tea_actions';

const teasReducer = (state = {}, action) => {
  Object.freeze(state);
  // we're using `Object.assign` to return a copy of state
  // state object id !== nextState object id
  let nextState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_TEA:
      // we're modifying the `nextState`
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_ALL_TEAS:
      action.teas.forEach( tea => nextState[tea.id] = tea );
      return nextState;
    default:
      return state;
  }
};

export default teasReducer;