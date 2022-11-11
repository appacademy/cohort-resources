import { legacy_createStore as createStore} from 'redux'
// import teasReducer from '../reducers/teas_reducer';
import rootReducer from '../reducers/root_reducer';

// const store = createStore(() => ({}), preloadedState)
// const preloadedState = { 
//     userID: 4,
//     usermane: "testUser"
// }

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState)
}

export default configureStore;