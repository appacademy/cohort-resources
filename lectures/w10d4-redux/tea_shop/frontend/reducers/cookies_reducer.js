const cookiesReducer = (oldState = {}, action) => {
    // SHOULD NEVER MUTATE OLDSTATE !important
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState); // create a copy of oldState
    // let nextState = { ...oldState }; same thing as above
    switch (action.type) {
        default:
            return oldState;
    }
};

export default cookiesReducer; 