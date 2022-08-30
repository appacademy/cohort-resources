import csrfFetch from "./csrf";

const RECEIVE_CURRENT_USER = 'users/RECEIVE_CURRENT_USER';
const REMOVE_CURRENT_USER = 'users/REMOVE_CURRENT_USER';

/*----ACTIONS----*/

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  payload: user
});

export const removeCurrentUser = userId => ({
  type: REMOVE_CURRENT_USER,
  userId
});

export const loginUser = user => async dispatch => {
  let res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  let data = await res.json();
  dispatch(receiveCurrentUser(data));
};

export const logoutUser = userId => async dispatch => {
  let res = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  dispatch(removeCurrentUser(userId));
}

let currentUser = sessionStorage.getItem('currentUser');
let initialState;
if (currentUser) {
  initialState = { user: JSON.parse(currentUser) };
} else {
  initialState = { user: null };
}

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...action.payload };
    case REMOVE_CURRENT_USER:
      return { user: null };
    default:
      return nextState;
  }
};

export default sessionReducer;