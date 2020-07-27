const inherits = function(childClass, parentClass) {
    // 1
    function Surrogate() {};
    // 2
    Surrogate.prototype = parentClass.prototype;
    // 3
    childClass.prototype = new Surrogate();
    // 4
    childClass.prototype.constructor = childClass;
};