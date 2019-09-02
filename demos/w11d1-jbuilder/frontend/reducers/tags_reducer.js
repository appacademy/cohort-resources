import { RECEIVE_TODO } from '../actions/todo_actions';

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TODO:
            return Object.assign({}, state, action.payload.tags);

        default:
            return state;
    }
};

export default tagsReducer;