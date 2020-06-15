import { connect } from 'react-redux';
import ShirtIndex from './shirt_index';
import { fetchAllShirts } from '../../actions/shirt_actions';


const mapStateToProps = (state) => {
  //debugger
  // const shirts = Object.values(state.shirts);
  return {
    shirts: state.shirts
  }
};

const mapDispatchToProps = (dispatch) => {
  //debugger
  return {
    fetchAllShirts: () => {
      //debugger
      return dispatch(fetchAllShirts())
    }
  }
};


// export default connect(callback1, callback2)(PresentationalComponent)
export default connect(mapStateToProps, mapDispatchToProps)(ShirtIndex);