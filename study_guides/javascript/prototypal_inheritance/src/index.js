const Animal = require("./animal")
const Dog = require("./dog")

document.addEventListener("DOMContentLoaded",()=>{
    const dog = new Dog();
    dog.speak();
})