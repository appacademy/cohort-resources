import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
// import teasReducer from '../reducers/tea_reducer';
// const store = createStore(() => ({}),preloadedState); // () == implicit return

// export default store;

/////////////////////////////////

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer,preloadedState)
}

export default configureStore;