import { RECEIVE_TEA_DETAIL } from '../actions/tea_actions';

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TEA_DETAIL:
            // return Object.assign(nextState, action.payload.transactions);
            return Object.assign({}, state, action.payload.transactions);
        default:
            return state;
    }
};

export default transactionsReducer;