import { csrfFetch } from "./csrf";

export const RECEIVE_USER = 'user/RECEIVE_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_USER,
  user
});

export const loginUser = user => async dispatch => {
  let res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  let data = await res.json();
  dispatch(receiveCurrentUser(data.user));
  return data;
};

const sessionReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { currentUser: action.user.id }
    default:
      return state;
  }
};

export default sessionReducer;