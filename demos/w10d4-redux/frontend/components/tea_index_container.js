import { connect } from 'react-redux';
import TeaIndex from './tea_index';

const mapStateToProps = (state) => {
  return {
    teas: Object.values(state.teas)
  };
};

// i do know about my presentational component!!!
export default connect(mapStateToProps)(TeaIndex);

