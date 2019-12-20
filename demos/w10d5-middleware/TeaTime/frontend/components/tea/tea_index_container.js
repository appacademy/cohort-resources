// Container to connect React Component to Redux store
import { connect } from 'react-redux';

import TeaIndex from './tea_index';
import { receiveTea, fetchAllTeas, createTea } from '../../actions/tea_actions';
import { selectAllTeas } from '../../reducers/selectors';

const mapStateToProps = state => {
  debugger; 
  return ({
  teas: selectAllTeas(state)
  })
};

const mapDispatchToProps = dispatch => ({
  receiveTea: tea => dispatch(receiveTea(tea)), 
  fetchAllTeas: () => dispatch(fetchAllTeas()), 
  createTea: tea => dispatch(createTea(tea))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);