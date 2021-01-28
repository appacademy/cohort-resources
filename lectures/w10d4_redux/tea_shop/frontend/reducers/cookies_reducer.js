const cookiesReducer = (oldState = {},action) => {
    console.log('in cookies reducer')
    switch (action.type) {
        default:
            return oldState;
    }
}

export default cookiesReducer;