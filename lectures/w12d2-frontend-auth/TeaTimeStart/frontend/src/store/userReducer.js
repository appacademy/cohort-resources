import { RECEIVE_USER, REMOVE_USER } from "./sessionReducer";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, [action.user.id]: action.user };
    case REMOVE_USER:
      let nextState = { ...state };
      delete nextState[action.userId];
      return nextState;
    default:
      return state;
  }
};

export default userReducer;