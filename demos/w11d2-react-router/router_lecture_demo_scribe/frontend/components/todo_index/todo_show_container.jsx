import { connect } from 'react-redux';
import TodoShow from './todo_show';
// Actions
import { deleteTodo, fetchTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/step_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // we have access to ownProps
  return({
    todo: state.todos[ownProps.match.params.id]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    fetchTodo: () => dispatch(fetchTodo(ownProps.match.params.id)),
    requestSteps: () => dispatch(requestSteps(ownProps.match.params.id)),
    destroyTodo: (todo) => dispatch(deleteTodo(todo))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow);
