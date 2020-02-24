import { combineReducers } from 'redux';

// import todosReducer from './todos_reducer';
// import stepsReducer from './steps_reducer';
// import usersReducer from './users_reducer';
// import tagsReducer from './tags_reducer';
// import taggingsReducer from './taggings_reducer';
import errorsReducer from './error_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer
  // todos: todosReducer,
  // steps: stepsReducer,
  // users: usersReducer,
  // tags: tagsReducer,
  // taggings: taggingsReducer
 });

export default rootReducer;
