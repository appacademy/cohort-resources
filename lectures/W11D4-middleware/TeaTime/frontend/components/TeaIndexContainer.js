import { connect } from "react-redux";
import TeaIndex from "./TeaIndex";
import {fetchAllTeas, createTea } from "../actions/teaActions"

const mapStateToProps = (state) => {
  return {
    teas: Object.values(state.teas)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTea: (tea) => dispatch(createTea(tea)), // store.dispatch({ type: RECIEVE_TEA, tea: tea})
    fetchAllTeas: () => dispatch(fetchAllTeas())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(TeaIndex);