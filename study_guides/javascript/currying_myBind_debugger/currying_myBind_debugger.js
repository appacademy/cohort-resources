Function.prototype.myCurry = function(num){
    let that = this;
    let arr = [];
    debugger
    return function _function(...args){
        arr.push(...args)
        debugger
        if(arr.length >= num){
            return that(...(arr.slice(0,num)))
        }

        return _function
    }
}

let curry = function(func,num){
    let arr = [];
    debugger
    return function _function(...args){
        debugger
        arr.push(...args)
        if(arr.length >= num){
            return func.apply("banana",arr.slice(0,num))
        }

        return _function
    }
}
function curryWithContext(func, context, numArgs) {
    const args = [];

    return function _curryWithContext(...elements) {
        args.push(...elements);

        if (args.length < numArgs) {
            return _curryWithContext;
        }

        return func.apply(context, args.slice(0, numArgs));
    }
}



let sum = function(...args){
    debugger
    let sum = 0; 
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }

    return sum;
}

// console.log(curry(sum,4)(1)(2)(3)(5)) #instance where they pass sufficient arguments one at a time
// console.log(sum.myCurry(3)(1,2,3,4)); #instance where they pass more arguments than needed
// console.log(curryWithContext(carlos.greet, sandra, 4)('Hi')('Hello')('Wassup')('Yo'));


Function.prototype.myBind = function(context,...bargs){
    let that = this;
    debugger
    return function(cargs){
        return that.apply(context,bargs.concat(cargs))
    }
}

const carlos = {
    name: "carlos",
    age: 24,
    sayName: function(){
        debugger
        console.log(this.name)
    },
    greet: function(...greetings) {
        const greetingsString = greetings.join(", ");
        return `${greetingsString} my name is ${this.name}`;
    }
}

const sandra = {
    name: "sandra",
    age: 30
}

// carlos.sayName.myBind(sandra)() //run this to test myBind and trace the call path
