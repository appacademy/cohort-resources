import {connect} from "react-redux";
import TeaIndex from "./tea_index";
import { receiveTea } from "../actions/tea_actions";

// returns an object 
const mapStateToProps = (state) => {
    return {
       teas: Object.values(state.teas)
    };
};


// returns an object
const mapDispatchToProps = (dispatch) => {
    return {
        receiveTea: (tea) => dispatch(receiveTea(tea))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(TeaIndex);