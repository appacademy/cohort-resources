import { connect } from 'react-redux';
import TeaList from "./tea_list";
import { addTea } from "../actions/tea_actions";

const mapStateToProps = (state) => {
    return {
        teas: Object.values(state.teas)
    }
};

const mapDispatchToProps = (dispatch) => ({
    addTea: (tea) => dispatch(addTea(tea))
});


export default connect(mapStateToProps, mapDispatchToProps)(TeaList)