import { createStore } from 'redux';
// import teasReducer from './../reducers/tea_reducer';
import rootReducer from './../reducers/root_reducer';


const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
} 

export default configureStore;