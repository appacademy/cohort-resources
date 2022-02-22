//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector('.groceries')
const groceryForm = document.querySelector('.grocery-form')
const recipeList = document.querySelector('.recipe-list')
const recipes = document.querySelector('.recipes')

//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
    e.preventDefault();

    // grab the input and extract its value
    let input = document.querySelector("input[name='add-grocery']");
    let value = input.value;

    const item = {value: value}; // {value: value} n=> {value: eggs}

    // add this new item to lsItems and localStorage items
    lsItems.push(item);
    localStorage.setItem('items', JSON.stringify(lsItems));

    // call our method to update the grocery list
    updateList();

    // clear input field of grocery form
    groceryForm.reset();
}

//create action to render grocery list items
const updateList = () => {

    // method 1: using string html element
    // groceries.innerHTML = lsItems.map(item => {
    //     return `<li>${item.value}</li>`
    // })
   
    // method 2: using document.createElement
    if (!groceries.hasChildNodes()) {
        lsItems.map(item => {
            let li = document.createElement('li');
            li.innerText = item.value;
            groceries.appendChild(li);
        });
    } else {
        let li = document.createElement('li');
        li.innerHTML = lsItems[lsItems.length - 1].value;
        groceries.appendChild(li);
    }
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // grabs the thing that we clicked on
    let ele = e.target
    // debugger
    ele.classList.toggle('done')
}

//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//

//create event handler that adds to our recipes list
const addRecipe = (e) => {

    let recipeText = e.target.innerText;

    lsRecipes.push({ recipeText }); // { recipeText: recipeText }
    localStorage.setItem("recipes", JSON.stringify(lsRecipes))

    updateWeeklyRecipe();
}

//create action to render our recipes list
const updateWeeklyRecipe = () => {

    recipes.innerHTML = lsRecipes.map((recipe) => {
        return `
            <a href="" class="recipeText">
                ${recipe.recipeText}
            </a>
            `
    });
        
//ADD AN EVENT LISTENER to set window.location.hash
    recipes.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        let text = e.target.innerText
        window.location.hash = text.trim() // removes empty spaces from begining and end of string
    })
}

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener('submit', addItem);
//add event listener to cross out a list item
groceries.addEventListener('click', markAsDone);
//add event listener to to add recipe
recipeList.addEventListener('click', addRecipe)
//call our methods to populate DOM
updateList();
updateWeeklyRecipe();

//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//

// let groc = document.querySelectorAll(".groceries li") //select the li's
// groc.forEach((child) => {
//     child.addEventListener("click", markAsDone);
// })
// const boo = (e) => {
//     alert("Boo from the groceries ul! You didn't expect this, did you?!")
// }

// groceries.addEventListener("click", boo); //parent

//---------------------------------------------------------------------//


//Script for LinkedIn endorsements
// let skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
// for (let i = 0; i < skills.length; ++i) {
//     skills[i].click();
// }