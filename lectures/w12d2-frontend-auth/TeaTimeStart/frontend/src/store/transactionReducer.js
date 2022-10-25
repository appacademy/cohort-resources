import { RECEIVE_TEA_DETAIL } from "./teaReducer";

const transactionReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type){
        case RECEIVE_TEA_DETAIL:
            return {...nextState, ...action.payload.transactions}
        default:
            return nextState;
    }


}

export default transactionReducer;