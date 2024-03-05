// grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector('.groceries')
const groceryForm = document.querySelector('.grocery-form')
const recipeList = document.querySelector(".recipe-list")
const recipes = document.querySelector(".recipes")

// store and grab items in local storage 
const lsItems = JSON.parse(localStorage.getItem("items")) || [];
const lsRecipes = JSON.parse(localStorage.getItem("recipes")) || [];


//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
    e.preventDefault()

    
    let input = document.querySelector("input[name='add-grocery']");
    let value = input.value;

    // let item = document.createElement("li");
    // item.innerText = value;
    // groceries.appendChild(item);

    // input.value = ""

    const item = { value: value } // { value: lettuce }

    // store in localStorage
    lsItems.push(item);
    localStorage.setItem("items", JSON.stringify(lsItems));

    // create a function to add grocery item
    updateList();

    // clear input of the user
    groceryForm.reset()

}

const updateList = () => {

    // method 1: using string html element
    // groceries.innerHTML = lsItems.map(item => {
    //     return `<li>${item.value}</li>`
    // });

    // method 2: using document.createElement
    if (!groceries.hasChildNodes()) {
        lsItems.map((item) => {
            let li = document.createElement('li'); // <li> </li>
            li.innerText = item.value; // <li> lettuce </li>
            groceries.appendChild(li) // 
        })
    } else { // <li> lettuce </li> <li> milk </li>
        let li = document.createElement('li'); 
        li.innerText = lsItems[lsItems.length - 1].value;
        groceries.appendChild(li)
    }
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let grocery = e.target // the li that i clicked on
    grocery.classList.toggle("done");
}

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
// groceryForm.addEventListener("submit", addItem);
//add event listener to cross out a list item
// groceries.addEventListener("click", markAsDone);
//add event listener to to add recipe

// updateList();


let groc = document.querySelectorAll('.groceries li');

groc.forEach((child) => {
    child.addEventListener("click", markAsDone)
});

const boo = () => {
    alert('Boo from the groceries ul');
};

groceries.addEventListener("click", boo);

// map methods to the window to test 
// const hello = () => {
//     alert("hello")
// }

// window.hello;


// PART 2 - ANCHOR, LOCATION, HISTORY

// const addRecipe = (e) => {
//     e.preventDefault();
//     let recipeText = e.target.innerText;

//     lsRecipes.push( {recipeText} );
//     localStorage.setItem("recipes", JSON.stringify(lsRecipes));

//     updateWeeklyRecipe()
// }

// const updateWeeklyRecipe = () => {
//    lsRecipes.map((recipe) => {
//     return `<a href="" class="recipeText">
//     ${recipe.recipeText}
//     </a>`
//    })
//    recipes.addEventListener('click', (e) => {
//        let text = e.target.innerText;
//        window.location.hash = text.trim();
//    });
// };



// recipeList.addEventListener("click", addRecipe);

// updateList();
// updateWeeklyRecipe();


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
    recipes.addEventListener('click', (e) => {
        e.preventDefault();
        
        let text = e.target.innerText;
        window.location.hash = text.trim() // trim remove empty spaces from either side of the text
    })
}

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener("submit", addItem)
//add event listener to cross out a list item
groceries.addEventListener("click", markAsDone);
//add event listener to to add recipe
recipeList.addEventListener("click", addRecipe);

//call our methods to populate DOM
updateList();
updateWeeklyRecipe();