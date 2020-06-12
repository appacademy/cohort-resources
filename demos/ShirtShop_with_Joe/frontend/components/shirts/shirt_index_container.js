import { connect } from 'react-redux';
import ShirtIndex from './shirt_index';
import { addShirt } from '../../actions/shirt_actions';


const mapStateToProps = (state) => {
  const shirts = Object.values(state.shirts);
  return {
    shirts: shirts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShirt: (shirt) => dispatch(addShirt(shirt))
  }
};


// export default connect(callback1, callback2)(PresentationalComponent)
export default connect(mapStateToProps, mapDispatchToProps)(ShirtIndex);