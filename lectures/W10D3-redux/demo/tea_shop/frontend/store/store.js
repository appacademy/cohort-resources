import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

// arguments to createStore
    // 1: reducer function (rootReducer) pretty much always will be rootReducer
    // 2: (optional) preloadedState
    // 3: (optional) enhancers (middleware)

// this is not dynamic
// the preloaded state has to be hardcoded here with this pattern
// const store = createStore(() => { return {}}, { users: 'howdy' });

// this is more dynamic
// this allows you to define a preloaded state in another file, 
// because we are not invoking the createStore function immediately
const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
}

export default configureStore;




// when exporting 1 thing from a file
// export default thing => import thing from 'place'

// when exporting multiple things from a file
// export thing => import { thing } from 'place'