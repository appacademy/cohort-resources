//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceryForm = document.querySelector(".grocery-form")
const groceries = document.getElementsByClassName("groceries")[0]
const recipeList = document.querySelector(".recipe-list")
const recipes = document.querySelector(".recipes")

// const groceryForm = document.getElementsByClassName("grocery-form")[0]// will work too!
// const groceriesNodes = document.querySelectorAll(".groceries")


//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
    e.preventDefault();
    let input = document.querySelector("input[name='add-grocery']");
    let value = input.value;

    let item = {value: value} //{value: Sushi}
    lsItems.push(item);
    localStorage.setItem("items", JSON.stringify(lsItems));
    updateList();
    groceryForm.reset();
}

//create action to render grocery list items
const updateList = () => {

    // method 1: using string html element
    // groceries.innerHTML = lsItems.map(item => {
    //     return `<li>${item.value}</li>`
    // })

    // method 2: using document.createElement
    if(!groceries.hasChildNodes()){
        lsItems.map(item => {
            let li = document.createElement("li");
            li.innerText = item.value
            li.classList.add("list-item")
            groceries.appendChild(li)
        })
    } else {
        let li = document.createElement("li");
        li.innerText = lsItems[lsItems.length -1].value;
        li.classList.add("list-item")
        groceries.appendChild(li)
    }
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let element = e.target;
    console.log(e.target, "target")
    console.log(e.currentTarget, "current Target")

    element.classList.toggle("done")
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
        
    recipes.addEventListener("click", (e) => {
        e.preventDefault();
        let text = e.target.innerText;
        window.location.hash = text.trim() ;
    })
}

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
updateList()
updateWeeklyRecipe()
groceryForm.addEventListener("submit", addItem);
//add event listener to cross out a list item
// let grossc = document.getElementsByClassName("list-item");
// Array.from(grossc).forEach(child => {
//     child.addEventListener("click", markAsDone)// TO DO
// })

groceries.addEventListener("click", markAsDone)

recipeList.addEventListener("click", addRecipe)

// const boo = (e) => {
//     alert("You did not see me coming, huh")
// }

// groceries.addEventListener("click", boo)



