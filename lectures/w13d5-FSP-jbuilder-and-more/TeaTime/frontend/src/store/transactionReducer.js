
import { RECEIVE_TEA } from "./teaReducer";
const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';

// ------------ ACTION CREATORS -------- //

export const receiveTransactions = transactions => {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions 
  }
};

// ----------- THUNK ACTION CREATORS ---------- //

export const fetchTransactions = (teaId) => async (dispatch) => {
  const res = await fetch(`/api/teas/${teaId}/transactions`);
  const transactions = await res.json();
  dispatch(receiveTransactions(transactions));
};

// ---------------- REDUCER --------------- //



const transactionReducer = (state = {}, action) => {
  const nextState = Object.assign({}, Object.freeze(state))

  switch (action.type) {
    // case RECEIVE_TRANSACTIONS:
    //   return { ...nextState, ...action.transactions};
    case RECEIVE_TEA:
      return { ...nextState, ...action.payload.transactions};
    default:
      return state;
  }
}

export default transactionReducer;