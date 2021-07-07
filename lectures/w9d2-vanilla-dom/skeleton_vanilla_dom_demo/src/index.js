//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector('.groceries');
const groceryForm = document.querySelector('.grocery-form');
const recipeList = document.querySelector('.recipe-list');
const recipes = document.querySelector('.recipes') //selects first matching element; returns Node object
// const recipes = document.getElementsByClassName('recipes') // returns HTML Element collection of Element objects
let count = 0;
//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
  e.preventDefault();
  const input = document.querySelector('.add-grocery');
  const value = input.value;
  
  const item = {value};
  // const item = {value: value};
  lsItems.push(item);

  localStorage.setItem("items", JSON.stringify(lsItems));
  // groceries.innerHTML = `<li>${value}</li>`;
  updateList();

}

//create action to render grocery list items
const updateList = () => {
  // METHOD 1: using string html element
  // const niceLookingArray = lsItems.map(item => {
  //   return `<li>${item.value}</li>`
  // });
  // // console.log('array: ',niceLookingArray)
  // groceries.innerHTML = niceLookingArray.join(" ")
  
  // METHOD 2: using document.createElement
  if (groceries.hasChildNodes() === false) {
    lsItems.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item.value;
      groceries.append(li);
    });

  } else {
    const li = document.createElement('li');
    const lastItem = lsItems[lsItems.length - 1];
    li.innerHTML = lastItem.value;
    groceries.append(li);
  }
  
}

//create event handler to cross out list items on click
const markAsDone = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.target.classList.toggle("done")
}

//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//

//create event handler that adds to our recipes list
const addRecipe = (e) => {

    let recipeText = e.target.innerText;

    lsRecipes.push({ recipeText });
    localStorage.setItem("recipes", JSON.stringify(lsRecipes))

    updateWeeklyRecipe();
}

//create action to render our recipes list
function updateWeeklyRecipe() {
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
    let text = e.target.innerText;
    window.location.hash = text.trim(); //trim gets rid of spaces in a string
  });
};



//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener('submit', addItem);
//add event listener to cross out a list item
groceries.addEventListener('click', markAsDone)

//COMMENT OUT WHEN DEMO-ING EVENT BUBBLING
// groceries.addEventListener("click", markAsDone)

//add event listener to to add recipe
recipeList.addEventListener('click', addRecipe);
//call our methods to populate DOM

updateList();
//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//

// //COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING
// let groc = document.querySelectorAll(".groceries li") //select the li's
// groc.forEach((child) => {
//     child.addEventListener("click", markAsDone);
// });
// const boo = (e) => {
//     console.log('boo')
//     alert("Boo from the groceries ul! You didn't expect this, did you?!")
// }

// // //COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING
// groceries.addEventListener("click", boo); //parent

//---------------------------------------------------------------------//


//Script to demo LinkedIn endorsements for beginning of lecture
// let skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
// for (let i = 0; i < skills.length; ++i) {
//     skills[i].click();
// }