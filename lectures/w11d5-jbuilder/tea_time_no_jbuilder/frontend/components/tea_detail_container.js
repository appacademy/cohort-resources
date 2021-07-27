import { connect } from 'react-redux';
import { requestTea } from '../actions/tea_actions';
import TeaDetail from './tea_detail';
import { selectTransactionsByTea } from '../util/selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        tea: state.teas[ownProps.teaId],
        transactions: selectTransactionsByTea(state, ownProps.teaId)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestTea: teaId => dispatch(requestTea(teaId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaDetail);