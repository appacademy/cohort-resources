export const thunk = function(store) {
  return function(next) {
    return function(action) {
      if (typeof action === 'function') {
        debugger
        action(store.dispatch, store.getState);
      } else {
        return next(action);
      }
    }
  }
}