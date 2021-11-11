import { connect } from 'react-redux'; 
import { fetchAllTeas, createTea } from '../actions/tea_actions';
import TeaIndex from './tea_index';

//change in props and change in state cause re-render

const mapStateToProps = (state) => ({
    teas: Object.values(state.teas), // makes an array with the tea object
});

const mDTP = (dispatch) => ({
  createTea: (tea) => dispatch(createTea(tea)),
  fetchAllTeas: () => dispatch(fetchAllTeas())
});

export default connect(mapStateToProps, mDTP)(TeaIndex);