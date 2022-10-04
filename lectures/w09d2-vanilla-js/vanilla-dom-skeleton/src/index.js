

//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
let groceries = document.querySelector(".groceries") //UL in the middle
let recipeList = document.querySelector(".recipe-list") // UL at the bottom
let groceryForm = document.querySelector(".grocery-form") // FORM
let recipes = document.querySelector(".recipes") // H3 on top

// const exmapleArray = ["val1", "val2"]
// localStorage.setItem("keyName", valueDesire) how to set localStorage key
// localStorage.setItem("storageArray", exmapleArray)

//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list

const addItem = (e) => {
    e.preventDefault()
    let input = document.querySelector("input[name='add-grocery']")
    let value = input.value

    const item = {value: value} // item = {value: "potato"}
    lsItems.push(item)
    localStorage.setItem("item", JSON.stringify(lsItems))

    updateList();
    groceryForm.reset()
}   

//create event handler to cross out list items on click
const markAsDone = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let ele = e.target
    console.log("HIT")
    ele.classList.toggle('done')
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
            let li = document.createElement("li")
            li.innerHTML = item.value
            groceries.appendChild(li)
        })
    } else {
        let li = document.createElement("li")
        li.innerHTML = lsItems[lsItems.length - 1].value
        groceries.appendChild(li)
    }


}

// document.addEventListener("DOMContentLoaded", updateList)






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

}

//---------------------------------------------------------------------//

updateList()
//add event listener to on submit for form to process add item
groceryForm.addEventListener("submit", addItem)

groceries.addEventListener("click", markAsDone)

//add event listener to cross out a list item
// let groc = document.querySelectorAll(".groceries li")
// groc.forEach(child => {
//     child.addEventListener("click", markAsDone)
// })

// QUERYSELECTORALL SUCKS






//add event listener to to add recipe

//call our methods to populate DOM



//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//

// let groc = document.querySelectorAll(".groceries li") //select the li's
// groc.forEach((child) => {
//     child.addEventListener("click", markAsDone);
// })
const boo = (e) => {
    alert("Boo from the groceries ul! You didn't expect this, did you?!")
}


let parent = document.querySelector(".grocery-container")
parent.addEventListener("click", boo); //parent

//---------------------------------------------------------------------//


// localStorage.clear()