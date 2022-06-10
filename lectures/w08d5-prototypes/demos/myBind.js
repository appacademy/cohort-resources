class Cat {
    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log(`${this.name} says meow!`);
    }
}

// Function.prototype.myBind = function(ctx){
//     return () => {
//         return this.apply(ctx)
//     }
// }

Function.prototype.myBind = function(ctx){
    let that = this;
    return function(){
        return that.apply(ctx);
    }
}




const curie = new Cat("Curie");
// curie.meow();
setTimeout(curie.meow.myBind(curie), 1000);



