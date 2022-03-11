import { connect } from 'react-redux';
import TeaDetail from './tea_detail';
import { requestTea } from '../actions/tea_actions';
import { selectTransactionsByTea } from '../reducers/selectors';

const mapStateToProps = (state, {tea}) => {
  debugger
  return {
    transactions: selectTransactionsByTea(state.transactions, tea) // want to only select transactions for this tea
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestTea: teaId => dispatch(requestTea(teaId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaDetail)