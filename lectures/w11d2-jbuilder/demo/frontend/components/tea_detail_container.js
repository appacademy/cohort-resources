import { connect } from 'react-redux';
import TeaDetail from './tea_detail';
import { requestTea } from "../actions/tea_actions";
import { selectTeaTransactionsByTea } from "../reducers/selectors";

// ownProps are the props threaded down from the parent
const mapStateToProps = (state, ownProps) => {
    return {
        tea: state.teas[ownProps.teaId],
        transactions: selectTeaTransactionsByTea(state, ownProps.teaId)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        requestTea: teaId => dispatch(requestTea(teaId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaDetail);