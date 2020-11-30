import { combineReducers } from 'redux';
import teasReducer from './teas_reducer';

const rootReducer = combineReducers({
    teas: teasReducer, // teas slice of state, managed by teasReducer
    cookies: () => ({}),
    biscuits: () => ({})
});

export default rootReducer;
