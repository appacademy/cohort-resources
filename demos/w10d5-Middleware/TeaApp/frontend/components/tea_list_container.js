import { connect } from 'react-redux';
import TeaList from "./tea_list";
import { fetchAllTeas } from "../actions/tea_actions";

const mapStateToProps = (state) => {
    return {
        teas: Object.values(state.teas)
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchAllTeas: () => dispatch(fetchAllTeas())
});


export default connect(mapStateToProps, mapDispatchToProps)(TeaList)