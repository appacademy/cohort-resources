## W11D4
# React-Redux

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
4. Demo (Part 1)
5. React + Redux
	+ `useSelector`
	+ `useDispatch`
6. Demo (Part 2)

---

## Redux Overview

+ Library that manages the entire *application state*
	+ All the data that is or can be displayed on the frontend of an application
  + Changes are persisted to the database
+ Most popular implementation of the Flux pattern
  + Global state is managed by the `store`
  	+ Can only be changed by dispatching an `action`
  + Unidirectional data flow

---

## Flux Pattern

![flux pattern](https://i.stack.imgur.com/qmqki.png )

Note:
    Unidirectional flow of data with a centralized dispatcher

---

## Principles

+ Single source of truth
	+ The global state of an application is stored in a single object within the store
+ State is read-only
	+ The only way to change the state is to dispatch an action
+ Changes are made with pure functions
	+ To specify how the state tree is transformed by actions, write pure reducers

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

## Sample State Shape

---

## Motivation

+ Storing and managing data on the frontend of our application allows us to...
	+ Minimize API calls
  + Keep track of temporary changes on the page
  + Significantly speed up rendering

---

## Elements of Redux

+ The **store** holds the whole state tree of the application
+ An **action** is a plain object that represents an intention to change the state
+ A **reducer** generates a new state from the previous state and an **action**

---

## Store

+ Holds the whole state tree of the application
	+ Wraps around state object and reducer function
+ Returned from `createStore` method
+ Two primary API methods
	+ `getState()`
  + `dispatch(action)`
  
---

## `createStore`

+ Takes three arguments, though only the first is required
	+ `reducer`: function that returns the next state object, given the current 
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
	+ e.g. `receiveUser`, `removePost`, `loadProducts`, etc.
+ Should use constants for type property for better typo detection

```js
  const RECEIVE_TEA = 'RECEIVE_TEA';

  const receiveTea = tea => ({
    type: RECEIVE_TEA,
    tea
  });
```

---

## Reducer

+ *Pure function* that generates new state using the previous state and an action
+ Multiple reducers can be combined using `combineReducers`
	+ Dispatched actions hit every single reducer, but that doesn't mean every 
  reducer has to respond to that action

---

## Example (Part 1)

```js
  // store/teaReducer.js

  const teaReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state.freeze());
    
    switch (action.type) {
      case RECEIVE_TEA:
        nextState[action.tea.id] = action.tea;
        return nextState;
      default:
        return state;
    };
  };

  export default teaReducer;
```

---

## Example (Part 2)

```js
  // store/rootReducer.js
  import { combineReducers } from 'redux';
  import teaReducer from './teaReducer.js';
  import cookieReducer from './cookieReducer.js';

  const rootReducer = combineReducers({
    teas: teaReducer,
    cookies: cookieReducer
  });

  /*
  {
    teas: {},
    cookies: {}
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
	+ Redux is able to build on top of the native React context
  + Need to pass in the `store` object as a prop to `Provider`
+ Instead of `useContext`, `react-redux` gives us two primary hooks
	+ `useSelector`
	+ `useDispatch`

---

## `useSelector`

+ Returns data from the Redux state as specified by the single callback argument
	+ The callback takes in the entire Redux state and returns desired portions
+ Turns the wrapping component into a consumer, meaning it will update whenever 
the requested slice of state changes
+ Selector functions are often defined in a separate file and reused across 
multiple components

---

## Example

```js
  import { useSelector } from 'react-redux';

  function TeasList() {
    const teas = useSelector((state) => Object.values(state.teas));

    return (
      <ul>
        {teas.map(tea => (
          <li key={tea.id}>{tea.name}</li>
        ))}
      </ul>
    );
  };
```

---

## `useDispatch`

+ Can only make changes to the Redux state by dispatching actions
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

## Demo Part 2: useSelector & useDispatch

---

## Questions

---

## Thanks!