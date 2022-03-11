import { createStore, applyMiddleware } from 'redux';
import { myThunk } from './my_thunk';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/root_reducer';
// import teasReducer from '../reducers/teas_reducer';

// const store = createStore(() => ({}), preloadedState)

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer, 
        preloadedState, 
        // thunk first, others between, logger last
        // logger only uses action objects
        applyMiddleware(myThunk, logger)
    );
}

export default configureStore;