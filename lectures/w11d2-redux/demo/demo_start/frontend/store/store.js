import {createStore} from "redux";
import rootReducer from "../reducers/rootReducer";

// createstore takes in a reducer, and a preloadedState

const configureStore = (preloadedState={})=>{
    return createStore(rootReducer, preloadedState);
}

export default configureStore;