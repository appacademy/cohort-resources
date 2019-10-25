import { connect } from 'react-redux';
import teaIndex from './tea_index';
import { allTheTeas } from '../reducers/selectors/tea_selectors';
import { fetchAllTeas } from '../actions/tea_actions';

const mapStateToProps = (state) => {
  // debugger;
  return {
    teas: allTheTeas(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTeas: () => dispatch(fetchAllTeas())
  };
};

// const containerFunction = connect(mapStateToProps);
// const TeaIndexContainer = containerFunction(teaIndex);
// export default TeaIndexContainer;

export default connect(mapStateToProps, mapDispatchToProps)(teaIndex);