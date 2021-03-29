const myThunk = (store) => {
  return (next) => {
    return (action) => {
      if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
        // action: TeaAPIUtil.fetchTeas().then(teas => dispatch(receiveTeas(teas)))
      } else {
        // next is the next middleware (if there is one)
        // otherwise next is a dispatch to reducers
        return next(action);
        // action: { type: RECEIVE_TEAS, teas: [...]}
      }
    }
  }
}

export default myThunk;