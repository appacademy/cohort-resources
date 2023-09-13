//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceryForm = document.querySelector(".grocery-form")
const groceries = document.querySelector(".groceries")
const recipes = document.querySelector(".recipes")
const recipeList = document.querySelector(".recipe-list")


const lsItems = JSON.parse(localStorage.getItem("items")) ||  [] //"[{value: "rice"},{value: "rice"},{}]""
const lsRecipes = JSON.parse(localStorage.getItem("recipes")) || []

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
    e.preventDefault()
    let input = document.querySelector("input[name='add-grocery']")
    let value = input.value
    
    const item = {value: value} // {value: "fish"}
    lsItems.push(item)
    localStorage.setItem("items", JSON.stringify(lsItems))

    // input.value = ""
    updateList()
    groceryForm.reset()
}

const updateList = () => {
    if(!groceries.hasChildNodes()){
        lsItems.map(item => {
            let li = document.createElement("li")
            li.innerText = item.value
            // li.innerHTML = item.value
            groceries.append(li)
        })
    } else {
        let li = document.createElement("li")
        li.innerText = lsItems[lsItems.length - 1].value
        groceries.append(li)
    }
}


//create event handler to cross out list items on click
const markAsDone = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // target // element that triggered the event
    // currentTarget // element where we placed the eventListener
    let ele = e.target
    ele.classList.toggle("done")
}


const addRecipe = (e) => {
    let recipeText = e.target.innerText 
    // console.log(recipeText)
    lsRecipes.push({recipeText})
    localStorage.setItem("recipes", JSON.stringify(lsRecipes))
    updateWeeklyRecipe()
}

const updateWeeklyRecipe = () => {
    recipes.innerHTML = lsRecipes.map(recipe => {
        return `<a href="" ">${recipe.recipeText}</a>`
    })

}

recipes.addEventListener("click", (e)=>{
    e.preventDefault()
    let text = e.target.innerText
    window.location.hash = text
})



//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener("submit", addItem)
//add event listener to cross out a list item
groceries.addEventListener("click", markAsDone)

//add event listener to to add recipe
recipeList.addEventListener("click", addRecipe)

// demo of bubbling
// const parentGrocery = document.querySelector(".grocery-container")
// const boo = (e) => {
//     alert("BOOOOOOOO")
// }
// parentGrocery.addEventListener("click", boo)

updateList()
updateWeeklyRecipe()
window.groceries = groceries