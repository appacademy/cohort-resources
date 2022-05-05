import { RECEIVE_TEA, RECEIVE_TEAS } from '../actions/tea_actions'

const teasReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TEA:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEAS:
      Object.values(action.teas).forEach((tea, idx) => {
        nextState[tea.id] = tea;
      });
      return nextState;
    default:
      return nextState;
  }
}

export default teasReducer;