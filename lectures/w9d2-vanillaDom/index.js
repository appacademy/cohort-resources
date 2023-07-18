const greeting = document.getElementById("greeting");
// this return element with matching id;


// this is me adding a class after the fact
greeting.classList.remove("important")


// greeting.addEventListener("mouseover", (e)=> change(e))


function change(e){
    greeting.classList.add("important")
}
// this typically takes two arguments,
// the first is the type of event i.e.(click, hover, sumbission, etc).
// second arg is a callback/ function that contains what we want to happen



// greeting.style.color = "red";
// greeting.style.fontFamily = "Impact"
// console.log(greeting)


const blocks  = document.getElementsByClassName("blocks");
// this gives us an HTML collection of elements with matching clas name
// console.log(blocks);


const english = document.querySelector(".english");
const body = document.querySelector("body")

const formal = document.getElementById("formal");

formal.addEventListener("click", (e)=>{
    e.stopPropagation();
    // this will stop the bubbling of events
    formal.style.fontSize = "50px"
})


english.addEventListener("click", (e)=>{
    console.log(e.currentTarget)
    body.style.background = "pink"
})


const bonjour = document.querySelector(".section")
// this takes a css selector as an argument!
// give you only the first mathing element
// console.log(bonjour)


const sectionList = document.querySelectorAll(".section");
// this returns a node list of ALL matching css selections
// console.log(sectionList);

sectionList.forEach(element =>{
    // console.log(element.innerHTML)

    if(element.innerHTML === "Aloha"){
        element.innerHTML = "Happy day!"
        element.style.color = "green";
    }else {
        element.style.color = "purple";
    }
    
    element.style.fontSize = "30px"
})


const container = document.querySelector(".container");
// console.log(container.classList)

const input = document.getElementById("user-input");
// let username;

const items = JSON.parse(localStorage.getItem("name")) || [];

input.addEventListener("change", (e)=>{
//    console.log( e.target.value)
    // username = e.target.value

    let value = e.target.value;
    const person = {value: value};

    items.push(person);
    localStorage.setItem("name", JSON.stringify(items))


})


const form = document.getElementById("form");





form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    items.forEach(item =>{
        // console.log(item)
        const heading = document.createElement("h1");
        heading.innerHTML = item.value;
        body.appendChild(heading)
    })

    
    // const heading = document.createElement("h1");
    // heading.innerHTML = username;
    // body.appendChild(heading)
    // input.value = "";
    
    // body.style.background = "green";
})