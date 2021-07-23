### W11D4
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

* Just listen and try to take in _CONCEPTS_ for lecture
* Understand the _MOTIVATION_ for what we build
* Visualize the connection and flow of the code
* Explain it to a friend!

---

## React Review

* Components (Class & Functional)
* Local (Component) State
* Props

---

## Redux

* Store
  * `getState` (function) -> read
  * `dispatch` (function) -> write
* `Provider` & `connect` -> Connected Components

---

### [Redux Cycle](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/thunk-merge/react/w11d1-thunk/assets/redux-cycle-only.png?token=AG2UGPZ2SSSJGHSKOR46PQ3AEFRCI)

---

### [Redux with Rails](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/thunk-merge/react/w11d1-thunk/assets/redux-cycle-with-rails.png?token=AG2UGP6FZBM2Y6JLSEOPJFLAEFRCE)

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
export const fetchAllTeas = () => (
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
  TeaAPIUtil.fetchAllTeas()
    .then(teas => dispatch(receiveTeas(teas)))
);
```

---

## Redux actions compared

```js
export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  teas
});
```

```js
export const fetchAllTeas = () => (dispatch, getState) => (
  TeaAPIUtil.fetchAllTeas()
    .then(teas => dispatch(receiveTeas(teas)))
);
```

---

## What is Thunk?!

---

## Thunk action creators

```js
export const fetchAllTeas = () => (dispatch, getState) => (
  TeaAPIUtil.fetchAllTeas()
    .then(teas => dispatch(receiveTeas(teas)))
);
```
---

## Thunk action creators

```js
// thunk action creator
export const fetchAllTeas = function() {
  // thunk action
	return function(dispatch, getState) {
  		// AJAX call
      return TeaAPIUtil.fetchAllTeas()
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

### [Redux with Rails (again)](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/thunk-merge/react/w11d1-thunk/assets/redux-cycle-with-rails.png?token=AG2UGP6FZBM2Y6JLSEOPJFLAEFRCE)

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
