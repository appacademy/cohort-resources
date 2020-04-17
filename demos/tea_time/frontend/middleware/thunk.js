const thunk = store => {
    debugger
    return next => {
        debugger
        return action => {
            debugger
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            } else {
                return next(action);
            }
        };
    };
};

export default thunk;