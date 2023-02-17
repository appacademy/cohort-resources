import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import teaReducer from "./teaReducer";

const rootReducer = combineReducers({
  teas: teaReducer, 
  transactions: () => ({}),
});

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const configureStore = (preloadedState = {}) => {
  return legacy_createStore(rootReducer, preloadedState, applyMiddleware(...middleware))
};

export default configureStore;