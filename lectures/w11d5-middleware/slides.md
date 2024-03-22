## W11D5
# Thunk Middleware

---

## Learning Objectives

* Review Redux cycle
* Connect React/Redux frontend to a Rails backend
* Understand motivation for middleware and `redux-thunk`

---

## Outline

* Review Redux cycle
* Long demo
  * Rails backend API
  * `ApiUtil` functions (fetch)
  * Thunk action creators
  * Middleware
* Kahoot!

---

## React Review

* Components
* Props

---

## Redux Review

* Store
  * `getState`
  * `dispatch`
* `Provider`
* `useSelector`

---

## React-Redux Cycle

![Redux Cycle](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks.png)

---

## Demo #1: React-Redux Review

---

## React-Redux with Rails

![Redux with Rails](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks_rails.png)

---

## React-Redux with Rails (Animated!)
![Redux Cycle GIF](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_gif.gif)

---

## Rails as a JSON API

* Rails will: 
  - house a React app in a frontend folder
  - respond to HTTP requests from the frontend with data from our database 
  in the form of JSON

---

## AJAX Requests

* The frontend will "talk" to the backend via AJAX requests

```js
  fetch('/api/teas')
    .then(res => res.json())
    .then(data => console.log(data));
```

---

### Demo #2: AJAX Requests

---

## Thunk Middleware

* Allows us to dispatch functions instead of simply POJOs
* Need to write **thunk action creators** in addition to **regular action creators** 
	* **thunk action creators** return a function
  * **regular action creators** return a POJO
* This allows for:
	* combining of multiple steps into one
	* consistent handling of async behavior
* Multiple pieces of middleware can be composed with `applyMiddleware()`

---

## Regular Action Creator

```js
  export const receiveTeas = teas => ({
    type: RECEIVE_TEAS,
    teas
  });
```

---

## Thunk Action Creator

* Promise syntax
```js
  export const fetchAllTeas = () => (dispatch) => {
    fetch(`/api/teas`)
      .then(res => res.json())
      .then(data => dispatch(receiveTeas(data)));
  };
```

* Async-await syntax
```js
  export const fetchAllTeas = () => async (dispatch) => {
    const res = await fetch(`/api/teas`);
    const data = await res.json();
    dispatch(receiveTeas(data));
  };
```

---

### Compared

```js
  export const receiveTeas = teas => ({
    type: RECEIVE_TEAS,
    teas
  });
```

```js
  export const fetchAllTeas = () => async (dispatch) => {
    const res = await fetch(`/api/teas`);
    const data = await res.json();
    dispatch(receiveTeas(data));
  };
```

---

### A Closer Look

```js
  // thunk action creator
  export const fetchAllTeas = () => {
    // thunk action
    return async (dispatch, getState) => {
        // fetch request
        const res = await fetch(`/api/teas`);
        const teas = await res.json();
        // when we get a response, dispatch regular action
        dispatch(receiveTeas(teas));
        // ex: dispatch({type: RECEIVE_TEAS, teas: teas})
    };
  };
```

---


## Demo #3: Thunk Action Creators

---

## Thunk Middleware

* IF the action is a function
  * Invoke the action, passing in `dispatch` and `getState`
* (else) the action is a POJO
  * Pass the action along to the next middleware or the reducer(s)

---

![Redux with Rails again](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_hooks_rails.png)

---

## Thunk Function Signature


```javascript
  const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };

  export default thunk;
```

---

### A Closer Look

```js
  // applyMiddleware will pass in the store
  // this will be invoked for you
  const thunk = function(store) {
    // applyMiddleware will pass in next
    // next represents next piece of middleware to receive an action
    // this will be invoked for you
    return function(next) {
      // Action is what WE wrote in our code
      // this will be invoked for you
      return function(action) {
        if (typeof action === "function") {
          // invoke the action, i.e. make an AJAX request
          return action(store.dispatch, store.getState);
        }
        return next(action);
      };
    };
  };
```

---

## Demo #4: Thunk Middleware

---

## Questions?

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=221f4c7b-123a-4a71-aec1-f53f8e1fe6a3)