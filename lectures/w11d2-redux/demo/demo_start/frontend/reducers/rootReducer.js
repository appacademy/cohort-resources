import {combineReducers} from "redux";
import teasReducer from "./teasReducer";


const rootReducer = combineReducers({
    teas: teasReducer,
    
});

export default rootReducer;