import { legacy_createStore, combineReducers } from "redux";
import teaReducer from "./teaReducer";

const rootReducer = combineReducers({
  teas: teaReducer
});

const configureStore = (preloadedState = {}) => {
  return legacy_createStore(rootReducer, preloadedState)
};

export default configureStore;