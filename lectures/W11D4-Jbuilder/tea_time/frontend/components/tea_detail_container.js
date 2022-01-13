import { connect } from 'react-redux';
import TeaDetail from './tea_detail';
import { selectTransactionsByTea } from '../reducers/selectors';
import { requestTea } from '../actions/tea_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        tea: state.teas[ownProps.teaId],
        transactions: selectTransactionsByTea(state, ownProps.teaId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestTea: teaId => dispatch(requestTea(teaId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaDetail);