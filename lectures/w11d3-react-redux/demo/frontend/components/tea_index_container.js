import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea } from '../actions/tea_actions';
import { selectTeasByFlavor } from '../reducers/selectors';

const mapStateToProps = (state) => {

  // const selectTeasByFlavor = (teas, flavor) => {
  //   const teasArray = Object.values(teas);
  //   return teasArray.filter(tea => tea.flavor === flavor);
  // }
  
  return({
    teas: Object.values(state.teas), // array of tea objects
    greenTeas: selectTeasByFlavor(state.teas, 'green') // using a selector
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveTea: (tea) => dispatch(receiveTea(tea)) // calling this will dispatch our tea action
  })
};

// we need connect to access the store from the Provider
// we need to choose which slice of state to give to this component, with mSTP
// connect will give your first callback 'state' as an argument, and the 
// second callback 'dispatch' as an argument
// mDTP gives our component access to the store.dispatch function
export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);