// simple myBind with no args
// Function.prototype.myBind = function (ctx) {
//   return () => this.apply(ctx);
// };

// no fat arrow
// Function.prototype.myBind = function (ctx) {
//   const that = this;

//   return function () {
//     return that.apply(ctx);
//   };
// };

// myBind with arguments
// Function.prototype.myBind = function (ctx, ...bindArgs) {
//   return (...callArgs) => {
//     return this.apply(ctx, bindArgs.concat(callArgs));
//   };
// };

// no fat arrow KNOW THIS!!! UNDERSTAND THIS!!! 
Function.prototype.myBind = function (ctx, ...bindArgs) {
  const that = this;

  return function (...callArgs) {
    return that.call(ctx, ...bindArgs.concat(callArgs));
  };
};

const nemo = {
  name: 'Captain Nemo',

  eat: function() {
    return this.name + ' is eating.'
  },

  greet: function(action, otherArg) {
    return `${this.name} says meow then ${action}s ${otherArg}.`;
  },

};

const sabriel = {
  name: "Sabriel"
}

// have nemo eat
// console.log(nemo.eat());
// have sabriel eat
// console.log(nemo.eat.myBind(sabriel)());

// have nemo greet
// console.log(nemo.greet('saunter', 'away'));
// have sabriel greet
// let sabrielGreeting = nemo.greet.myBind(sabriel, 'pur', 'softly');
let sabrielGreeting = nemo.greet.myBind(sabriel, 'pur');
// let sabrielGreeting = nemo.greet.myBind(sabriel);
console.log(sabrielGreeting('softly'));
