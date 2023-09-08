class Dog{
    constructor(name){
        this.name = name
    }

    bark(){
        // this
        console.log(`${this.name} says woof`)
    }

    greet(d1, d2, d3){
        console.log(`${this.name} says woof to ${d1.name}, ${d2.name}, and ${d3.name}`)
    }
}

Function.prototype.myBind = function(ctx){
    let that = this; // 'this' is the receiver of my bind 
    return function(){
        that.apply(ctx)
    }
}

Function.prototype.myBind2 = function(ctx){
    let that = this; // 'this' is the receiver of my bind 
    const bindArgs = Array.from(arguments).slice(1);
    return function(){
        const callArgs = Array.from(arguments)
        that.apply(ctx, bindArgs.concat(callArgs))
    }
}

Function.prototype.myBind3 = function(ctx, ...bindArgs){
    let that = this; // 'this' is the receiver of my bind 
    return function(...callArgs){
        that.apply(ctx, bindArgs.concat(callArgs))
    }
}

Function.prototype.myBind3 = function(ctx, ...bindArgs){
    let that = this; // 'this' is the receiver of my bind 
    return function(...callArgs){
        that.call(ctx, ...bindArgs, ...callArgs)
    }
}





let dog = new Dog("Remy");
let dog2 = new Dog("Fido1");
let dog3 = new Dog("Fido2");
let dog4 = new Dog("Fido3");

// dog.bark()
// setTimeout(dog.bark, 1000) // we lose context because callback functions are invoked func style (ctx: window/global)
// setTimeout(dog.bark.bind(dog), 1000)
// setTimeout(dog.bark.myBind(dog), 1000)


// setTimeout(dog.bark, 1000)
// setTimeout(dog.greet.myBind3(dog, dog2,dog3,dog4), 1000)

dog.greet.myBind3(dog)(dog2,dog3,dog4)
dog.greet.myBind3(dog, dog2)(dog3,dog4)
dog.greet.myBind3(dog, dog2, dog3, dog4)()

// setTimeout(dog.greet.myBind2(dog, dog2, dog3, dog4), 1000)

// setTimeout(dog.greet.myBind2(dog)(dog2,dog3,dog4), 1000) //This does not work because we must pass an uninvoked function to setTimeout, once we run it with bind time arguments, the function returns undefined and we are basically trying to run undefined(dog2,dog3,dog4)