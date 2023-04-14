import { legacy_createStore, combineReducers} from 'redux';
import teaReducer from './teaReducer';

const rootReducer = combineReducers({
    teas: teaReducer,
    users: (state, action) => ({}),
    transactions: (state, action) => ({}),
    carts: (state, action) => ({})
});

const configureStore = (preloadedState={}) => (
    legacy_createStore(rootReducer, preloadedState)
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