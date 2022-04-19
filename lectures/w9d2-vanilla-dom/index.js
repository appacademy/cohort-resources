// const circle = document.getElementById("circle");


// circle.addEventListener("click", ()=>{
//     circle.style.backgroundColor = "blue";
//     circle.innerHTML = "hello world"
// });


const squares = document.querySelectorAll(".squares");

// squares.forEach(square =>{
//     square.addEventListener
// })


// document.addEventListener("click", ()=>{
//     squares.forEach((square)=>{
//         square.classList.add("yellow")
//     })
// })


const squareContainer = document.getElementById("square-parent");



squareContainer.addEventListener("click", (event)=>{
    console.log(event)
    squares.forEach((square)=>{
                square.classList.add("yellow")
            })
})