const greetingDiv = document.getElementById("greeting");
console.log(greetingDiv.classList)

// greetingDiv.style.color = "red";
// greetingDiv.style.height = "300px"
// greetingDiv.style.width = "300px"
// greetingDiv.style.backgroundColor = "blue"


// // generall this is preffered
greetingDiv.classList.add("yellow");

greetingDiv.classList.add("large");

// this takes two args, the first is the event in quotes
// second arg is what we want to happen when that event is triggered, in form of a callback/ function

greetingDiv.addEventListener("click", (event)=>{
    console.log(event.target.id)

    if(event.target.id === "greeting"){

        greetingDiv.style.backgroundColor = "pink";
        greetingDiv.innerHTML = "YAAAAASSSSS";
        greetingDiv.classList.add("loud");
    }else {
        event.target.classList.add("hidden")
    }
})


// const squares = document.querySelectorAll(".children")
// [asldkj,alsjdhf,aksjdh]

// squares.forEach((square)=>{
//     square.addEventListener("click",()=>{
//         alert("hi")
//     })
// })


const parent = document.getElementById("parent");
parent.addEventListener("click", (event)=>{
    event.stopPropagation();
    // stop the bubbling
    if(event.target.id === "parent"){
        alert("go to bed!")
    }else {
        alert("I WONT GO!")
    }
})

const grandParent = document.getElementById("grand-parent");

grandParent.addEventListener("click", ()=>{
    alert("youve gotten so tall!!!!!!!")
})

const form = document.getElementById("form");
const formInput = document.getElementById("form-input");
let value;



function handleSumbit(e){
    e.preventDefault();
    console.log(e)
    let list = document.getElementById("list");
    let li = document.createElement('li');
    li.innerHTML = value
    list.appendChild(li);
    formInput.value = "";
   

}
function handleChange(e){
    e.stopPropagation();
    value = e.target.value
;}


formInput.addEventListener("change",handleChange)
form.addEventListener("submit",(e)=>handleSumbit(e))


  












