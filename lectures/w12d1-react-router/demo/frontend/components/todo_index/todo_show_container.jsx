import { connect } from 'react-redux';
import TodoShow from './todo_show';
// Actions
import { deleteTodo, fetchTodo } from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    todo: state.todos[ownProps.match.params.id]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const id = ownProps.match.params.id;
  return({
    // fetchTodo: (id) => dispatch(fetchTodo(id)),
    fetchTodo: () => dispatch(fetchTodo(ownProps.match.params.id)),
    destroyTodo: (todo) => dispatch(deleteTodo(todo))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow);
