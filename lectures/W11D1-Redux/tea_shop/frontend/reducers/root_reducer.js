import { combineReducers } from "redux";
import teasReducer from "./teas_reducer";

const rootReducer = combineReducers({
    teas: teasReducer,
})
export default rootReducer;
