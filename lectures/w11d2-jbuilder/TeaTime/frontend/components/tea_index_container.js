import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea, fetchAllTeas, createTea2 } from '../actions/tea_actions';
import { selectTeasByFlavor } from '../reducers/selectors';

// connected component can read from the store (state)
const mapStateToProps = state => {
    // console.log(state.teas)
    // console.log(Object.values(state.teas))


    return ({
       teas: Object.values(state.teas),
       greenTeas: selectTeasByFlavor(state.teas, 'Green')
    })
}

// connected component can write to the store (dispatch)
const mapDispatchToProps = dispatch => {
    return ({
        receiveTea: tea => dispatch(receiveTea(tea)),
        fetchAllTeas: () => dispatch(fetchAllTeas()),
        createTea3: (tea) => dispatch(createTea2(tea))
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);

// props: {
//     teas: Object.values(state.teas),
//     receiveTea: tea => dispatch(receiveTea(tea))
// }