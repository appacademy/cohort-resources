import { RECEIVE_ALL_TEAS, RECEIVE_TEA } from '../actions/tea_actions'

const teasReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_TEAS:
      action.teas.forEach(tea => nextState[tea.id] = tea)
      return nextState
    case RECEIVE_TEA:
      debugger
      nextState[action.tea.id] = action.tea;
      return nextState
    default:
      return state;
  }
}

export default teasReducer;