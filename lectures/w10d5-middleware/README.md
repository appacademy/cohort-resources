### W10D5

## Thunk Middleware

---

## Learning Objectives

- Review Redux Cycle
- Connect an API backend to React/Redux frontend
- Middleware and Thunk

---

## React

- Components (Class & Functional)
- Local (Component) State
- Props

Note:

- Class components give us access to local state and life cycle methods
- Functional components are simpler to build and dry up our code
- Components also have props, which can be threaded down to child components
- What 3 things will trigger a React component to re-render? (props changed, state change, parent re-rendering)
  - The third point isn't always the case - a child component will only re-render when it's parent re-renders if `shouldComponentUpdate` returns true (which it does bye default). However, you can write this method to return false in cases where the child doesn't need to re-render (typically if its props haven't changed)

---

## Redux

- Store
  - `getState` (function) -> read
  - `dispatch` (function) -> write
- `Provider` & `connect` -> Connected Components

Note:

- Containers allow us to map state and dispatch to our React components' props
- Avoids prop threading / drilling by providing the store to all components through provider, and connect to wrap our components in containers

---

### Redux Cycle

![img](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-only.png?token=AHKLMABGMH7DY6MU67ABWPS7PX5E6)

Note:

- Today, we are going to learn how to connect our React/Redux frontend to a backend

---

### Redux with Rails

![img](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-with-rails.png?token=AHKLMAHBG2IHH3Q7AYVLAXK7PX5JS)

---

### FANCY PANTS Redux with Rails

![Redux Cycle GIF](https://blog.gisspan.com/img/redux.gif)

---

## Connecting backend & frontend

- Frontend: Yesterday's demo
- Backend: ?

Note:

- Our backend will be rails!

---

### DEMO: Rails backend setup

Note:

- When done with demo, ask how do we connect our backend and frontend? AJAX

---

## Connecting backend & frontend

- API Utils via AJAX calls

```js
export const fetchAllShirts = () =>
  $.ajax({
    method: "GET",
    url: "/api/shirts",
  });
```

Note:

- The place that thunks are going to come into play for us is when we start making ajax requests
- We know that we need some api utils to be able to connect our backend and frontend, however how will we set that up with redux if redux can only handle POJO's, and we know our API utils is an actual promise? The answer in this case is by using a combination of thunks with redux

---

### Demo: APIUtils - AJAX

Note: Jump to demo

---

### What about updating our Redux store?

Note:

- With what we've done, we _can_ make a react app that talks to a backend
- We could import the APIUtils directly into a component, then make the requests from the component and update its local state.
- But how can we use these functions to update our Redux Store? The answer is Thunk Middleware, and thunk action creators

---

## Thunk Middleware

- Allows you to write _thunk_ action creators that return a _function_ insshirtd of POJO
- Have actions that are POJOs _or functions_
- **Benefits:**
  - Delay the dispatch of an action
  - Conditionally dispatch actions
- `applyMiddleware()`

Note:

- This is where Thunk Middleware comes into play for us
- Thunk middleware will Intercept `thunk_action_creators` that are dispatched _before_ they hit the `rootReducer`, and convert them into regular actions

---

## Redux actions

- Regular **action creator**:

```js
export const receiveShirts = (shirts) => ({
  type: RECEIVE_SHIRTS,
  shirts,
});
```

---

## Redux actions: thunks

- **Thunk action creator**:

```js
export const fetchAllShirts = () => (dispatch) =>
  ShirtAPIUtil.fetchAllShirts().then((shirts) =>
    dispatch(receiveShirts(shirts))
  );
```

---

## Redux actions compared

```js
export const receiveShirts = (shirts) => ({
  type: RECEIVE_SHIRTS,
  shirts,
});
```

```js
export const fetchAllShirts = () => (dispatch) =>
  ShirtAPIUtil.fetchAllShirts().then((shirts) =>
    dispatch(receiveShirts(shirts))
  );
```

---

## What the Thunk?!

---

## Thunk action creators

```js
export const fetchAllShirts = () => (dispatch, getState) =>
  ShirtAPIUtil.fetchAllShirts().then((shirts) =>
    dispatch(receiveShirts(shirts))
  );
```

```js
// thunk action creator
export const fetchAllShirts = function() {
  // thunk action
	return function(dispatch, getState) {
  		// AJAX call
      return ShirtAPIUtil.fetchAllShirts()
      	// when we get a response, dispatch regular action
        .then(shirts => dispatch(receiveShirts(shirts))
        // aka dispatch({type: RECEIVE_SHIRTS, shirts: shirts})
  }
}
```

---

### DEMO: Thunk Action Creators

---

### What the thunk?

- Our demo tried to use these new _thunk_ action creators, but we got a nasty error?

Note:
This error is because we aren't yet converting our actions to regular POJOs.

Its asking us to implement some middleware to handle this. We need to implement our Thunk middleware

---

## Thunk Middleware (Steps)

- IF the action is a function
  - Invoke the action, passing in `dispatch` and `getState`
- (else) the action is a POJO
  - Pass the action along to the next middleware or the reducer

---

### Redux with Rails

![Redux Cycle GIF](https://blog.gisspan.com/img/redux.gif)

Note:
. Now let's take a closer look at that middlewares part.

---

## Demystifying the thunk signature

- It looks weird

```javascript
const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

export default thunk;
```

---

```js
// applyMiddleware will pass in the store
// this will be invoked for you
const thunk = function (store) {
  // applyMiddleware will pass in next
  // next represents next piece of middleware to receive action
  // Will be invoked for you
  return function (next) {
    // Action is what WE wrote in our code
    // will be invoked for you
    return function (action) {
      if (typeof action === "function") {
        // invoke the action, aka make AJAX request
        return action(store.dispatch, store.getState);
      }
      return next(action);
    };
  };
};
```

---

### Thunk Action

```js
// Our action from thunk action creators
function(dispatch, getState) {
	// AJAX
  	return ShirtAPIUtil.fetchAllShirts()
      .then(shirts => dispatch(receiveShirts(shirts))
  }
```

---

### DEMO: Thunk Middleware

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=221f4c7b-123a-4a71-aec1-f53f8e1fe6a3)

---

# THANK YOU
