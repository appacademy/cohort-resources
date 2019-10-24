import { connect } from 'react-redux';
import teaIndex from './tea_index';
import { allTheTeas } from '../reducers/selectors/tea_selectors';

const mapStateToProps = (state) => {
  // debugger;
  return {
    teas: allTheTeas(state),
  };
};

// const containerFunction = connect(mapStateToProps);
// const TeaIndexContainer = containerFunction(teaIndex);
// export default TeaIndexContainer;

export default connect(mapStateToProps)(teaIndex);