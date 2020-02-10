function inherits(ParentClass, ChildClass){
    // debugger;

    function Surrogate(){};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass; 
};

module.exports = inherits;

// const holder = {
//     sayHello: function(){},
//     goodbye: function(){}
// };

// module.exports = holder; //exporting multiple functions 



