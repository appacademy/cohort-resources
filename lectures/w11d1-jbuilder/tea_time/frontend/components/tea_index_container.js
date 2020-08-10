import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea, requestTeas, createTea } from '../actions/tea_actions';

// implicitly returns object, providing props from redux state
// subscribes component to parts of state mapped in, so component updates anytime
// state changes (read from store)
const mapStateToProps = (state) => ({
  teas: Object.values(state.teas) // turn teas state into array of tea objects to map over
});

// function that allows us to hand functions to component that can dispatch
// actions to redux store (write to store). Functions close over dispatch.
const mapDispatchToProps = dispatch => ({
  receiveTea: tea => dispatch(receiveTea(tea)),
  requestTeas: () => dispatch(requestTeas()),
  createTea: tea => dispatch(createTea(tea))
});

// connect invokes mapStateToProps with store.getState() and mapDispatchToProps
// with store.dispatch
export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);