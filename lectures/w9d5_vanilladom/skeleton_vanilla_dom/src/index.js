const lsItems = JSON.parse(localStorage.getItem("items")) || []
const lsRecipes = JSON.parse(localStorage.getItem("recipes")) || []
const groceryForm = document.querySelector(".grocery-form");
const groceries = document.querySelector(".groceries");
const recipes = document.querySelector(".recipes"); //returns first element that matches this class name
// first function is going to add an item to my localStorage under the key of items 
const recipeList = document.querySelector(".recipe-list");

// second function is going to pull all of the element that localStorage has (under the items key) and append them to the grocery list 


const addItemToLocalStorage = (e) => {
    // halt page from refreshing and adding a query string in the URL every time I submit the form
    e.preventDefault()
    const input = document.querySelector("input[name='add-grocery']");
    const value = input.value;
    // const item = {value: value};
    const item = {value};
    lsItems.push(item);
    localStorage.setItem("items", JSON.stringify(lsItems));
    updateGroceryList()
    // clearing input field inside a form
    groceryForm.reset();
    
}


const updateGroceryList = () => {
    // groceries.innerHTML = lsItems.map((item) => {
    //     return `<li>${item.value}</li>`
    // }).join(" ")
    if (!groceries.hasChildNodes()){
        lsItems.map((item) => {
            const li = document.createElement("li");
            li.innerText = item.value;
            groceries.append(li);
        })
    }else {
        const li = document.createElement("li");
        li.innerText = lsItems[lsItems.length - 1].value;
        groceries.append(li);
    }
}

updateGroceryList()

groceryForm.addEventListener("submit", addItemToLocalStorage)


const markAsDone = (e) => {
    console.log(e.currentTarget)
    console.log(e.target)
    e.stopPropagation()
    // A current target is the element where I am attaching the listener
    // A target is where the event happens
    let ele = e.target;
    ele.classList.toggle("done");
}


const groceriesList = document.querySelectorAll(".groceries li");


// BUBBLING CONCEPT
// groceriesList.forEach((child) => {
//     child.addEventListener("click", markAsDone)
// })

// const boo = (e) => {
//     console.log("Boo from groceries ul ! You did not excpect this, did you ? :) ")
// }

// groceries.addEventListener("click", boo)

groceries.addEventListener('click', markAsDone)


const addRecipe = (e) => {
    e.preventDefault()
    // event will happen on one of the recipes
    let recipeText = e.target.innerText;
    lsRecipes.push({ recipeText });
    localStorage.setItem("recipes", JSON.stringify(lsRecipes));
    updateWeeklyRecipe();
}

const updateWeeklyRecipe = () => {
    recipes.innerHTML = lsRecipes.map((recipe) => {
        return `
            <a href class="recipeText">
                ${recipe.recipeText}
            </a>`
    })

    recipes.addEventListener("click", (e) => {
        e.preventDefault()
        let text = e.target.innerText;
        window.location.hash = text.trim(); //remove spaces from text
    })
}

updateWeeklyRecipe()
recipeList.addEventListener("click", addRecipe)