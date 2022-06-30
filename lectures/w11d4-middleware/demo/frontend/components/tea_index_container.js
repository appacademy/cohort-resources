import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea } from '../actions/tea_actions';

const mapStateToProps = (state) => {
  const selectTeasByFlavor = (teas, flavor) => {
    const teasArray = Object.values(teas);
    return teasArray.filter(tea => tea.flavor === flavor);
  };

  return {
    teas: Object.values(state.teas),
    greenTeas: selectTeasByFlavor(state.teas, 'green')
  }
};

const mapDispatchToProps = (dispatch) => ({
  receiveTea: (tea) => dispatch(receiveTea(tea))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);