import { connect } from "react-redux";
import ShirtForm from "./shirt_form";
import { createShirt } from "../../actions/shirt_actions";

const mapDispatchToProps = (dispatch) => {
  //debugger
  return {
    createShirt: (shirt) => {
      //debugger
      return dispatch(createShirt(shirt))
    }
  }
}

export default connect(null,mapDispatchToProps)(ShirtForm)