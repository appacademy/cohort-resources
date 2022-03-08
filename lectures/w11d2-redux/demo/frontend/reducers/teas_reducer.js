import { RECEIVE_TEA } from "../actions/tea_actions";

const teasReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    debugger;
    switch (action.type) {
        case RECEIVE_TEA:
            nextState[action.tea.id] = action.tea
            return nextState;
        default:
            return state;
    }
}

export default teasReducer;