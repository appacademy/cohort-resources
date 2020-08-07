export const myMiddleware = (store) => {
  console.log("I'm in the top level middleware function");
  console.log("store: ", store);

  return (next) => {
    console.log("I'm in the function where next is defined");
    console.log("next: ", next);

    return (action) => {
      console.log("I'm in the innermost function");
      console.log("action: ", action);
      
      return next(action);
    }
    
  }
}