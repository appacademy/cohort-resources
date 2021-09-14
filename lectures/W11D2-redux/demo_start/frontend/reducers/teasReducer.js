import { RECEIVED_TEA, REMOVED_TEA } from "../actions/teaActions";


const teasReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVED_TEA:
           newState[action.tea.id] = action.tea
            return newState
       

        default:
            return oldState
    }
}

export default teasReducer;




