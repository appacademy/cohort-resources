import { RECEIVE_TEA_DETAIL } from "../actions/tea_actions";

const transactionsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TEA_DETAIL:
      return {...state, ...action.transactions};
      break;
  
    default:
      return state;
      break;
  }
  
}

export default transactionsReducer;