const Util = {
    inherits: function(childClass,parentClass){
        function Surrogate(){};
        debugger
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
        return "s"
    }
}
module.exports = Util;