import { combineReducers } from "redux";
import teaReducer from "./teaReducer";
import transactionReducer from "./transactionReducer";
import likeReducer from "./likeReducer";
import userReducer from "./userReducer";

const entitiesReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer,
  likes: likeReducer,
  users: userReducer
})

export default entitiesReducer