import { RECEIVE_TEA } from "../actions/tea_actions";


// takes 2 args, the first is the state, second arg is the action

const teasReducer = (state = {}, action) => {
    Object.freeze(state);
    // the first arg that object.assign takes is a target object
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea
            return nextState;
        default:
            return state;
    }
    
}
export default teasReducer;