import { connect } from 'react-redux';
import TodoForm from './todo_form';

// Actions
import { createTodo } from '../../actions/todo_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    createTodo: todo => dispatch(createTodo(todo)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
