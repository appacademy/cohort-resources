import { connect } from 'react-redux';
import StepList from './step_list';
// Actions
import { stepsByTodoId } from '../../reducers/selectors';
import { createStep } from '../../actions/step_actions';

const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createStep: (...args) => dispatch(createStep(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
