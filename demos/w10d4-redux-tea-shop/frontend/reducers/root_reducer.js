import { combineReducers } from 'redux';
import teasReducer from './tea_reducer';

const rootReducer = combineReducers({
    teas: teasReducer,
    cookies: () => ({}),
    biscuits: () => ({})
});

export default rootReducer;

