import { combineReducers } from 'redux';

import entities from './entities_reducer';
import ui from './ui_reducer';

export default combineReducers({
  entities,
  ui,
});
