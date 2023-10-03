import { csrfFetch } from "./csrf";
// ACTION TYPES
export const RECEIVE_USER = 'users/RECEIVE_USER';
export const REMOVE_USER = 'users/REMOVE_USER';

// ACTION CREATORS
export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
};

export const removeUser = userId => {
  return {
    type: REMOVE_USER,
    userId
  }
}

// THUNK ACTION CREATORS
export const createUser = user => async (dispatch) => {
  const res = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  const data = await res.json();
  // add current user to the sessionStorage
  sessionStorage.setItem('currentUser', JSON.stringify(data));
  dispatch(receiveUser(data)); // adds user to store
}

export const loginUser = user => async (dispatch) => {
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  const data = await res.json();
  sessionStorage.setItem('currentUser', JSON.stringify(data));
  dispatch(receiveUser(data));
}

// dont need to pass in userId if this is with a session reducer
export const logoutUser = () => async (dispatch) => {
  const res = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  const data = await res.json(); // comes from sessions_controller#destroy
  // debugger
  sessionStorage.setItem('currentUser', null);
  dispatch(removeUser(data.userId));
}

// REDUCER
const userReducer = (state = {}, action) => {
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_USER:
      nextState[action.user.id] = action.user
      return nextState;
    case REMOVE_USER:
      delete nextState[action.userId];
      return nextState;
    default:
      return state;
  }
};

export default userReducer;