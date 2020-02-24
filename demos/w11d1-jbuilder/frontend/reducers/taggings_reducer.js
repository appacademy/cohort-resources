import { RECEIVE_TODOS } from '../actions/todo_actions';

const taggingsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TODOS:
            return action.payload.taggings;
        default:
            return state;
    }
}

export default taggingsReducer;