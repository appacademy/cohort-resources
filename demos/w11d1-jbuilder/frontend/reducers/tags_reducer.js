import { RECEIVE_TODOS } from '../actions/todo_actions';

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TODOS:
            return action.payload.tags;
        default:
            return state;
    }
}

export default tagsReducer;