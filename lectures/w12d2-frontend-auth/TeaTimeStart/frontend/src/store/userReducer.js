import { RECEIVE_USER } from "./sessionReducer";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, [action.user.id]: action.user };
    default:
      return state;
  }
};

export default userReducer;