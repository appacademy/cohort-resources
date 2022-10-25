import { csrfFetch } from "./csrf";

export const RECEIVE_USER = 'user/RECEIVE_USER';
export const REMOVE_USER = 'user/REMOVE_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_USER,
  user
});

export const removeCurrentUser = userId => ({
  type: REMOVE_USER,
  userId
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

export const logoutUser = userId => async dispatch => {
  let res = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  sessionStorage.setItem('currentUser', null);
  dispatch(removeCurrentUser(userId));
};

const sessionReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { currentUser: action.user.id };
    case REMOVE_USER:
      return { currentUser: null };
    default:
      return state;
  }
};

export default sessionReducer;