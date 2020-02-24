import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import stepsReducer from './steps_reducer';
import errorsReducer from './error_reducer';
import usersReducer from './users_reducer';
import tagsReducer from './tags_reducer';
import taggingsReducer from './taggings_reducer';

const entitiesReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer,
    users: usersReducer,
    // errors: errorsReducer,
    tags: tagsReducer,
    taggings: taggingsReducer
});

export default entitiesReducer;