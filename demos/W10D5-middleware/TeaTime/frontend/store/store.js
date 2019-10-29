import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const myMiddleware = (store) => {

//   return (next) => {

//     return (action) => {
//       store; next; action;
//       debugger
//       next(action)
//     }
//   }
// }

// const myOtherMiddleware = (store) => {

//   return (next) => {

//     return (action) => {
//       console.log('other middleware')
//       store; next; action;
//       debugger
//     }
//   }
// }

// const myThunk = (store) => (next) => (action) => {
//   debugger
//   if (typeof action === 'function') {
//     return action(store.dispatch)
//   } else {
//     return next(action)
//   }
// }

// const myOtherMiddleware = (store) => (next) => (action) => {
//   return next(action)
// }

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;