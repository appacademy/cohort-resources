export const myThunk = (store) => (next) => (action) => {
  // debugger;
  if (typeof action === 'function') {
    return action(store.dispatch);
  }

  return next(action);
}