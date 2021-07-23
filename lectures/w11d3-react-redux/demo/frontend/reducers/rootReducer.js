import { combineReducers } from "redux";
import teasReducer from "./teasReducer";

// combines reducers under new keys
const rootReducer = combineReducers({
  teas: teasReducer,
  cookies: () => ({})
});

export default rootReducer;