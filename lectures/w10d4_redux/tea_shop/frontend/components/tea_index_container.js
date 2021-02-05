import { connect } from 'react-redux';
import TeaIndex from './tea_index';

import { receiveTea } from '../actions/tea_actions';

const mapStateToProps = (state) => {
    const selectTeasByFlavor = (teas,flavor) => {
        const teasArr = Object.values(teas);
        return teasArr.filter(tea => tea.flavor === flavor);
    }

    return {
        teas: Object.values(state.teas), // turns object into array of the objects values
        greenTeas: selectTeasByFlavor(state.teas,'green')
    }
}

const mapDispatchToProps = (dispatch) => { // dispatch lives in the store. passed into mapDTP by connect
    return {
        receiveTea: (tea) => dispatch(receiveTea(tea))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeaIndex);
// connect takes in two callbacks and returns a function, that is then invoked with component
// connect gives the state to mapStateToProps, it gets the state from the store given to provider component
// Connect function connects slices of state to a specific component
