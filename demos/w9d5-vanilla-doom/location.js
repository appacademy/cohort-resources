const fast = `
        <div>
        <h1> FAST! </h1>
        <img src="./fast.jpg" width=500>
        </div>
    `;

const slow = `
        <div>
        <h1> SLOW...! </h1>
        <img src="./slow.jpg" width=500>
        </div>
    `;
// debugger;

window.addEventListener('hashchange', function(){
    const root = document.getElementById("root");
    
    switch ( window.location.hash ) { //property on location
        case "#fast": 
        root.innerHTML = fast; //variable fast
        break;
        case "#slow": 
        root.innerHTML = slow; 
        break;
        default: 
        root.innerHTML = 'nahhh'
    }
    
})

const fastLink = document.getElementById("fast");
const slowLink = document.querySelector("#slow");

fastLink.addEventListener('click', function(event){
    event.preventDefault(); 
    window.location.hash = 'fast';
})

slowLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.hash = 'slow';
})