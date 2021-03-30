import { combineReducers } from 'redux';
import teasReducer from './teas_reducer';
import transactionsReducer from './transactions_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
    teas: teasReducer,
    transactions: transactionsReducer,
    users: usersReducer,
    cookies: () => ({}),
    biscuits: () => ({})
})

export default rootReducer;

// {
//     teas: {1: {flavor: ''}},
//     biscuits: {},
//     cookies: {}
// }