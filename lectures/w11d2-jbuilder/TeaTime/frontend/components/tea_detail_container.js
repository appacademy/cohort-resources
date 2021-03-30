import { connect } from 'react-redux';
import TeaDetail from './tea_detail';
import { fetchTea } from '../actions/tea_actions';
import { selectTransactionsByTeaId } from '../reducers/selectors';

const mapSTP = (state, ownProps) => {
  // debugger
  // ownProps === props of the container
  return {
    tea: state.teas[ownProps.teaId],
    transactions: selectTransactionsByTeaId(state, ownProps.teaId)
  }
}

const mapDTP = (dispatch, ownProps) => {
  // debugger
  return {
    fetchTea: () => dispatch(fetchTea(ownProps.teaId))
  }
}

export default connect(mapSTP, mapDTP)(TeaDetail);