import { RECEIVE_TEA_DETAIL } from "../actions/tea_actions"

const transactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_TEA_DETAIL:
            return Object.assign(nextState, action.payload.transactions);        
        default:
            return oldState;
    }
}

export default transactionsReducer;