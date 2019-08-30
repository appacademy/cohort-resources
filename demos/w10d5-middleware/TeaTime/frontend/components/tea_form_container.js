import { connect } from 'react-redux';
import TeaForm from './tea_form';
import { createTea } from '../actions/tea_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    createTea: (tea) => dispatch(createTea(tea))
  };
};

export default connect(null, mapDispatchToProps)(TeaForm);