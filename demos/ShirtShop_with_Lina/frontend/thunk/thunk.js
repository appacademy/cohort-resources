// const myOtherMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       if (typeof action === 'function') {
//         //debugger
//         return action(store.dispatch);
//         // return action(dispatch)
//       }

//       return next(action)
//     };
//   };
// };

export const myThunk = (store) => (next) => (action) => {
  // export const myThunk = ({ dispatch }) => (next) => (action) => {
  //debugger
  if (typeof action === 'function') {
    //debugger
    return action(store.dispatch);
    // return action(dispatch)
  }
  //next is the next middleware
  return next(action)
}