import { login, logout } from "../utils/user_api_utils";

// ACTION TYPES
const RECEIVE_USER = 'users/RECEIVE_USER';
const REMOVE_USER = 'users/REMOVE_USER';

// ACTION CREATORS
export const receiveUser = user => ({
  type: RECEIVE_USER,
  payload: user
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});

// THUNK ACTION CREATORS
export const loginUser = user => async dispatch => {
  let res = await login(user);
  // error handling if above request fails
  let data = await res.json();
  dispatch(receiveUser(data));
};

export const logoutUser = user => async dispatch => {
  let res = await logout();
  // error handling if above request fails
  dispatch(removeUser(user.id));
};

// REDUCER
const userReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return { ...state, [action.payload.user.id]: action.payload.user };
    case REMOVE_USER:
      const nextState = { ...state };
      delete nextState[action.userId];
      return nextState;
    default:
      return state;
  }
};

export default userReducer;