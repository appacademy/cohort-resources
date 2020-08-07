import { createStore, applyMiddleware } from 'redux';
// import teasReducer from '../reducers/teas_reducer';
import rootReducer from '../reducers/root_reducer';
import {myMiddleware} from '../middleware/my_middleware';
import { myThunk } from '../middleware/my_thunk';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const store = createStore(() => ({}), preloadedState);

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer,
      preloadedState,
      applyMiddleware(
        thunk,
        logger
      ));
};

export default configureStore;
