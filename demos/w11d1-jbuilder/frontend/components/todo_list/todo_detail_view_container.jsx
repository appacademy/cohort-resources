import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
// Actions
import { deleteTodo } from '../../actions/todo_actions';
import { requestSteps } from '../../actions/step_actions';
import { tagsByTodoId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
      tags: tagsByTodoId(state, ownProps.todo.id)
  }
};

const mapDispatchToProps = (dispatch, { todo }) => ({
  requestSteps: () => dispatch(requestSteps(todo.id)),
  destroyTodo: () => dispatch(deleteTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetailView);
