import { combineReducers } from "redux";
import teasReducer from "./teas_reducer";
import cookiesReducer from "./cookie_reducer";


const rootReducer = combineReducers({
    teas: teasReducer,
    cookies: cookiesReducer
})

export default rootReducer;