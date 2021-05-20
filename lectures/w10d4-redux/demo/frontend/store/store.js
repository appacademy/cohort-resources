import { createStore } from 'redux';
// import teasReducer from '../reducers/tea_reducer';
import rootReducer from '../reducers/root_reducer';

// const store = createStore(() => ({}),preLoadedState)

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer, preLoadedState)
}
 
export default configureStore