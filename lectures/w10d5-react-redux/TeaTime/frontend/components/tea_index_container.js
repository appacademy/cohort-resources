import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea } from '../actions/tea_actions';
import { selectTeasByFlavor } from '../reducers/selectors';

const mapStateToProps = state => {
    // console.log(state.teas)
    // console.log(Object.values(state.teas))


    return ({
       teas: Object.values(state.teas),
       greenTeas: selectTeasByFlavor(state.teas, 'green')
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        receiveTea: tea => dispatch(receiveTea(tea))
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);

// props: {
//     teas: Object.values(state.teas),
//     receiveTea: tea => dispatch(receiveTea(tea))
// }