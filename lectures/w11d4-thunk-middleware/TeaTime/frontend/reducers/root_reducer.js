import { combineReducers } from "redux";
import cookiesReducer from "./cookies_reducer";
import teasReducer from "./teas_reducer";

const rootReducer = combineReducers({
    teas: teasReducer, // becomes return value of teasReducer
    cookies: cookiesReducer
})

export default rootReducer;