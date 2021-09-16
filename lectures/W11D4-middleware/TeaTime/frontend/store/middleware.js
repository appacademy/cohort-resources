// const myMiddleware = store => next => action => {


const myMiddleware = (store) => {
  console.log("I just received the store!!!");
  return (next) => {
    console.log("I just received the 'next'. The 'next' is: ", next);
    return (action) => {
      console.log("I just received the action! The action is: ", action)
      // do some stuff
      return next(action);
    };
  };
};

export default myMiddleware;