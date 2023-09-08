class Cat {
    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log(`${this.name} says meow!`);
    }
}

function Cat(name){
    this.name = name
}

Cat.prototype.meow = function(){
    console.log(`${thisname} says meow!`)
}



const drogo = new Cat("Drogo");
drogo.meow();
// setTimeout(drogo.meow, 1000);
// setTimeout(drogo.meow.myBind(drogo), 1000);

// setTimeout(drogo.meow.myBind(drogo, arg1,arg2)(arg3,arg4), 1000);
// setTimeout(drogo.meow.bind(drogo), 1000);



