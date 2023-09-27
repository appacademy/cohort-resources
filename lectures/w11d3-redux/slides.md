# W11D3 - Redux

---

## Learning Objectives

+ Understand how Redux builds upon the idea of global application state
+ Generally explain how Redux handles data
+ Explain the role of each element in the Redux cycle
+ Incorporate Redux into a React application

---

## Agenda

1. Redux Overview
2. Redux Principles
3. Elements of Redux
	+ Store
	+ Actions
	+ Reducers
4. Demo Part 1
5. React + Redux
	+ `useSelector`
	+ `useDispatch`
6. Demo Part 2

---

## Redux Overview

+ Library that manages the entire *application state*
	+ All the data that is or can be displayed on the frontend of an application
+ Global state is managed by the `store`
  + Can only be changed by dispatching an `action`
 + Unidirectional data flow

---

## Sample State Tree

```javascript
  {
      posts : {
              1 : {
                  id : 1,
                  authorId : 1,
                  body : "......",
                  comments : [1, 2]
              },
              2 : {
                  id : 2,
                  authorId : 2,
                  body : "......",
                  comments : [3, 4, 5]
              }
      },
      comments : {
              1 : {
                  id : 1,
                  authorId : 2,
                  comment : ".....",
              },
              2 : {
                  id : 2,
                  authorId: 3,
                  comment : ".....",
              },
              3 : {
                  id : 3,
                  authorId : 3,
                  comment : ".....",
              },
              4 : {
                  id : 4,
                  authorId : 4,
                  comment : ".....",
              },
              5 : {
                  id : 5,
                  authorId : 3,
                  comment : ".....",
              }
      },
      users : {
              1 : {
                  id : 1,
                  username : "user1",
                  name : "User 1",
              },
              2 : {
                  id : 2,
                  username : "user2",
                  name : "User 2",
              },
              3 : {
                  id : 3,
                  username : "user3",
                  name : "User 3",
              }
      }
  }
```

---

## Motivation

+ Storing and managing data on the frontend of our application allows us to...
	+ Minimize API calls
  + Keep track of temporary changes on the page
  + Significantly speed up rendering
+ Better than Context API with more advanced applications (like your fullstacks)

---

## Redux

+ Separate library from React
+ Tools for managing the *application state*
	+ application state = any data on our frontend
+ Unidirectional dataflow

Note:
+ Something to remember: frontend data exists in the browser
+ Without a database, all information is unique to the user
  that is using the app at that moment

---

## Principles

+ Single source of truth
	+ The global state of an application is stored in a single object within the store
+ State is read-only
	+ The only way to change the state is to dispatch an action
+ Changes are made with pure functions
	+ To specify how the state tree is transformed by actions, write pure reducers
  
---

## Elements of Redux

+ The **store** holds the whole state tree of the application
+ An **action** is a plain object that represents an intention to change the state
+ A **reducer** generates a new state from the previous state and an **action**

---

![Redux Cycle GIF](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/middleware/redux_cycle_gif.gif)

---

## Store

+ Holds the whole state tree of the application
	+ Wraps around state object and reducer function
+ Returned from `createStore` method
+ Three methods:
	+ `getState()`
  + `dispatch(action)`
  + `subscribe(callback)` (not something we will ever call directly)
  
Note:
+ There is also the subscribe method on the store, but using the react-redux
	library allows us to not have to manually subscribe our components to the 
  store ourselves
  
---

## `createStore`

+ Takes three arguments, though only the first is required
	+ `reducer`: function that returns the next state tree, given the current 
  state tree and an action to handle
	+ `preloadedState`: the initial state
	+ `enhancer`: most common use case is middleware - more on this Friday!
  
---

## Example

```js
  // store/index.js
  import { createStore } from 'redux';

  const store = createStore(reducer, preloadedState, enhancer);

  export default store;
```

---

## Action

+ POJO that represents an intention to change the state
	+ Must have a `type` property that describes the requested change to state
  + Optionally contains information to be inserted into the next state
+ Sent into the `store` via the `dispatch` method and gets passed to all reducers

---

