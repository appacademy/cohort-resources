import { RECEIVE_COOKIE } from "../actions/cookies_actions";



const cookiesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    debugger;
    switch (action.type) {
        case RECEIVE_COOKIE:
            nextState[action.cookie.id] = action.cookie;
            return nextState;
        default:
            return state;
    }
}

export default cookiesReducer;