import { connect } from 'react-redux';
import TodoShow from './todo_show';
// Actions
import { deleteTodo, fetchTodo } from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return({
    todo: state.todos[ownProps.match.params.todoId]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchTodo: () => dispatch(fetchTodo(ownProps.match.params.todoId)),
    destroyTodo: (todo) => dispatch(deleteTodo(todo))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow);
