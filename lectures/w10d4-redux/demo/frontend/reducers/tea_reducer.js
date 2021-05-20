import { RECEIVE_TEA } from "../actions/tea_action";

const teasReducer = (state = {}, action) => {
    Object.freeze(state)
    debugger
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea;
            return nextState;
        default:
            return state;
    }
}
 
export default teasReducer;