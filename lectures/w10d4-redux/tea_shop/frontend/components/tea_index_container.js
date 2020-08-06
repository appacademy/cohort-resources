import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea } from '../actions/tea_actions';

const mapStateToProps = (state) => {
    // state === Redux state
    return {
        teas: Object.values(state.teas)
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        receiveTea: (tea) => dispatch(receiveTea(tea))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);