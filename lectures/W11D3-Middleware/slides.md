### W11D3
## Thunk Middleware

---

## Learning Objectives

* Review Redux Cycle
* Remember Rails
* Connect an API backend to React/Redux frontend
* Understand Motivation for Middleware and Thunk

---

## Learning Outline

* Review Redux Cycle
* Long demo!
  * Rails backend API
  * App structure - no index.html!
  * APIUtils - AJAX
  * Thunk Action Creators
  * Middleware
* Kahoot!

---

## Recommendations for Today

* Focus and do your best to take in _CONCEPTS_ for lecture
* Understand the _MOTIVATION_ for what we build
* Visualize the connection and flow of the code
* Ask and Answer Questions!!!
* Explain it to a friend!

---

## React Review

* Components (Class & Functional)
* Local (Component) State
* Props

---

## Redux

* Store: this is where the state of our application lives. Single source of truth!
  * `getState` (function) -> read
  * `dispatch` (function) -> write
* Actions: Dispatch these to trigger store updates.
* Reducers: Listen for certain action types, update store accordingly
* `Provider` & `connect` -> Connected Components

---

### ![Redux Cycle](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w11d1-thunk/assets/redux-cycle-only.png?token=GHSAT0AAAAAABKI6X5B7QNT66MRVZJDAI44YPG7O7Q)

---

### ![Redux with Rails](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w11d1-thunk/assets/redux-cycle-with-rails.png?token=GHSAT0AAAAAABKI6X5AZJF3WCWCHAVBWFLGYPG7QHA)

---

### FANCY PANTS DIAGRAM Redux with Rails
![Redux Cycle GIF](https://blog.gisspan.com/img/redux.gif)

---

## Connecting backend & frontend

* Frontend: Yesterday's demo
* Backend: We're making a Rails JSON API!

---

### DEMO: Rails backend setup

---

## Connecting backend & frontend

* API Utils via AJAX calls

```js
export const getAllTeas = () => (
  $.ajax({
    method: 'GET',
    url: '/api/teas'
  })
);
```

---

### Demo: APIUtils - AJAX

---

### What about updating our Redux store?

---

## Thunk Middleware

* Allows you to write _thunk_ action creators that return a _function_ instead of POJO
* Have actions that are POJOs _or functions_
* **Benefits:**
	* Delay the dispatch of an action
  * Conditionally dispatch actions
* `applyMiddleware()`

---

## Redux actions

* Regular **action creator**:

```js
export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  teas
});
```

---

## Redux actions: thunks

* **Thunk action creator**:

```js
export const fetchAllTeas = () => (dispatch, getState) => (
  TeaAPIUtil.getAllTeas()
    .then(teas => dispatch(receiveTeas(teas)))
);
```

---

## Redux actions compared

#### Redux Action

```js
export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  teas
});
```

#### Thunk Action Creator (calls our Redux Action)

```js
export const fetchAllTeas = () => (dispatch, getState) => (
  TeaAPIUtil.getAllTeas()
    .then(teas => dispatch(receiveTeas(teas)))
);
```

---

## What is Thunk?!

---

## Thunk action creators

```js
export const fetchAllTeas = () => (dispatch, getState) => (
  TeaAPIUtil.getAllTeas()
    .then(teas => dispatch(receiveTeas(teas)))
);
```
---

## Thunk action creators broken down

```js
// thunk action creator
export const fetchAllTeas = function() {
  // thunk action
	return function(dispatch, getState) {
  		// AJAX call
      return TeaAPIUtil.getAllTeas()
      	// when we get a response, dispatch regular action
        .then(teas => dispatch(receiveTeas(teas))
        // aka dispatch({type: RECEIVE_TEAS, teas: teas})
  }
}
```

---

### DEMO: Thunk Action Creators

---

## Thunk Middleware (Steps)

* IF the action is a function
  * Invoke the action, passing in `dispatch` and `getState`
* (else) the action is a POJO
  * Pass the action along to the next middleware or the reducer

---

### ![Redux with Rails (again)](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w11d1-thunk/assets/redux-cycle-with-rails.png?token=GHSAT0AAAAAABKI6X5B4JNNPOX7AN5CED52YPHAXHQ)

---

## Demystifying the thunk signature

* It looks weird

```javascript
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
}

export default thunk;
```

---

## Let's break that down

```js
// applyMiddleware will pass in the store
// this will be invoked for you
const thunk = function(store) {
  // applyMiddleware will pass in next
  // next represents next piece of middleware to receive action
  // Will be invoked for you
	return function(next) {
  	// Action is what WE wrote in our code 
    // will be invoked for you
  	return function(action) {
    	if (typeof action === "function") {
      	// invoke the action, aka make AJAX request
      	return action(store.dispatch, store.getState);
      }
      return next(action);
    }
  }
}
```

---

### Thunk Action

```js
// Our action from thunk action creators
function(dispatch, getState) {
	// AJAX
  	return TeaAPIUtil.fetchAllTeas()
      .then(teas => dispatch(receiveTeas(teas))
  }
```

---

### DEMO: Thunk Middleware

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=221f4c7b-123a-4a71-aec1-f53f8e1fe6a3)

---

# THANK YOU
