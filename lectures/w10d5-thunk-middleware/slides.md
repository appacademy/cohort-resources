### W10D5
## Thunk Middleware

---

## Learning Objectives

* Review Redux Cycle
* Connect an API backend to React/Redux frontend
* Middleware and Thunk

---

## React

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

### Redux Cycle
![img](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-only.png?token=AKT7T3MJERXPC3ZZ2PXS5R27GGYQ4)


---

### Redux with Rails
![img](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-with-rails.png?token=AKT7T3I7NEE2LPQYNH7CP3K7GGYN4)

---

### FANCY PANTS Redux with Rails
![Redux Cycle GIF](https://blog.gisspan.com/img/redux.gif)

---

## Connecting backend & frontend

* Frontend: Yesterday's demo
* Backend: ?


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

## What the Thunk?!

---

## Thunk action creators

```js
export const fetchAllTeas = () => (dispatch, getState) => (
  TeaAPIUtil.fetchAllTeas()
    .then(teas => dispatch(receiveTeas(teas)))
);
```

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

### What the thunk?

* Our demo tried to use these new _thunk_ action creators, but we got a nasty error?

---

## Thunk Middleware (Steps)

* IF the action is a function
  * Invoke the action, passing in `dispatch` and `getState`
* (else) the action is a POJO
  * Pass the action along to the next middleware or the reducer

---

### Redux with Rails
![img](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-with-rails.png?token=AKT7T3I7NEE2LPQYNH7CP3K7GGYN4)


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

