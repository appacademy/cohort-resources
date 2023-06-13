import { csrfFetch } from "./csrf";

const RECEIVE_USER = 'RECEIVE_USER'
const REMOVE_USER = 'REMOVE_USER'

// ACTION CREATOR

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    payload: user
  }
};

export const removeUser = userId => {
  return {
    type: REMOVE_USER,
    userId
  }
};

// THUNK ACTION CREATORS

export const loginUser = user => async (dispatch) => {
  let res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  let data = await res.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data.user)); // add s_token to browser storage
  dispatch(receiveUser(data.user)); // updates the store
}

export const logoutUser = userId => async (dispatch) => {
  let res = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  sessionStorage.setItem('currentUser', null); // set to null in storage
  dispatch(removeUser(userId)); // updates the store
}

export const createUser = user => async (dispatch) => {
  let res = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  let data = await res.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data.user)); // add s_token to browser storage
  dispatch(receiveUser(data.user)); // updates the store
}

// REDUCER
const usersReducer = (state = {}, action) => {
  const nextState = {...state};

  switch (action.type) {
    case RECEIVE_USER:
      nextState[action.payload.id] = action.payload;
      return nextState;
    case REMOVE_USER:
      delete nextState[action.userId];
      return nextState;
    default:
      return state;
  }
}

export default usersReducer;