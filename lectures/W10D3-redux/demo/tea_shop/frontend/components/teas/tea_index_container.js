import { connect } from 'react-redux';
import TeaIndex from './tea_index';
import { receiveTea } from '../../actions/tea_actions';
import { selectAllTeas } from '../../reducers/selectors';

// connect TeaIndex to our redux store
// connect takes in 2 callbacks
    // 1: mapStateToProps => take data from redux state and put it in props
    // 2: mapDispatchToProps => gives TeaIndex 
    // ability to interact with redux state (via dispatch)

// returns an object that gets put into props
const mapStateToProps = (state) => {
    // state === application (redux) state
    return {
        teas: selectAllTeas(state)
    };
}

// returns an object that gets put into props
const mapDispatchToProps = (dispatch) => {

    return {
        callReceiveTea: (tea) => dispatch(receiveTea(tea))
    };
}

// connect checks for null if you pass it in as first arg
// const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(TeaIndex);
// export default connectedComponent;

// connect has access to the store via the Provider
    // store has state and dispatch
export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);