//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
const groceries = document.querySelector('.groceries');
const groceryForm = document.querySelector('.grocery-form');
const recipeList = document.querySelector('.recipe-list');
const recipes = document.querySelector('.recipes'); // finds first instance of this class

//create variables to hold localStorage things
const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create action that adds to our grocery list
const addItem = (e) => { // event handler
    e.preventDefault();

    // grab input field and extract its value
    let input = document.querySelector("input[name='add-grocery']");
    let value = input.value;

    let item = { value };

    // add to local storage
    lsItems.push(item);
    localStorage.setItem('items', JSON.stringify(lsItems));

    updateList();

    // clear input fields of form
    groceryForm.reset();
}

//create functionality to render grocery list items
const updateList = () => {

    // method 1: using string html element
    groceries.innerHTML = lsItems.map(item => {
        return `<li>${item.value}</li>`
    }).join(" ");

   
    // method 2: using document.createElement
    // if (!groceries.hasChildNodes()) {
    //     lsItems.map(item => {
    //         let li = document.createElement('li');
    //         li.innerText = item.value;
    //         groceries.appendChild(li); // appendChild = append one Node, and returns it
    //         // append = can append multiple items, doesnt have to be a node. No return value
    //     });
    // } else {
    //     let li = document.createElement('li');
    //     li.innerText = lsItems[lsItems.length - 1].value;
    //     groceries.appendChild(li);
    // }
}

//create functionality to cross out list items on click
const markAsDone = function(e) { // event handler
    e.stopPropagation(); // 
    e.preventDefault(); // stop that browser from doing stuff
    let ele = e.target;

    ele.classList.toggle('done'); // add class if it's not there, remove if it is 
}

//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//

//create action that adds to our recipes list
const addRecipe = (e) => {

    let recipeText = e.target.innerText;

    lsRecipes.push({ recipeText }); // { recipeText: recipeText }
    localStorage.setItem("recipes", JSON.stringify(lsRecipes))

    updateWeeklyRecipe();
}


const updateWeeklyRecipe = () => {

    recipes.innerHTML = lsRecipes.map((recipe) => {
        return `
            <a href="" class="recipeText">
                ${recipe.recipeText}
            </a>
            `
    });
        
//ADD AN EVENT LISTENER
    recipes.addEventListener('click', e => {
        e.preventDefault(); 

        let text = e.target.innerText;
        window.location.hash = text.trim(); // trims empty spaces on each side of text
    })
}

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener('submit', addItem);


//add event listener to cross out a list item
groceries.addEventListener('click', markAsDone);
//COMMENT OUT WHEN DEMO-ING EVENT BUBBLING

//call our methods to populate DOM
updateList(); // need to put li's on the DOM
updateWeeklyRecipe();



//--------------------PHASE II EVENT BUBBLING DEMO---------------------------------//

//COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING
// let groc = document.querySelectorAll(".groceries li"); // select the li's
// groc.forEach((child) => {
    //     child.addEventListener("click", markAsDone);
    // })
    // const boo = (e) => {
        //     alert("Boo from the groceries ul! You didn't expect this, did you?!")
        // }
        
        //COMMENT IN TO SHOW UNINTENDED SIDE EFFECTS OF EVENT BUBBLING
        // groceries.addEventListener("click", boo); // parent
        
        //---------------------------------------------------------------------//
        
//add event listener to to add recipe
recipeList.addEventListener('click', addRecipe);
        




// document.getElementsByClassName("pv-profile-section")[0].click()
// let skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
// for (let i = 0; i < skills.length; ++i) {
//     skills[i].click();
// }