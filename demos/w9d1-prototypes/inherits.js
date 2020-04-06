
function inherits(parentClass, childClass) {
    function Surrogate() { }; // step 1
    Surrogate.prototype = parentClass.prototype;  // step 2
    childClass.prototype = new Surrogate();  // step 3 
    childClass.prototype.constructor = childClass; // step 4
}

