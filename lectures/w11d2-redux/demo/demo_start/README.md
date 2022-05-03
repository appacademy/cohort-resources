# W10D4 Lecture - Redux

This demo does not have any react in it! Explain to students that for the initial configuration they will likely always be starting with react in the future, but today's lecture demo is purely working with redux. There won't be anything to see on our webapp. We'll be working entirely int he browser console to inspect how redux functions. Explain to students at the start of the demo that this is what we will be doing!

* Upon arriving at the `File Structure` slide, each slide will slowly build on the skeleton. The initial skeleton can be found in `demo/demo_start` and should finishing looking like `demo/tea_shop_end`. You can also choose to code it from scratch (preferred), and review the pieces with them briefly.

Note: Try this out and make sure it works before lecture in case of differences in webpack configuration. 
`npm install webpack webpack-cli redux @babel/core @babel/preset-env babel-loader`

Paste in and briefly walk through what is going on in the webpack.config.js file below
```js
const path = require('path');

module.exports = {
  entry: './frontend/tea_shop.js',
  output: {
    path: path.resolve(__dirname), 
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.js?$/], // [/\.jsx?$/], // change to this in when we add react
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'] // ['@babel/env', '@babel/react'] // change to this when we add react
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*'] // ['.js', '.jsx', '*'] // change to this when we add react
  }
};
```


## File Structure & Entry

* Show them the skeleton or make this folder structure
  * Particularly `index.html` and `frontend` folder
    * Create the sub folders and briefly explain what they do
      * `actions`
      * `reducers`
      * `store`
* Build the `tea_shop.js` file inside the `frontend` folder:

```JSX
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the magic tea shop.")
})
```

## Store 

### Store - Part 1

* Build the `store.js` file inside the `store` folder. First, write this:

```JS
import { createStore } from 'redux';

const store = createStore(() => ({}), preloadedState);
```
* Note that `createStore` normally takes a `rootReducer` which is a function that returns an object (aka the slice of state corresponding with that reducer) but since we don't have one built yet we will just have the `rootReducer` be a function that implicitly returns an empty object

