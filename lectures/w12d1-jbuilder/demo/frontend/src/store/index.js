import { legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import teaReducer from './teaReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
    teas: teaReducer,
    users: (state, action) => ({}),
    transactions: transactionReducer,
    carts: (state, action) => ({})
});

const myMiddleware = store => { // gives access to dispatch and getState
    // console.log('here i am');
    return next => { // next piece of middleware in the chain
        // console.log('also here');
        return action => {
            // console.log(action);
            // console.log('finally here');
            // console.log(next);
            next(action);
        };
    };
};

const myThunk = store => next => action => {
    if (action instanceof Function ) {
        return action(store.dispatch, store.getState);
    } else {
        next(action);
    }
};

const configureStore = (preloadedState={}) => (
    legacy_createStore(rootReducer, preloadedState, applyMiddleware(myMiddleware, thunk, logger))
);

export default configureStore;

// what is a reducer?
// a pure function:
// - is deterministic
// - has no side effects
// - never mutates the input

// takes in two arguments
// state, action

// creates a new state based on incoming action

