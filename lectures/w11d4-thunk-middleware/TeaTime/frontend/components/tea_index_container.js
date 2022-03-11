import { connect } from 'react-redux';
import { receiveTea, fetchAllTeas, createTea } from '../actions/tea_actions';
import { selectTeasByFlavor } from '../util/selectors';

import TeaIndex from './tea_index';

// runs anytime state changes
const mapStateToProps =(state) => {
    debugger;
    return {
        teas: Object.values(state.teas),
        greenTeas: selectTeasByFlavor(state.teas, 'green'),
        blackTeas: selectTeasByFlavor(state.teas, 'black')
    }
}

// runs when we instantiate the component
const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        fetchAllTeas: () => dispatch(fetchAllTeas()),
        createTea: (tea) => dispatch(createTea(tea))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex)

{/* connect returns <TeaIndex 
    teas={Object.values(state.teas)} 
    receiveTea={(tea) => dispatch(receiveTea(tea))} 
/> */}


// rough under the hood example
// const connect = (mSTP, mDTP) => {
//     // provider gives us store
//     resOfmSTP = mSTP(store.getState())
//     resOfmDTP = mDTP(store.dispatch)

//     propsObj = {
//         stateProps: resOfmSTP,
//         dispatchProps: resOfmDTP
//     }

//     return (component, propsObj = propsObj) => {
//         return <component props={propsObj} />
//     }
// }