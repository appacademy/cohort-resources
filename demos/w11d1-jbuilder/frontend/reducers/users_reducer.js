import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
  TODO_ERROR
} from "../actions/todo_actions";

// state = {
//   1: { id: 1, name: 'do something' },
//   2: { id: 2, name: 'do something elsee'}
// }

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
