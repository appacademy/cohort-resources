import { RECEIVE_TEA_DETAIL } from "../actions/tea_actions";

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state) // create copy of state


    switch (action.type) {
        case RECEIVE_TEA_DETAIL:
            // debugger
            // return { ...state, ...action.payload.transactions };
            return Object.assign(nextState, action.payload.transactions)
        default:
            return state;
    }
}

export default transactionsReducer;