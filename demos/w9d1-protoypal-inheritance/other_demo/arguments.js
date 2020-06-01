Array.prototype.mySlice = function () {
  const sliced = [];
  debugger
  for (let i = 0; i < this.length; i++) {
    sliced.push(this[i]);
  }
  debugger
  return sliced;
}
​
function doSomething() {
  debugger
  const args = Array.prototype.mySlice.call(arguments); //call takes the first element as the ctx
  // first argument of .call is the context
  debugger
  args.forEach((arg) => console.log(arg));
}
​
// doSomething('banana', 2, ['hello', 'goodbye']);
​
// use rest operator here to collect all arguments into an array
function doSomethingElse(...args) {
  // pause at this debugger and show that `args` is an Array.
  debugger
  // using spread operator here to spread args back out. Pass null as first arg
  // since this method doesn't care about context
  doSomething.call(null, ...args)
}
​
// doSomethingElse('banana', 2, ['hello', 'goodbye']);
​
function curryingExample(str) {
  let strCurry = "";
  strCurry += str;
  debugger
  return function curryReturn(str) {
    debugger
    if (str === undefined) {
      return strCurry;
    }
    strCurry += str;
    return curryReturn;
  }
};
// console.log(curryingExample("my")("name")("is")("carlos")())
let first = curryingExample("my"); //returns uninvoked function 
// console.log(first)
let second = first('name');
let third = second('is');
let fourth = third('carlos');
console.log(fourth());
