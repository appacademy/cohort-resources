import { combineReducers } from 'redux';
import teasReducer from './teas_reducer';

const rootReducer = combineReducers({
    teas: teasReducer,
    cookies: () => ({}),
    biscuits: () => ({})
})

export default rootReducer;

// {
//     teas: {1: {flavor: ''}},
//     biscuits: {},
//     cookies: {}
// }