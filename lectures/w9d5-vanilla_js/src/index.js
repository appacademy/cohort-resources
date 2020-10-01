//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector(".groceries");
const groceryForm = document.querySelector(".grocery-form");
const recipeList = document.querySelector(".recipe-list");
const recipes = document.querySelector(".recipes");
//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem("items")) || [];
const lsRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
    //a form wants to send a post request
    // but we don't want that...
    // we want to prevent the default behavior of the form
    e.preventDefault(); // here we are doing what we describe above ^^

    let input = groceryForm.firstElementChild; // this is the first child of our grocery 
                                              //form which is the input 
    let value = input.value; // input.value = "cheese" tu dun tsk
    const item = { value }; // alternative {"value": value => cheese} 
    //destructuring will be a lot more familiar in react, dont worry about it too much right now                                           
    // debugger
    lsItems.push(item);
    localStorage.setItem("items",JSON.stringify(lsItems)); //putting info into local storage
    groceryForm.reset();
    updateList();
};

//create action to render grocery list items
const updateList = () => {
  // method 1: using string html element
  // method 2: using document.createElement
  // render things form localstorage onto the page

//   groceries.innerHTML = lsItems.map((item) => {
//     return `
//         <li> ${item.value} </li>
//     `
//   }).join("")

    if (!groceries.hasChildNodes()){ // if it does not have child nodes

        lsItems.map((item) => {
            let li = document.createElement("li") // hey document, create an li element
            li.innerText = item.value
            groceries.appendChild(li) // appending li to our un ordered list (groceries)
        })

    } else {
        let li = document.createElement("li") // hey document, create an li element
        li.innerText = lsItems[lsItems.length - 1].value // grabbing the last items value
        groceries.appendChild(li)
    }
};
// PHASE II
//create event handler to cross out list items on click
const markAsDone = (e) => {
    //current target is where even listener is 
    // target is the element that was clicked
    e.stopPropagation();
    let clicked = e.target // this is the element that is clicked
    clicked.classList.toggle("done") // getting the classlist and toggling done
    //if clicked has the class done it will remove it. if it doesn't have it then it will add it
};

// PHASE II

//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//

//create event handler that adds to our recipes list
const addRecipe = (e) => {
  let recipeText = e.target.innerText;

  lsRecipes.push({ recipeText });
  localStorage.setItem("recipes", JSON.stringify(lsRecipes));

  updateWeeklyRecipe();
};

//create action to render our recipes list
const updateWeeklyRecipe = () => {
  recipes.innerHTML = lsRecipes.map((recipe) => {
    return `
            <a href="" class="recipeText">
                ${recipe.recipeText}
            </a>
            `;
  });

  //ADD AN EVENT LISTENER to set window.location.hash
  recipes.addEventListener("click", (e) => {
    e.preventDefault();
    let text = e.target.innerText;
    window.location.hash = text.trim()
  })
};

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener("submit",addItem);
//add event listener to cross out a list item
//COMMENT OUT WHEN DEMO-ING EVENT BUBBLING
groceries.addEventListener("click", markAsDone)
//add event listener to to add recipe
recipeList.addEventListener("click", addRecipe)
//call our methods to populate DOM
updateList()
updateWeeklyRecipe()
//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//

// COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING
// let groc = document.querySelectorAll(".groceries li") //select the li's
// groc.forEach((child) => {
//     child.addEventListener("click", markAsDone);
// })
// const boo = (e) => {
//     // debugger
//     alert("Boo from the groceries ul! You didn't expect this, did you?!")
// }
// const doc = (e) => {
//     // debugger
//     alert("Boo from the TOP of the document! You didn't expect this, did you?!")
// }

// // COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING
// groceries.addEventListener("submit", boo); //parent
// document.addEventListener("submit", doc); //parent

//---------------------------------------------------------------------//
