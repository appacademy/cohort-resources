import {connect} from 'react-redux';
import { requestTea } from '../actions/tea_actions';
import { selectTransactionsByTea } from '../reducers/selectors';
import TeaDetail from './tea_detail';

const mSTP = (state, ownProps) => {
    return {
        tea: state.teas[ownProps.teaId],
        transactions: selectTransactionsByTea(state, ownProps.teaId)
    };
};

const mDTP = (dispatch) => {
    return {
        requestTea: teaId => dispatch(requestTea(teaId))
    };
}; 

export default connect(mSTP, mDTP)(TeaDetail);