import { connect } from 'react-redux';
import TodoShow from './todo_show';
// Actions
import { deleteTodo, fetchTodo } from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => {
  const todoId = ownProps.match.params.id
  return({
    todo: state.todos[todoId]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const todoId = ownProps.match.params.id
  return({
    fetchTodo: () => dispatch(fetchTodo(todoId)),
    destroyTodo: (todo) => dispatch(deleteTodo(todo))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow);
