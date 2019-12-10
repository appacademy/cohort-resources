// ES5 prototypal inheritance pattern
// UNDERSTANDING THIS PATTERN IS VERY IMPORTANT FOR THE JAVASCRIPT ASSESSMENT

function inherits(ParentClass, ChildClass) {
    function SurrogateClass() {};
    SurrogateClass.prototype = ParentClass.prototype;
    let surrogateInstance = new SurrogateClass();
    ChildClass.prototype = surrogateInstance;
    ChildClass.prototype.constructor = ChildClass;
}

module.exports = inherits;


// This can also be achieved my monkey-patching the Function.prototype

Function.prototype.inherits = function(ParentClass) {
    function SurrogateClass() {};
    SurrogateClass.prototype = ParentClass.prototype;
    let surrogateInstance = new SurrogateClass();
    this.prototype = surrogateInstance;
    this.prototype.constructor = this;
}