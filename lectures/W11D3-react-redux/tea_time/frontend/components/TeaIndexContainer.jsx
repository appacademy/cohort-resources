import { connect } from "react-redux";
import TeaIndex from "./TeaIndex";
import {receivedTea } from "../actions/teaActions"

const mapStateToProps = (state) => {
    debugger
    return {
       teas: Object.values(state.teas)
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        receivedTea: (tea) => dispatch(receivedTea(tea))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeaIndex)