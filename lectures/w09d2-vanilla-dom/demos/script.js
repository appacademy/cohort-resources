// const greetingDiv = document.getElementById('greeting');

// console.log(greetingDiv)
// greetingDiv.style.color = "lavender";
// greetingDiv.style.height = "300px";
// greetingDiv.style.width = "300px";
// greetingDiv.style.backgroundColor = "blue";
  
// console.log(greetingDiv.classList);
// greetingDiv.classList.add('yellow');
// greetingDiv.classList.add('large');
// greetingDiv.classList.add('hidden')

// greetingDiv.addEventListener('click', (event)=>{
//     if(greetingDiv.innerHTML === "YAAAAAASSSSSS"){
//         greetingDiv.style.backgroundColor = 'yellow';
//         greetingDiv.innerHTML = 'Hello World';
//     } else {
//         greetingDiv.style.backgroundColor = "pink";
//         greetingDiv.innerHTML = "YAAAAAASSSSSS"
//     }
//     greetingDiv.classList.toggle('loud') 
    
//     // console.log(event)

// })

// const form = document.getElementById("form");
// const formInput = document.getElementById("form-input");
// let value;

// function handleChange(e){
//     // console.log(e.target.value);
//     value = e.target.value; 
// }

// function handleSubmit(e){
//     console.log(e);
//     e.preventDefault();
//     let list = document.getElementById('list');
//     let li = document.createElement('li');
//     li.innerHTML = value;
//     list.appendChild(li);
//     formInput.value = '';
// }



// formInput.addEventListener("change", handleChange);
// form.addEventListener("submit", handleSubmit);



// const squares = document.querySelectorAll(".children");
// squares.forEach((square)=>{
//     square.addEventListener('click', (e)=>{
//         // e.stopPropagation();
//         alert('hi')
//     })
// })

const parent = document.getElementById('parent');
parent.addEventListener('click', (e)=>{
    // alert('hi')
    e.stopPropagation(); //stops bubbling from continuing up from here
    if(e.target.id === 'parent' ){
        alert('go to bed!')
    } else {
        alert("I WON'T GO!")
    }
})

const grandparent = document.getElementById("grand-parent");
grandparent.addEventListener("click", ()=>{
    alert('youve gotten so tall!!!');
})





