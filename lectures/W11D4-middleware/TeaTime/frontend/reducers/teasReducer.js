import { RECEIVED_TEA, RECEIVE_ALL_TEAS, REMOVED_TEA } from "../actions/teaActions";


const teasReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_TEA:
      newState[action.tea.id] = action.tea;
      return newState;
    case RECEIVE_ALL_TEAS:
      let nextState = {};
      action.teas.forEach(tea => {
        nextState[tea.id] = tea;
      });
      return nextState;
    default:
      return oldState;
  }
}

export default teasReducer;
