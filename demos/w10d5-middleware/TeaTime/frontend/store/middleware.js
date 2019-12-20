export const myMiddleware = store => {
    console.log("I am the top-level middleware function"); 
    // debugger; 
    return (next) => {
        console.log("I am the function with next as the argument"); 
        console.log("next: ", next); 
        // debugger; 
        return (action) => {
            console.log("I am in the inner most function"); 
            console.log("action: ", action); 
            // debugger; 
            return next(action); 
        }
    }
}

export const myThunk = store => next => action => {
    console.log('i am thunk'); 
    debugger; 
    if (typeof action === 'function') {
        return action(store.dispatch); 
    } 
    return next(action); 
}