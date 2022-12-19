import { RECEIVE_TEA_DETAIL } from "./teaReducer";


const transactionReducer = (state={}, action) => {
  Object.freeze(state);
  const newState = {...state}
  switch(action.type){
    case RECEIVE_TEA_DETAIL:
      return {...newState, ...action.payload.transactions}
    default:
      return state;
  }
}


export default transactionReducer;