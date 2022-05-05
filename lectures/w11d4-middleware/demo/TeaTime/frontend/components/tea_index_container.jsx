import {connect} from "react-redux";
import TeaIndex from "./tea_index";
import { receiveTea, createTea, fetchAllTeas } from "../actions/tea_actions";

// returns an object 
const mapStateToProps = (state) => {
    return {
       teas: Object.values(state.teas)
    };
};

// returns an object
const mapDispatchToProps = (dispatch) => {
    return {
        receiveTea: (tea) => dispatch(receiveTea(tea)),
        createTea: (tea) => dispatch(createTea(tea)),
        fetchAllTeas: () => dispatch(fetchAllTeas())
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(TeaIndex);