import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import myThunk from '../middleware/my_middleware';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// const teas = {
//   1: {
//     id: 1,
//     flavor: "green",
//     amount: 2.75
//   },
//   2: {
//     id: 2,
//     flavor: "oolong",
//     amount: 3
//   }
// };

// const myMiddleware = (store) => {
//   console.log("I'm in the top level middleware function");
//   console.log("store: ", store);
//   // debugger
//   return (next) => {
//     console.log("I'm in the function where next is the argument");
//     console.log("next: ", next);
//     // debugger
//     return (action) => {
//       console.log("I'm in the innermost function");
//       console.log("action: ", action);
//       debugger

//       // store; next; action;
//       next(action);
//     };
//   };
// };

// const myOtherMiddleware = (store) => {
//   console.log("Other: I'm in the top level middleware function");
//   console.log("store: ", store);
//   // debugger
//   return (next) => {
//     console.log("Other: I'm in the function where next is the argument");
//     console.log("next: ", next);
//     // debugger
//     return (action) => {
//       console.log("Other: I'm in the innermost function");
//       console.log("action: ", action);
//       debugger

//       // store; next; action;
//       next(action);
//     };
//   };
// };

// const myMiddleware = (store) => (next) => (action) => {
//   return next(action);
// };

// const myOtherMiddleware = (store) => (next) => (action) => {
//   return next(action);
// };


const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(myThunk)
    // applyMiddleware(thunk, logger)
  );
};

export default configureStore;






