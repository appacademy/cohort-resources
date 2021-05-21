import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea } from '../actions/tea_action';
import { selectTeasByFlavor } from '../reducers/selectors';



const mapStateToProps = (state) => {
   debugger
    return {
        teas: Object.values(state.teas),
        mango: 5,
        greenTeas: selectTeasByFlavor(state.teas, 'green' )

    }
}
 
const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        receiveNewTea: (tea) => {
            debugger
            dispatch(receiveTea(tea))
        }
    }
}

// export default connect(callback1, callback2)(TeaIndex);
export default connect(mapStateToProps,mapDispatchToProps)(TeaIndex);