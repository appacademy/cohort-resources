class Cat {
    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log(`${this.name} says meow!`);
    }
}

// function Cat(name){
//     this.name = name
// }

// Function.prototype.myBind = function(ctx){
//     return () => {
//         return this.apply(ctx)
//     }
// }

Function.prototype.myBind = function(ctx, ...bindArgs){ // [arg1, arg2]
    return function(...callArgs){   //// [arg3, arg4]
        return that.apply(ctx, bindArgs.concat(callArgs));
    }
}






const drogo = new Cat("Drogo");
// drogo.meow();
setTimeout(drogo.meow, 1000);
setTimeout(drogo.meow.myBind(drogo), 1000);
// setTimeout(drogo.meow.myBind(drogo, arg1,arg2)(arg3,arg4), 1000);
// setTimeout(drogo.meow.bind(drogo), 1000);



