import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea, fetchAllTeas, createTea } from '../actions/tea_actions';

const mapStateToProps = (state) => {
  debugger
  const selectTeasByFlavor = (teas, flavor) => {
    const teasArray = Object.values(teas);
    return teasArray.filter(tea => tea.flavor === flavor);
  };

  return {
    teas: Object.values(state.teas),
    greenTeas: selectTeasByFlavor(state.teas, 'green')
  }
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    receiveTea: (tea) => dispatch(receiveTea(tea)),
    fetchAllTeas: () => dispatch(fetchAllTeas()),
    createTea: (tea) => dispatch(createTea(tea))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);