import { connect } from 'react-redux';
import TeaDetail from './tea_detail';
import { requestTea } from '../actions/tea_actions';
import { selectTransactionsByTea } from '../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    debugger
    let likes = [];

    if (Object.values(state.likes).length > 0) {
        Object.values(state.likes).forEach(like => {
            if (like.teaId === ownProps.teaId) {
                likes.push(like)
            }
        })
    }

    return {
        tea: state.teas[ownProps.teaId],
        transactions: selectTransactionsByTea(state, ownProps.teaId),
        likes: likes
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        requestTea: teaId => dispatch(requestTea(teaId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaDetail)

// const connect = (mSTP, mDTP) => {
    
//     let mSTPresult = mSTP(store.getState(), ownProps) // is an object
//     let mDTPresult = mDTP(stroe.dispatch) // is an object

//     return function (component) => {
//         return <component props={mSTPresult, mDTPresult} />
//     }
// }