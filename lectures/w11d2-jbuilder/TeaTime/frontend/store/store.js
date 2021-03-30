import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import myThunk from './myThunk';
import myMiddleware from './myMiddleware';
// import teasReducer from '../reducers/teas_reducer';
import rootReducer from '../reducers/root_reducer';

// const store = createStore(() => ({}), preloadedState, enhancers)

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer, 
        preloadedState, 
        applyMiddleware(thunk, logger)
    );
}

export default configureStore;