import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
// import teasReducer from '../reducers/teas_reducer';

// const store = createStore(() => ({}), preloadedState)

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
}

export default configureStore;