//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector('.groceries');
const groceryForm = document.querySelector('.grocery-form');
const recipeList = document.querySelector('.recipe-list');
const recipes = document.querySelector('.recipes');

//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
  e.preventDefault();

  // get the input
  const input = document.querySelector("input[name='add-grocery']")
  // 'form.grocery-form input:first-child'
  // pull the value out of that input
  const value = input.value

  // store the value inside of localStorage
  const item = { value }; // { value: value }
  lsItems.push(item);
  localStorage.setItem('items', JSON.stringify(lsItems));

  // updateList
  updateList();
}

//create action to render grocery list items
const updateList = () => {

  // method 1: using string html element
  // groceries.innerHTML = lsItems.map((item) => {
  //   return `<li>${item.value}</li>`;
  // }).join(" ");

  // method 2: using document.createElement
  if (!groceries.hasChildNodes()) {
    lsItems.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = item.value;
      groceries.appendChild(li);
    })
  } else {
    const newItem = lsItems[lsItems.length - 1];
    const li = document.createElement('li');
    li.innerText = newItem.value;
    groceries.appendChild(li);
  }
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
  e.stopPropagation();
  const clickedLi = e.target;
  clickedLi.classList.toggle('done');
}

//call our methods to populate DOM
updateList();

//--------------------PHASE II EVENT BUBBLING DEMO---------------------------------//

const surprise = e => {
  groceries.parentNode.style.backgroundImage = "url('surprise.gif')";
  groceries.parentNode.style.backgroundSize = "100% 100%";
}

//COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING
// let groc = document.querySelectorAll(".groceries li") //select the li's

// groc.forEach((child) => {
//     child.addEventListener("click", markAsDone);
// })

// COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING
// groceries.addEventListener("click", surprise); //parent

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
  recipes.addEventListener("click", (e) => {
    e.preventDefault();
    const recipe = e.target;
    window.location.hash = recipe.innerText.trim();
  })
}

updateWeeklyRecipe();

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener('submit', addItem);

//add event listener to cross out a list item
//COMMENT OUT WHEN DEMO-ING EVENT BUBBLING
groceries.addEventListener('click', markAsDone);

//add event listener to to add recipe
recipeList.addEventListener("click", addRecipe);


//---------------------------------------------------------------------//


































