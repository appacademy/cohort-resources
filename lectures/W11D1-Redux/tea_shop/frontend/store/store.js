import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

// create store takes two args, first is a func that returns an object(reducer)
// the second arg is a "preloaded state"
// this is basic 
// const store = createStore(() => ({}), preloadedState)

// this is the better way

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
}

export default configureStore;