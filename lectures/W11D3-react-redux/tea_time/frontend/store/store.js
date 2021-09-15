import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";



// const preloadedState = {

// }
// const store = createStore(() => ({}), preloadedState)

const configureStore = (preloadedState = {}) => {
    // debugger
    return createStore(rootReducer, preloadedState)
}

export default configureStore;

