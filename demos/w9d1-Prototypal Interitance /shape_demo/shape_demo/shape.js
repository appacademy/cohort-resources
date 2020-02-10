function Shape(color){
    this.color = color; 

};

Shape.prototype.sayHello = function(){
    console.log(`Hello, I am ${this.color}.`);
};

module.exports = Shape;