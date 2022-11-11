import { RECEIVE_TEA, RECEIVE_ALL_TEAS } from '../actions/tea_actions'

const teasReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState
    case RECEIVE_ALL_TEAS:
      // return action.teas // replaces tea state with array from backend
      action.teas.forEach( tea => nextState[tea.id] = tea); // maintaining consistent state shape
      return nextState
    default:
      return state;
  }
}

export default teasReducer;