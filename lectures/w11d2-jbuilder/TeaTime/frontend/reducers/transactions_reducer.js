import { RECEIVE_TEA_DETAIL } from '../actions/tea_actions';

const transactionsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TEA_DETAIL:
      return { ...nextState, ...action.payload.transactions };
    default:
      return state;
  }
}

export default transactionsReducer;