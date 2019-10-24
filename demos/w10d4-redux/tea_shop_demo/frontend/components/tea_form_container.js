import { connect } from 'react-redux';
import TeaForm from './tea_form';
import { receiveTea } from '../actions/tea_actions';

// const mapStateToProps = (state) => {
//   return {

//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTea: (tea) => dispatch(receiveTea(tea)),
  };
};

export default connect(null, mapDispatchToProps)(TeaForm);