## Action Creator

+ Function that dynamically generates an action object
+ Naming convention is usually a present-tense verb followed by a resource
	+ e.g. `receiveUser`, `removePost`, `fetchProducts`, etc.
+ Should use constants for type property for better typo detection

```js
  const RECEIVE_POST = 'RECEIVE_POST';

  const receivePost = post => ({
    type: RECEIVE_POST,
    post
  });
```

Note:
+ We write action creators instead of just dispatching the objects manually
  because it it is really common in a redux integrated app
+ faster to type `dispatch(receivePost(post))` than to type
  `dispatch({type: "RECEIVE_POST", post})` and again reduces chances for typos.

---

## Reducer

+ *Pure function* that generates new state using the previous state and an action
  + Pure functions don't modify arguments and have deterministic output
+ Multiple reducers can be combined using `combineReducers`
	+ Dispatched actions hit every single reducer, but that doesn't mean every 
  reducer has to respond to that action
+ Remember: state is *read-only*
	+ Reducers either return the same unchanged state or new state objects
  
Note:
+ important that reducers return previous state if theres no change, otherwise every action will trigger the subscribers (any components listening to state changes)

---

## Example (Part 1)

```js
  // store/postReducer.js

  const postReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state.freeze());
    
    switch (action.type) {
      case RECEIVE_POST:
        nextState[action.post.id] = action.post;
        return nextState;
      default:
        return state;
    };
  };

  export default postReducer;
```

---

## Example (Part 2)

```js
  // store/rootReducer.js
  import { combineReducers } from 'redux';
  import postReducer from './postReducer.js';
  import commentReducer from './commentReducer.js';

  const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer
  });

  /*
  {
    posts: {},
    comments: {}
  }
  */
```

---

## Break

---

## Demo Part 1: Setup, Actions & Reducers

---

## Break

---

## React + Redux

+ The two libraries play very nicely together when using `react-redux`
	+ `npm install redux react-redux`
+ The `react-redux` package gives us a `Provider` component that we will use to 
wrap our `<App />` component
  + Need to pass in the `store` object as a prop to `Provider`
+ Instead of `useContext`, `react-redux` gives us two primary hooks
	+ `useSelector(callback)`
	+ `useDispatch()`

---

## `useSelector(callback)`

+ Returns data from the Redux state as specified by the single callback argument
	+ The callback takes in the entire Redux state and returns desired portions
  + ex: `const teas = useSelector(state => state.teas)`
+ The component will update whenever the return value from the callback changes (using `===` strict equality)

---

## Example

```js
  import { useSelector } from 'react-redux';

  function TeasList() {
    const teas = useSelector((state) => state.teas);
    const teaArray = Object.values(teas)

    return (
      <ul>
        {teaArray.map(tea => (
          <li key={tea.id}>{tea.name}</li>
        ))}
      </ul>
    );
  };
```

Note:
+ can't use Object.values inside useSelector since it would return a new array every time it is called
---

## `useDispatch`

+ Changes to the Redux state can only be made by dispatching actions
+ Hook that simply returns the `dispatch` function when invoked
	+ Allows us to `dispatch` actions from within a component

---

## Example

```js
  import { useDispatch } from 'react-redux';
  import { addTea } from '../store/teaReducer';

  function AddTeaButton() {
    const dispatch = useDispatch();

    return (
      <button onClick={() => dispatch(addTea({ id: 5, name: 'green' }))}>
        Add Tea
      </button>
    );
  };
```

---

## DEMO Part 2: useSelector & useDispatch

---

## State Shape

+ Eliminate nesting and object redundancy as much as possible
+ Duplicate data is very difficult to update appropriately
+ Global state object should be *normalized*

---

## Normalizing State Shape

+ The basic concepts of normalizing data are as follows
	+ Each type of data gets its own "table" in the state.
  + Each "data table" should store the individual items in an object, with the 
  IDs of the items as keys and the items themselves as the values.
  + Any references to individual items should be done by storing the item's ID.
  + Arrays of IDs should be used to indicate ordering.
  
---

## Questions

---

## Thanks!