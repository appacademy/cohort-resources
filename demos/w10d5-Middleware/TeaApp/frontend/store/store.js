import { createStore } from 'redux';
import rootReducer from "../reducers/root_reducer";
import { applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

// const myMiddleware = (store) => {
//     return (next) => {
//         return (action) => {
//             debugger
//             console.log("store: ", store )
//             console.log("action: ", action )
//             console.log("next: ", next )
//             debugger
//             next(action)
//         }
//     }
// };
// const myOtherMiddleware = (store) => {
//     return (next) => {
//         return (action) => {
//             debugger
//             console.log("other store: ", store )
//             console.log("other action: ", action )
//             console.log("other next: ", next )
//             debugger
//             next(action)
//         }
//     }
// }

// const myThunk = (store) => (next) => (action) => {
//     debugger;
//     if (typeof action === "function") {
//         return action(store.dispatch);
//     } else {
//         return next(action);
//     }
// };

// const myOtherMiddleware = (store) => (next) => (action) => {
//     return next(action);
// };


const configureStore = ( preloadedState = {} ) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    );
}

export default configureStore;