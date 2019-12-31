import { connect } from 'react-redux';
import TodoForm from './todo_form';

// Actions
import { createTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => {

  return({
    errors: state.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createTodo: todo => dispatch(createTodo(todo)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
