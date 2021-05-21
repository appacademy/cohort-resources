import { combineReducers } from 'redux';
import teasReducer from './tea_reducer';
import cookiesReducer from './cookies_reducer';

const rootReducer = combineReducers({
    teas: teasReducer,
    cookies: cookiesReducer,
    banana: () => ({})
})

export default rootReducer;