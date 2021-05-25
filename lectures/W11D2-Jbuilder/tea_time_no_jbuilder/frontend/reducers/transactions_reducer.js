import { RECEIVE_TEA_DETAIL } from "../actions/tea_actions";

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TEA_DETAIL:
            return {...state, ...action.payload.transactions};
        default:
            return state;
    }
};

export default transactionsReducer;