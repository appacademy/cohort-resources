const alertText = function(e) {
    // e.stopPropagation();
    console.log(this);
    console.log(`target: ${e.target.className}`);
    console.log(`currentTarget: ${e.currentTarget.className}`);
};

// returns node list; is array-like
const inners = document.querySelectorAll('.nested-inner'); 

// returns single node
const middle = document.querySelector('#MID'); 
const outer = document.getElementById('OUT');


inners.forEach((el) => {
    el.addEventListener('click', alertText);
})

// middle.addEventListener('click', alertText);
// outer.addEventListener('click', alertText);