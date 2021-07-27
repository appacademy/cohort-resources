import { RECEIVE_TEA_DETAIL } from '../actions/tea_actions';

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_TEA_DETAIL:
            return {...state, ...action.payload.transactions} //transactions structured thru jBuilder
        default:
            return state;
    }
}

export default transactionsReducer;