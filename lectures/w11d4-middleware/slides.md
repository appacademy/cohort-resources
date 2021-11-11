### W11D4
## Thunk Middleware

---

## Recommendations for Today

* Just listen and try to take in _CONCEPTS_ for lecture
* Understand the _MOTIVATION_ for what we build
* Visualize the connection and flow of the code
* Explain it to a friend!

---

## Learning Objectives

* Review Redux Cycle
* Remember Rails
* Call API Backend from React/Redux frontend
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

## React Review

 * Class components give us access to local state and life cycle methods
 * Functional components are simpler to build and dry up our code
 * Components also have props, which can be threaded down to child components
 * What 3 things will trigger a React component to re-render?


---

## Redux

* Store
  * `getState()` -> read
  * `dispatch(action)` -> write
* `Provider` & `connect`
	* "Connected Components"
  * insert the store's state and dispatch into a component's props
  * avoid prop drilling

---

### ![Redux Cycle](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-only.png?token=AQCB66IFGFIFKTPSJQSXZD3BSQEZG)

---

# Problem:
## What about when we need to dispatch an action with data from our backend?

---

We'd like a way to dispatch a _function_ that will: 
* fetch information from our backend, 
* create an action from it, 
* and then dispatch the newly created action. 

---

### ![Redux with Rails](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-with-rails.png?token=AQCB66M4POMEBITPZZ4CC53BSQEZU)

---

### FANCY PANTS DIAGRAM Redux with Rails
![Redux Cycle GIF](https://raw.githubusercontent.com/appacademy/cohort-resources/08-30-2021/lectures/w11d4-middleware/redux-slow.gif)

---

## Connecting backend & frontend

* Frontend: Yesterday's demo
* Backend: We're making a Rails JSON API!

---

### DEMO: Rails backend setup

---

### Break!!!

---

## Connecting backend & frontend

* API Utils via AJAX calls

```js
export const getTeas = () => (
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

### ![Redux with Rails](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-with-rails.png?token=AQCB66M4POMEBITPZZ4CC53BSQEZU)

---

### Middleware

* Intercepts all actions before they hit the reducer
* Benefits:
	* Delay the dispatch of an action
  * Conditionally dispatch actions
  * Logging
* `applyMiddleware()` in `createStore()`

---

## Thunk Middleware

* Checks if an action if a function or a POJO
* Now we can dispatch actions that are POJOs _or functions_
	* POJOs will be sent to reducer
  * functions will be invoked, and the resulting action dispatched
* In addition to our regular action creators, we will have _thunk_ action creators

---

## Redux actions: regular

* Regular **action creator**:

```js
export const receiveTeas = teas => (
	return {
  		type: RECEIVE_TEAS,
  		teas
	}
);
```

---

## Redux actions: thunks

* **Thunk action creator**:

```js
export const fetchAllTeas = () => {
  return (dispatch, getState) => {
    return TeaAPIUtil.getAllTeas()
      .then(teas => dispatch(receiveTeas(teas)))
  }
};
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
export const fetchAllTeas = () => dispatch => (
  TeaAPIUtil.getTeas()
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
      return TeaAPIUtil.getTeas()
      	// when we get a response, dispatch regular action
        .then(teas => dispatch(receiveTeas(teas))
        // aka dispatch({type: RECEIVE_TEAS, teas: teas})
  }
}
```

---

### DEMO: Thunk Action Creators

---

### Break!!!

---

## Thunk Middleware (Steps)

* IF the action is a function
  * Invoke the action, passing in `dispatch` and `getState`
* (else) the action is a POJO
  * Pass the action along to the next middleware or the reducer

---

### ![Redux with Rails (again)](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-with-rails.png?token=AQCB66M4POMEBITPZZ4CC53BSQEZU)

---

## The middleware signature

All middlewares have the same basic signature consisting of 3 nested functions
* the outer function accepts the store
* the middle function accepts either the next middleware or the dispatch
* the inner function accepts the action

```javascript
const middleware = store => next => action => {
  // do the things
  return next(action);
};

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

### Writing Our Own Thunk

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

### DEMO: Thunk Middleware

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=221f4c7b-123a-4a71-aec1-f53f8e1fe6a3)

---

# THANK YOU
