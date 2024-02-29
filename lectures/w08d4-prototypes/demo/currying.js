function madLib(noun_one, verb, noun_two) {
  return `${noun_one} ${verb}s on the ${noun_two}`;
};

const curriedMadLib = function(noun_one) {
  return function(verb) {
    return function(noun_two) {
      return `${noun_one} ${verb}s on the ${noun_two}`;
    }
  }
};

const fatArrowCurriedMadLib = noun_one => verb => noun_two => {
  return `${noun_one} ${verb}s on the ${noun_two}`;
};

Function.prototype.myCurry = function(num_args) {
  let that = this;
  let argList = [];

  return function _curry(single_arg) {
    argList.push(single_arg);

    if (argList.length === num_args) {
      return that(...argList);
    } else {
      return _curry;
    }
  }
};

// `throttle`
// allows us to rate-limit a function (add a cooldown)

// `debounce`
// adds a countdown or delay to the execution of a function