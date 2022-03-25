import { RECEIVE_TEA_DETAIL } from "../actions/tea_actions";

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger;
    switch(action.type) {
        case RECEIVE_TEA_DETAIL:
            debugger;
            return {...state, ...action.payload.transactions};
        default:
            return state;
    }
}

export default transactionsReducer