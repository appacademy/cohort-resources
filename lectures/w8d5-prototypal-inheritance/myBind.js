// basic binding function
Function.prototype.myBind = function(ctx) {
  let func = this; // this._tick
  return function(){ // return value of bind
    return func.apply(ctx); // invokes this._tick on the context
  }
}


// you might also see it with the arrow function, which looks much cleaner!
// don't use this on the assessment
Function.prototype.myBind = function(ctx) {
  return () => this.apply(ctx);
}




// myBind with arguments using arguments keyword
Function.prototype.myBind = function(ctx) {
  let func = this; 
  let bindArgs = Array.from(arguments).slice(1);
  return function(){ 
    let callArgs = Array.from(arguments);
    let allArgs = bindArgs.concat(callArgs);
    return func.apply(ctx, allArgs);
  }
}


// myBind with arguments using spread operator
Function.prototype.myBind = function(ctx, ...bindArgs) {
  let func = this;
  return function(...callArgs){
    let allArgs = bindArgs.concat(callArgs);
    return func.apply(ctx, allArgs);
  }
}