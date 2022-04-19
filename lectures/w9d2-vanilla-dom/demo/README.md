# Goals of Vanilla DOM Demo

* Common vanilla dom manipulation methods
* Bubbling principle and Event Delegation
* Common window methods like window.history and window.location

* We will be implementing the JS logic to our Weekly Meal Planner App in 3 stages:

Note:
- It can be upwards of 30-45 minutes of slides about dom manipulation methods before the first demo. 
- It can be helpful to use devtools and demo out the methods on the slides while lecturing
  so that the students have a better idea of what is going on when you get to the demo. Examples:
  - user various selectors to grab different elements on a slide page and change the font color
  - show how different selectors return different data types, nodelists, htmlcollections, 
  individual elements etc.
  - Consider doing the same for history and location when you get to those slides
  - use the LinkedIn endorsements script (also located at the bottom of the index.js file) to demonstrate how you can grab elements on a page and manipulate them. Visit a teammate's LinkedIn page, endorse their skills, unendorse and endorse again. 

    ```js 
    let skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
    for (let i = 0; i < skills.length; ++i) {
      skills[i].click();
    }
    ```
    

# Phase I - demo dom manipulation methods

* Use dom methods to grab the following dom elements
    - groceries, grocery-form, recipe-list, recipes
* Build event handler logic to `addItem` to grocery list
* Create a function `updateList` to render our grocery list items
* Create an event handler `markAsDone` to cross out list items on click
* Add event listeners to groceryForm and groceries
* call our `updateList` function

# Phase II - demo bubbling behavior and event delegation

* Use dom methods to grab `.groceries li`
* Add `markAsDone` event handler on individual grocery li items
* Add `boo` event handler on .groceries ul, comment out previous `markAsDone` event handler on ul
* add 'e.stopPropagation()` to demonstrate how to stop bubbling

Note: 
- This should show that adding event handlers on each li clutters up the code
- Event delegation takes advantage of bubbling and accomplishes the same thing when the event handler is installed on the parent ul
- This should also show the bubbling behavior that when a li is clicked, it also triggers event handlers on the parent with sometimes unexpected outcomes


# Phase III - demo window.location, window.history methods

* Comment in `addRecipe`  and `updateWeeklyRecipes` functions
* Inside `updateWeeklyRecipes`, add an event handler that on click, sets the corresponding window.location.hash value.
* demo `window.history.back`, `window.history.forward` after clicking on 'Let's Google It" link

Note:
- This should show how we can utilize window.location.hash in conjunction with anchor tags \<a>\</a> to "anchor" specific areas of our webpage when a user clicks on a link based on the id value we set in our set of anchor tags

