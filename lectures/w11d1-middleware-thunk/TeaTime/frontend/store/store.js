import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import myThunk from './myThunk.js '
// import teasReducer from '../reducers/tea_reducer';
// const store = createStore(() => ({}),preloadedState); // () == implicit return

// export default store;

/////////////////////////////////

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer,
        preloadedState, 
        applyMiddleware(myThunk, logger) //take in some middlewaresss
        // applyMiddleware(logger) //breaks reducers 
        //thunk has to come before logger 
    )

}

export default configureStore;