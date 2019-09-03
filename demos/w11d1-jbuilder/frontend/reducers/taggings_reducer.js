import { RECEIVE_TODO } from '../actions/todo_actions';

const taggingsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TODO:
            return Object.assign({}, state, action.payload.taggings);
    
        default:
            return state;
    }
};

export default taggingsReducer;