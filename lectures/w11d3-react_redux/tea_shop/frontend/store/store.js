import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

// Reducer = function that returns a POJO
// const rootReducer = () => {
//     return {};
// }

// const store = createStore(rootReducer, preloadedState={});

// Export a configureStore function = convention
// Why? => to have the option to pass a 
// preloaded state in the callback
const configureStore = (preloadedState={}) => {
    return createStore(rootReducer, preloadedState);
    // createStore returns a store with predefined 
    // functions on it like getState and dispatch
}

export default configureStore;