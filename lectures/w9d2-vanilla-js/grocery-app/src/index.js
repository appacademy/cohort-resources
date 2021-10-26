//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
// webpack --watch --mode=development

const groceries = document.querySelector(".groceries");
const groceryForm = document.querySelector(".grocery-form");
const recipeList = document.querySelector(".recipe-list");
const recipes = document.querySelector(".recipes");

// STEP 1
//create variables to hold localStorage things


const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

console.log(localStorage)

//localStorage => storage in the web browser that can hold data for you


//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
    e.preventDefault();
    let input = document.querySelector("input[name='add-grocery']");
    let value = input.value;
    const item = { value: value };
    lsItems.push(item);
    localStorage.setItem("items", JSON.stringify(lsItems));

    updateList();

    groceryForm.reset();
}

//create action to render grocery list items
const updateList = () => {

    // method 1: using string html element
    groceries.innerHTML = lsItems.map((item) => {
        return `<li>${item.value}</li>` 
    })
    // JS interpolation -> `${}`

    // method 2: using document.createElement

}

updateList();

groceryForm.addEventListener("submit", addItem)

// updateList()

//create event handler to cross out list items on click
const markAsDone = (e) => {
    // e.preventDefault();
    e.stopPropagation();

    let ele = e.target;
    console.log(e)


    ele.classList.toggle('done');

}

// groceries.addEventListener("click", markAsDone)

//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//

let groc = document.querySelectorAll(".groceries li");
groc.forEach(child => child.addEventListener("click", markAsDone));

const boo = (e) => {
    alert("Boo from the groceries ul! You didn't expect this, did you?!");
}

groceries.addEventListener("click", boo); //parent

//---------------------------------------------------------------------//






//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//

//create event handler that adds to our recipes list
const addRecipe = (e) => {

    let recipeText = e.target.innerText;

    lsRecipes.push({ recipeText });
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

    recipes.addEventListener("click", (e)=>{
        let text = e.target.innerText;
        window.location.hash = text.trim();
    })
}

recipeList.addEventListener("click", addRecipe)

//---------------------------------------------------------------------//






