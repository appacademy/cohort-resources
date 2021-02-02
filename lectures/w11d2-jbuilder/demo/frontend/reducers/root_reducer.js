import { combineReducers } from 'redux';
import cookiesReducer from './cookies_reducer';
import teasReducer from './tea_reducer';
import transactionsReducer from "./transaction_reducer";

const rootReducer = combineReducers({
    teas: teasReducer, // create slice of state with key of teas, 
                        // and points to teas reducer
    cookies: cookiesReducer,
    transactions: transactionsReducer
                    

})

export default rootReducer;