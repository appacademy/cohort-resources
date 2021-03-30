import { RECEIVE_TEA_DETAIL } from '../actions/tea_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TEA_DETAIL:
      return { ...nextState, ...action.payload.users };
    default:
      return state;
  }
}

export default usersReducer;