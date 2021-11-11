import { RECEIVE_TEA, RECEIVE_ALL_TEAS } from "../actions/tea_actions";

const teasReducer = (state={}, action) => {
  Object.freeze(state); 
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_TEAS:
      let newState = {}
      action.teas.forEach(tea => {
        newState[tea.id] = tea
      });
      return newState;
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    default: 
      return state;
  }
}

export default teasReducer;