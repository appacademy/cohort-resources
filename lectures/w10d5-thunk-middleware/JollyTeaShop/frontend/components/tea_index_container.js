import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea, fetchAllTeas, createTea } from '../actions/tea_actions';

const mapStateToProps = (state) => {
    // state === Redux state
    debugger;
    return {
        teas: Object.values(state.teas)
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        receiveTea: (tea) => dispatch(receiveTea(tea)),
        fetchAllTeas: () => dispatch(fetchAllTeas()),
        createTea: (tea) => dispatch(createTea(tea))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);