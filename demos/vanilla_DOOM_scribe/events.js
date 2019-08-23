// define event handlers
const alertTextContent = function(e){
    console.log("this", this);
    e.stopPropagation();     
    console.log(`The target is: ${e.target.className}`);
    console.log(`The current target is: ${e.currentTarget.className}`);
};

const sayYo = function(e){
    e.stopPropagation();
    console.log("Yo");
};



// querySelectorAll, returns an array:
const inners = document.querySelectorAll(".nested-inner");

// querySelector way, returns one node:
const middle = document.querySelector("#MID");

// getElementById, returns only one node:
const outer = document.getElementById("OUT");




// add listeners
inners.forEach( (ele) => {  
    ele.addEventListener( "click", alertTextContent );
} );
middle.addEventListener( "click", sayYo );
outer.addEventListener( "click", alertTextContent );