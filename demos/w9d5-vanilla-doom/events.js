// const events = "This is the event's file."
// debugger

// const mid = document.getElementById("MID");
// const outer = document.querySelector("#OUT"); //specify id or class

// outer.addEventListener( 'click', function(){
//   if (mid.classList.length === 1){
//     mid.classList.add("hidden");
//   } else {
//     mid.classList.remove("hidden");
//   }
// })

const sayWhatsUp = function(event){
  event.stopPropagation(); //this tells the browser to not bubble up
  console.log("What's uuuuuuuup?");
}

const alertTextContent = function(event){
  console.log("This:", this);
  // event.stopPropagation();
  console.log(`the target is ${event.target.className}`);
  console.log(`the current target is ${event.currentTarget.className}`);
}

const inners = document.querySelectorAll(".nested-middle > .nested-inner");
const others = document.querySelectorAll(".nested-middle, .nested-inner");
// const inners = document.querySelectorAll(".nested-inner"); also ok

// inners.forEach( el => el.addEventListener( 'click', sayWhatsUp));
// inners.forEach( el => el.addEventListener( 'click', sayWhatsUp));
//on each inner, add 'click' to run the function

const middle = document.querySelector('[id="MID"]'); //another CSS selector
const outer = document.getElementById("OUT"); //another way

// middle.addEventListener( 'click', sayWhatsUp);
// outer.addEventListener( 'click', sayWhatsUp);
outer.addEventListener( 'click', alertTextContent); 
// middle.addEventListener( 'click', alertTextContent); 
// inners.forEach( el => el.addEventListener( 'click', alertTextContent));



