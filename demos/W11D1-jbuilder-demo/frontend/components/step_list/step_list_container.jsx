import { connect } from 'react-redux';
import StepList from './step_list';
// Actions
import { stepsByTodoId } from '../../reducers/selectors';
import { createStep } from '../../actions/step_actions';

const mapStateToProps = (state, { todoId }) => {
  let steps = stepsByTodoId(state, todoId);
  // debugger
  return {
    steps,
    todoId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createStep: (...args) => dispatch(createStep(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
