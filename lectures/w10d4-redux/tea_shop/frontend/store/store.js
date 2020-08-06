import { createStore } from 'redux';
// import teasReducer from '../reducers/teas_reducer';
import rootReducer from '../reducers/root_reducer';

// const store = createStore(() => ({}), preloadedState);

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
};

export default configureStore;
