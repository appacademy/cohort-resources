//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector('.groceries')
const groceryForm = document.querySelector(".grocery-form")

//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
    e.preventDefault();

    let input = document.querySelector("input[name='add-grocery']")
    
    const item = {value: input.value} // {value: 'eggs'}

    lsItems.push(item);
    localStorage.setItem("items", JSON.stringify(lsItems));

    updateList();

    // clear input field of gorcery form
    groceryForm.reset(); // same as document.querySelector(".grocery-form").reset();
}

//create action to render grocery list items
const updateList = () => {

    // method 1: using string html element
    groceries.innerHTML = lsItems.map(item=>{
        return `<li> ${item.value} </li>`
    });

    // method 2: using document.createElement

    // if (!groceries.hasChildNodes()) {
    //     lsItems.map(item=>{
    //         let li= document.createElement('li');
    //         li.innerText= item.value;
    //         groceries.appendChild(li);
    //     })
    // } else {
    //     let li= document.createElement('li');
    //     li.innerText= lsItems[lsItems.length-1].value;
    //     groceries.appendChild(li);
    // }
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let ele= e.target;

    ele.classList.toggle('done')
}

//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//

//create event handler that adds to our recipes list
// const addRecipe = (e) => {

//     let recipeText = e.target.innerText;

//     lsRecipes.push({ recipeText });
//     localStorage.setItem("recipes", JSON.stringify(lsRecipes))

//     updateWeeklyRecipe();
// }

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

        let text = e.target.innerText;
        window.location.hash = text.trim() // trim remove empty spaces from either side of the text
    })
}

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener("submit", addItem)
//add event listener to cross out a list item (good way and bad way, see below)

//add event listener to to add recipe
recipeList.addEventListener("click", addRecipe);

//call our methods to populate DOM
updateList();
// updateWeeklyRecipe();

// bad way
// let groc= document.querySelectorAll(".groceries li")
// groc.forEach((child)=>{
//     child.addEventListener("click", markAsDone);
// })

// good way
groceries.addEventListener("click", markAsDone)

//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//

// const boo = (e) => {
//     alert("Boo from the groceries ul! You didn't expect this, did you?!")
// }

// groceries.addEventListener("click", boo); //parent

//---------------------------------------------------------------------//

// Script for LinkedIn endorsements
// let skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
// for (let i = 0; i < skills.length; ++i) {
//     skills[i].click();
// }