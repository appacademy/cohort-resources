export const myMiddleware = (store) => {
    console.log("I'm in the top level middleware funciton")
    console.log("store: ", store)
    debugger
    return (next) => {
        console.log("I'm in the funciton where next is the argument")
        console.log("next: ", next)
        debugger
        return (action) => {
            console.log("I'm in the innermost function")
            console.log('action: ', action)
            debugger
            return next(action)
        }   
    }
}

export const myThunk = (store) => {
    // console.log("I'm in the top level middleware funciton")
    // console.log("store: ", store)
    // debugger
    return (next) => {
        // console.log("I'm in the funciton where next is the argument")
        // console.log("next: ", next)
        // debugger
        return (action) => {
            // console.log("I'm in the innermost function")
            // console.log('action: ', action)
            debugger
            if (typeof action === 'function') {
                debugger
                return action(store.dispatch, store.getState)
            }
            debugger
            return next(action)
        }
    }
}