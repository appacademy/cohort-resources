import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { fetchAllTeas } from '../actions/tea_actions';

const mapStateToProps = (state) => {
  return {
    teas: Object.values(state.teas)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTeas: () => dispatch(fetchAllTeas())
  };
};

// i do know about my presentational component!!!
export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);

