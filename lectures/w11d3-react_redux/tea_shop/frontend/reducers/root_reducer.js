import { combineReducers } from "redux";
import teasReducer from "./teas_reducer";

const rootReducer = combineReducers({
    teas: teasReducer
    // users: usersReducer, 
    // stocks: stocksReducer, 
});

export default rootReducer;