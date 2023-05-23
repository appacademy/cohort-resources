//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector('.groceries')
const groceryForm = document.querySelector('.grocery-form')


//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
    e.preventDefault()
    let input = document.querySelector("input[name='add-grocery']");
    let value = input.value;

    let item = document.createElement("li");
    item.innerText = value;
    groceries.appendChild(item);

    input.value = ""
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
    let grocery = e.target // the li that i clicked on
    grocery.classList.toggle("done");
}

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener("submit", addItem);
//add event listener to cross out a list item
groceries.addEventListener("click", markAsDone);
//add event listener to to add recipe
