import { RECEIVE_TEA_DETAIL } from "./teaReducer";

const transactionReducer = (state={}, action) => {
    // debugger
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type){
        case RECEIVE_TEA_DETAIL:
            // debugger
            return {...nextState, ...action.payload.transactions}
        default:
            return nextState;
    }

}

export default transactionReducer;