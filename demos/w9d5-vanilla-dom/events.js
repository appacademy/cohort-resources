const sayWhatsUuuuuuup = function(e){
    e.stopPropagation();
    console.log("whats up");
}

const alertTextContext = function(e){
    console.log("this",this);
    e.stopPropagation();
    console.log(`the target is: ${e.target.className}`);
    console.log(`the current target is: ${e.currentTarget.className}`);
};

const inners = document.querySelectorAll(".nested-inner"); 
// inners.forEach((el) => {
//     el.addEventListener("click",alertTextContext); //we are passing an uninvoked function
// })

const middle = document.querySelector("#MID");
const outer = document.getElementById("OUT");

middle.addEventListener("click",alertTextContext);
outer.addEventListener("click",alertTextContext);