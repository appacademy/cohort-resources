import { connect } from 'react-redux'; 
import { receiveTea } from '../actions/tea_actions';
import TeaIndex from './tea_index';

const mapStateToProps = (state) => {
    // SELECTOR FUNCTIONS
    const selectTeasByType = (allTeas, flavor) => {
        let teaArray = Object.values(allTeas);
        return teaArray.filter(tea => tea.flavor === flavor);
    }

    return {
        teas: Object.values(state.teas), 
        // teas: state.teas is A-OK => just know the value is an object rather than array
        greenTeas: selectTeasByType(state.teas, "green"), 
        blackTeas: selectTeasByType(state.teas, "black")
    };
};

const mDTP = (dispatch) => ({
    receiveTea: (tea) => dispatch(receiveTea(tea)), 
    // SAME AS ABOVE
    // receiveTea: function(tea) {
    //     return dispatch(receiveTea(tea));
    // }
});

export default connect(mapStateToProps, mDTP)(TeaIndex);
// connect() returns another function
// invoke the returning function with the presentational component

// connect(arg1, arg2) passes state to arg1 and passes dispatch to arg2 for you