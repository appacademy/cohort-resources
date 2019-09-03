import { connect } from 'react-redux';
import TodoIndex from './todo_index';

// Actions
import { fetchTodos, updateTodo, destroyTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return({
  todos: allTodos(state),
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
  requestTodos: () => dispatch(fetchTodos()),
  updateTodo: todo => dispatch(updateTodo(todo))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoIndex);
