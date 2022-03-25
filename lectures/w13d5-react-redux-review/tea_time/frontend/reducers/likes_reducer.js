import {RECEIVE_TEA_DETAIL} from '../actions/tea_actions'

const likesReducer = (state={}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_TEA_DETAIL:
            debugger
            return Object.assign({}, nextState, action.payload.likes); 
        default:
            return state;
    }
}

export default likesReducer;