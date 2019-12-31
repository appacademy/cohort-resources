import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS_AND_STEPS = "RECEIVE_TODOS_AND_STEPS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TODO_ERROR = "TODO_ERROR";


// sync actions
export const receiveTodos = payload => ({
  type: RECEIVE_TODOS_AND_STEPS,
  payload
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const todoError = error => ({
  type: TODO_ERROR,
  error
})



// async actions
export const fetchTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(response => {
    // debugger
    dispatch(receiveTodos(response));
  })
);

export const fetchTodo = id => dispatch => (
  TodoAPIUtil.fetchTodo(id).then(todo => dispatch(receiveTodo(todo)))
);

export const createTodo = todo => dispatch => (
  TodoAPIUtil.createTodo(todo)
  .then(todo => { dispatch(receiveTodo(todo)); dispatch(clearErrors())},
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateTodo = todo => dispatch => (
  TodoAPIUtil.updateTodo(todo).then(todo => dispatch(receiveTodo(todo)))
);

export const deleteTodo = todo => dispatch => (
  TodoAPIUtil.destroyTodo(todo).then(todo => dispatch(removeTodo(todo)))
);
