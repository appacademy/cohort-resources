import {legacy_createStore, combineReducers} from "redux"
import teasReducer from "./teasReducer"

const dummyReducer = (state = {}, action) => {
    // debugger
    return state
}

const rootReducer = combineReducers({
    dummy: dummyReducer,
    teas: teasReducer
})

const configureStore = (preloadedState = {}) => {
    return legacy_createStore(rootReducer, preloadedState)
}

export default configureStore;