import { combineReducers } from "redux";
import teasReducer from "./teasReducer";
import transactionsReducer from "./transactionsReducer";
import likesReducer from "./likesReducer";
import usersReducer from "./usersReducer";

const entitiesReducer = combineReducers({
  teas: teasReducer,
  transactions: transactionsReducer,
  likes: likesReducer,
  users: usersReducer
})

export default entitiesReducer