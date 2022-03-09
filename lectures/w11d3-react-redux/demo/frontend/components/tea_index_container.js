import { connect } from 'react-redux';
import { receiveTea } from '../actions/tea_actions';
import { selectTeasByFlavor } from '../util/selectors';

import TeaIndex from './tea_index';

const mapStateToProps =(state) => {
    // debugger;
    // selectore of selectTeasByFlavor has been moved to selectors file in util
    return {
        teas: Object.values(state.teas),
        greenTeas: selectTeasByFlavor(state.teas, 'green'),
        blackTeas: selectTeasByFlavor(state.teas, 'black')
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger;
    return {
        receiveTea: (tea) => dispatch(receiveTea(tea))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex)

{/* <TeaIndex 
    teas={Object.values(state.teas)} 
    receiveTea={(tea) => dispatch(receiveTea(tea))} 
/> */}