Discuss briefly the concept of preloaded state, and that in some cases we may want to start with some stuff already in our state (like the currrent user's info for example). In other cases we may not, therefore rather than exporting a _static store_, we can instead write a function that takes in a `preloadedState` to make this more dynamic. Refactor the last line to the following:

```js
const configureStore = (preloadedState = {}) => {
  return createStore(() => ({}), preloadedState);
}

export default configureStore;
```
* Make sure to give the parameter a default value of an empty object!
* Additionally, it also takes a middleware function, which we traditionally use `applyMiddleware`
  * Tomorrow's lecture will focus on middleware, so we aren't going to go into much detail about it today - you can add a logger if you want but I would say not to, to avoid overloading them.
* Remember to return your store!!

### Store - Part 2 (Jump to the two store slides!)

* Add the following to `tea_shop.js`

```JS
import configureStore from './store/store';

// This goes inside the event listener
const store = configureStore();
window.store = store;
```

* We just built the `store.js` file, it's exporting the function ready to be invoked that will create the store
  * Thus, we import this as `configureStore` and must invoke the function so that it will return a store
* Show the store in dev console (since we put it on the window)
  * Show `getState` and `dispatch` using a dummy action with a type - show them how it throws an error if an action without a type property specified is dispatched.
* **Before we jump back to the slides**, let's build some actions!

## Actions/Reducers (CODE FIRST)

### Actions Part 1

* Actions are going to be functions that we dispatch that return an object containing data we want to put into our store
* Build the `tea_actions.js` file inside the `actions` folder

```JS
export const receiveGreenTea = {
  type: 'RECEIVE_TEA',
  tea: {
    flavor: 'green',
    amount: 2.75,
    id: 1
  }
};
```

* Emphasize that an action is just a POJO - there is nothing special we need to import from Redux, we aren't using any fancy syntax. It is just a POJO.
* Throw the `receiveGreenTea` object on the window and hop into Chrome console to dispatch the action. Note that we see the object returned from `dispatch` but again when we `getState` it is still an empty object - this is because we don't have reducers to handle this yet.
  * Ask the scribe before lecture to keep up that redux demo so you can easily switch back to it at times like this so they can consistently be reminded of the flow we are following.
* Let's build a `teasReducer` so we can actually update the store and handle this action.
* Emphasize that like actions are just POJOs, reducers are just regular old JS functions. Note that neither of these files have `jsx` extensions. Remind them that reducers are pure functions and should not modify their inputs (i.e. application state). Write a `teasReducer` as follows, making sure the scribe misspells 'RECEIVE' as 'RECIEVE' (tell them beforehand):

## (Jump to the two Action slide!)

### Reducers Part 1 (Jump to the two reducer slide!)

```js
const teasReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case 'RECIEVE_TEA': // intentional typo! DO THIS!
      nextState[action.tea.id] = action.tea;
      return nextState;
    default:
      return state;
  }
}

export default teasReducer;
```

* Explain why we set `nextState` up above so that if we need to modify state in any of our cases we can just modify the `nextState` declared up top.
  * If they ask for more detail and why not just do it in the case statement, note that case statements in JS act weird, and if you have the declare the same variable in different case statements it will throw an error, even though you would think only one case statement would ever run.
* `state[action.tea.id] = action.tea` --> DO NOT DO THIS, we want to make a new object (nextState) and put it in there. We don't want the side effects of mutating `state`, reducers should be a pure function
* Always want this to return the current state by default (aka when we dispatch an action that this reducer isn't listening for)
* Go back to the `store.js` file, and import your teasReducer, passing it into `createStore` instead of the dummy reducer.

```js
import teasReducer from '../reducers/teas_reducer';

const configureStore() = (preloadedState = {}) => {
  return createStore(teasReducer, preloadedState);
}
```

* Now pop into the window and test out dispatching your `receiveGreenTea` action. Note that we get the action back, there are no errors but state still hasn't updated....weird. 
* Explain that this is a really hard bug to catch - it's because of the misspelling of the action type in the reducer. This is why we make action constants. Refactor your tea actions and reducer to use action constants instead of string literals.
```js
export const RECEIVE_TEA = 'RECEIVE_TEA'; // in tea_actions.js

import { RECEIVE_TEA } from '../actions/tea_actions'; // in teas_reducer.js

case RECEIVE_TEA:
```
* Now go back to your action and set up a constant
* We add the constant to help with spelling mistakes and errors
  * Essentially we don't want silent typos - if we misspell a variable it will error out but not a string
* Awesome, we got something displaying on the screen!

## (Jump back to the reducer slide again to recap!)
## **Take a break for 5 minutes** (if you haven't already)

### Actions Part 2 (Jump back to action slide!)

* Welcome them back and briefly review what you've done so far
* Go to the tea actions file. Ask them if there is a better way we could go about doing this - how could we be more dynamic about the way we are receiving teas?
* Field a couple responses and then explain that this action we've made is specific to green tea - not only that it has a set id. We want to be more dynamic. Instead we can write a _function_ that _returns_ an action. This function can take in a tea, and return an action object for that specific tea. Explain that this is an **action creator**. Actions = objects, action creators = functions (that return actions).
* Keep the action above and tell the scribe to add a comment noting it as a 'static action'. Below write a comment 'action creator' and add this code.

```JS
export const receiveTea = (tea) => {
  return {
    type: RECEIVE_TEA,
    tea: tea
  }
};
```

* Now we can take in a tea object and return an action to add that tea to our state.
* Refactor using parenthesis and destructuring after writing this out the first time
  * Remember the ({}) means we are implicitly returning an object
  * Additionally, `tea` is using object destructuring and really means `tea: tea`
* Hop into Chrome console and add a few teas, taking tea suggestions from the class.

### Reducers - Part 2

* Review what you did with the `teasReducer` but mention that often times in an app there will be multiple _entities_ we care about. Tell them to think back to the sample state shape they were shown in the slides - there were three top level keys for 'stocks', 'users', and 'watches' - most of our apps will follow this pattern where each entity will have it's own _slice of state_ to manage. This means that each entity will have its own reducer to manage its slice of state, and we will have a `rootReducer` that combines them all.

* Our `rootReducer` is called this because it combines all of the reducers that we have in our app into one reducer, hence the name `rootReducer`
  * When we dispatch an action it is dispatched to the `rootReducer` and through the `combineReducers` function, that action is sent to all of the other reducers
  * Right now we only have one reducer so you might ask, why do we even need a `rootReducer`? But, any app worth building is going to have several reducers and it'll be best to get practice using the `rootReducer`
* Build the `root_reducer.js` file inside the `reducers` folder
* Emphasize that we have complete control over what we name the keys - they can be anything we want. The value for that key will be the object returned by the reducer that we specify.
  * Emphasize that **each reducer is only responsible for its own slice of state.**

```JS
import { combineReducers } from 'redux';
import teasReducer from './teas_reducer';

const rootReducer = combineReducers({
  teas: teasReducer,
});

export default rootReducer;
```

* Go back to the `store.js` file and replace the `teasReducer` with the `rootReducer`
* Hop into chrome console and try dispatching some actions. Note that we will get an error (if you used the exact code snippet above).
  * When we made our `teasReducer` we didn't specify a default value for state - this causes errors when it's passed into `combineReducers`, as it doesn't know what to initialize state to. You can try and have the class see if they can spot the error. Emphasize the importance of setting this default value so that when `combineReducers` initializes state it can properly set it to an empty POJO.
* Dispatch a `RECEIVE_TEA` action in the console:

```JS
store.getState();
const matchaTea = {
  id: 2,
  flavor: 'matcha',
  amount: 5.00,
}
store.dispatch(receiveTea(matchaTea));
store.getState();
```
* You can also break it down so they can see each step of what is happening:

```js
store.getState();
const jasmineTea = {
  id: 3,
  flavor: 'jasmine',
  amount: 3.00
}

const jasmineAction = receiveTea(jasmineTea);
store.dispatch(jasmineAction);
store.getState();
```
* Nice! We've done it! We have successfully updated our `store` with meaningful information
  * This is great, but we have to do this by hand in the console. To fix this, we need to provide the `state` to our components and give them access to the things they need (Mention this as a preview for tomorrow's material)
    * **Let's jump back to the slides** and talk about how to do this
      * Go through the store, actions, and reducers slides after having demoed them all, fielding any questions.

## BACK TO SLIDES

***End of day one!***
