import {connect} from "react-redux";
import TeaIndex from "./tea_index";
import { receiveTea } from "../actions/tea_actions";


// returns an object 
// it is in here that we can acces our application state
const mapStateToProps = (state) =>{
    return {
       teas: Object.values(state.teas)
    //    [{flavor: "green", id:1, price: 4.99},{flavor: "jasmine", id:2, price: 3.99}]
    }
}


// returns an object
const mapDispatchToProps = (dispatch) =>{
    return {
        receiveTea: (tea) => dispatch(receiveTea(tea))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TeaIndex)