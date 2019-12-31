import { connect } from 'react-redux';
import TodoShow from './todo_show';
// Actions
import { deleteTodo, fetchTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    // get todo based on wildcard received by ownProps
    todo: state.todos[ownProps.match.params.id]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    // fetchTodo based on wildcard received by ownProps
    fetchTodo: () => dispatch(fetchTodo(ownProps.match.params.id)),
    // requestSteps based on wildcard received by ownProps
    requestSteps: () => dispatch(requestSteps(ownProps.match.params.id)),
    destroyTodo: (todo) => dispatch(deleteTodo(todo))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShow);
