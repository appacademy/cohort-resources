# W11D3 - Redux

---

## Learning Objectives

+ Understand how Redux builds upon the idea of global application state
  - Learn how can we manage, shape, and change our global information within our app. 
+ Generally explain how Redux handles data
  - Learn how we approach managing bits of data that contribute to the entire app
+ Explain the role of each element in the Redux cycle
  - store, actions, and reducers ⇒ we’ll answer how these elements contribute
  to the whole react-redux cycle
+ Incorporate Redux into a React application
  - Learn how the combination of react and redux create an awesome powerhouse app

Notes:
- Redux allows us to manage, shape, and change our global information 
within our app.


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
  + Changes are persisted to the database
+ Most popular implementation of the Flux pattern
  + Global state is managed by the `store`
  	+ Can only be changed by dispatching an `action`
  + Unidirectional data flow

Note: 
- Not unique to React, can be used with other libraries to manage application state
- Example: A grocery stores sell different items based on categories
Dairy, Meat, Seafood, Desserts, Vegetables, Fruits
the items sold and bought from the store is analagous to a redux store which 
manages the state of our react application, redux allows us to keep track of 
what’s being added, removed. We leverage redux to keep data organized in the 
frontend. We don’t touch a db today but we’ll soon learn how we connect the two.

---

## Flux Pattern

![flux pattern](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-with-client-action-1300w.png)

Note:
  - Unidirectional flow of data with a centralized dispatcher
  QUESTION: 
    - Since state is read only, how to we return a modified state?
      - In simple terms, The only way to change the state is to dispatch an action
      - we have to dispatch an action to reducers: when we dispatch an action to 
      reducers, our reducers return a newState object with the modifications 
      we want to make which then get added to the overall state (The Redux Store)
    - How do we get around changing state when it is read only?
      - freeze the state!
      - make a copy
      - update the copy
      - return the copy in place of the original state

---

## Principles

+ Single source of truth
	+ The global state of an application is stored in a single object within the store
+ State is read-only
	+ The only way to change the state is to dispatch an action
+ Changes are made with pure functions
	+ To specify how the state tree is transformed by actions, write pure reducers

Note:
- Ask a student to remind us what the principles of a pure function are
  - A Pure Function is a function (a block of code) that always returns the same 
  result if the same arguments are passed. It does not depend on any state or 
  data change during a program's execution. Rather, it only depends on its input arguments.

---

## State Shape

+ Eliminate nesting and object redundancy as much as possible
+ Duplicate data is very difficult to update appropriately
+ Global state object should be *normalized*

Note:
- Ask for input on why nesting data can be probablamatic
- Give an example of a comment nested in a post nested in a user object
  - If we just want to display the comment on the post page do we need all the 
  user data and associated data?
  - Expand on this as far as you'd like. 
- Can use your own examples as well

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
                  id: 1,
                  username : "user1",
                  name : "User 1",
              },
              2 : {
                  id: 2,
                  username : "user2",
                  name : "User 2",
              },
              3 : {
                  id: 3
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

---

## Elements of Redux

+ The **store** holds the whole state tree of the application
+ An **action** is a plain object that represents an intention to change the state
+ A **reducer** generates a new state from the previous state and an **action**

Note:
- The store holds all the data of an application as a POJO, its state
- Actions with new/different data are passed to reducers
- Reducers create a new version of state based on the data in the action
  - Reducers then update the store with the new version of state
- The store notifies any part of the application listening for changes
  - More on this later

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
	+ `reducer`: function that returns the next state tree, given the current 
  state tree and an action to handle
	+ `preloadedState`: the initial state
	+ `enhancer`: most common use case is middleware - more on this tomorrow!
  
---

## Example

```js
  / store/index.js
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
        return nextState;
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

## DEMO Part 1: Setup, Actions & Reducers

1. Start with boilerplate from create-react-app v17:
`npx create-react-app tea-shop --template @appacademy/react-v17 --use-npm`

 Note: remove .git and explain why
   - `create-react-app` sets up our app as a git initialized repo
   - If we commit this project to our class's Lecture repo it will cause a 
   nested git repo

2. install the following dependencies: 
`$ npm install react-redux react-router-dom@5 redux`

3. create store/index.js and setup basis for our redux store: 
    - `$ mkdir src/store`
    - `$ touch src/store/index.js`


```js
  import { createStore, combineReducers } from 'redux';

  const dummyReducer = (state, action) => (state);
  // Since we do not have a reducer yet, we will make a dummy reducer to setup 
  // our store, we return state for now so we don't overwrite the initial state.

  const configureStore = (preloadedState = {}) => (
    createStore(dummyReducer, preloadedState)
  );

  export default configureStore;
```

Note: 
  - `configureStore` is a function that we create, it will take a `preloadedState` 
  (initial global state of our application), and will return the output of `createStore`.

  - `createStore` is a function from `redux` that returns a Redux store. The store 
  is nothing but an object where we will hold relevant data, and every component 
  will have access to it. It allows us to read the global state of our application, 
  dispatch actions, and subscribe our React Components to changes in that state. 

  - `createStore` takes one reducer function as an argument, a preloaded state, 
  and an optional enhancer, we will be learning about middleware tomorrow, and 
  we will pass it as a third argument then.

  - Don't worry that `createStore` appaears crossed out in VSCode. It's just VSCode
  telling us there is another method that is now reccomneded called `configureStore`
    - Seeing as we are writing our own `configuresStore` we will still want to use `createStore`

  - For now, we will use a dummyReducer: `const dummyReducer = (state, action) => ({});` 
  Once we have an actual reducer, we will use that one instead

  - Because we can only pass one reducer function to `createStore`, we will be 
  using the `combineReducers` function from redux in a bit. This will allow us to 
  have one `rootReducer` that delegates to all the other reducer functions.

  - There should only be one store in the whole application. 


4. Now that we have a function that creates our store, we will go to src/index.js. 
Here we need to import Provider from `react-redux`. This component will provide 
access to the store to all of its children. We will give it our store as a prop, 
and we will not need to thread it down. Our whole app will have access to it.
- Redux is context! 

`root index.js`
```js
  import React from 'react'; 
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux'; // TO DO
  import './index.css';
  import App from './App';
  import configureStore from './store'; // TO DO

  const initialState = {
    teas: {
      1: {
        id: 1, flavor: 'green', price: 5.33
      }
    }
  };
  // initialState will define the global state of our application when it first loads.

  const store = configureStore(initialState);
  // the value of store is now the return value of configureStore which is our redux store.

  // testing
  window.store = store;
  // window assignment so we can test from the console

  const Root = () => ( // note the use of implicit return, can also use explicit return
    <Provider store={store}>
      <App />
    </Provider>
    // The provider component will allow every child component to have access to 
    // the store. We will be using hooks from react-redux to achieve this.
  );


  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );

```

------------------------------------------------

Now we are done with setting up our redux store.

------------------------------------------------

5. We will proceed to building actions and reducers.

  - `$touch src/store/teaReducer.js`

```js
  // Every action must have a type, although we could get away with just using 
  // strings, we will use constants to prevent any silent errors, like typos.

  const RECEIVE_TEA = 'RECEIVE_TEA';
  const RECEIVE_TEAS = 'RECEIVE_TEAS';
  const REMOVE_TEA = 'REMOVE_TEA';

  // Next we will build our action creators. Actions are plain objects that must 
  // at least have a type. Action creators return actions.

  /* ----ACTION CREATORS---- */

  export const receiveTea = tea => {
      return {
          type: RECEIVE_TEA,
          tea: tea
      };
  };
  // this action takes in a tea object, and returns an object with two key value 
  // pairs, the type, and the tea object. We will use this action to dispatch 
  // our tea to the redux store and update the global state of our application.

  export const receiveTeas = teas => {
      return {
          type: RECEIVE_TEAS,
          teas // this is syntatic sugar for teas: teas
      };
  };
  // Similarly, an action creator for multiple teas, sometimes, we will be 
  // getting a lot of teas at a time and not just one, i.e. if we fetch all teas.

  export const removeTea = teaId => ({ // note use of explicit return. Can't use a debugger or console.log
    type: REMOVE_TEA,
    teaId
  });
  // Finally, an action that we will use when we intend to remove a tea, we will 
  // not need anything but the id because of the way our redux store is setup, 
  // an id holds the whole object. We will remove the key-value pair where the key matches that id.


  /* ----REDUCER---- */
  // A reducer is a pure function that takes in 2 arguments, state, and action. 
  // return values are identical for identical arguments, and the function has 
  // no side effects, like mutating.
  const teaReducer = (state = {}, action) => {
    Object.freeze(state);
      // Freezing an object makes existing properties non-writable.

      const nextState = { ...state }; 
      // We make a copy of our state, because we will not mutate the original input.
      //   console.log(action);

    switch (action.type) { //just a fancy if statement
      case RECEIVE_TEA:
        nextState[action.tea.id] = action.tea;
        return nextState;
        // when the action.type is RECEIVE_TEA, we create a new key-value pair 
        // in our state. The key is the id of the tea, and the value is the tea 
        // object. (whiteboard it)
      case RECEIVE_TEAS:
        return { ...nextState, ...action.teas };
          // When we receive many teas, we add them to the nextState, and return it.
      case REMOVE_TEA:
        delete nextState[action.teaId];
        return nextState;
          // When the action type is REMOVE_TEA, we want to delete the key-value 
          // pair from the state where the id of the input matches a tea in our 
          // state, and return the new state after the removal.
      default:
        return nextState;
          // By default, we always return the copy of the state. This is because 
          // the root reducer will delegate to every single reducer. If the 
          // reducer did not receive the action.type, by default it will return 
          // the previous state. 
    };
  };

  export default teaReducer;

```

6. Since the `createStore` function can only take one reducer, and we will most 
likely have more than one entity, we are going to need a `rootReducer` that will 
delegate to all of our reducers.

Note: 
  - Go to src/store/index.js and define a root reducer to replace our dummy reducer
  - Make sure to import the `teaReducer`
```js
  const rootReducer = combineReducers({
    teas: teaReducer
  });

  const configureStore = (preloadedState = {}) => {
      return createStore(rootReducer, preloadedState);
  };

  // The combineReducers function takes in an object where the values are 
  // reducer functions. It turns that object into a single reducer function. 
  // Every time an action is dispatched, combine reducers will delegate the 
  // action to every single value, and each individual reducer will return 
  // their own slice of state.
```

7. Let's import our actions in index.js from the root of src so we can assign 
them to the window and test our actions and reducer.

Add to index.js (src/index.js)
```js
  import {receiveTea, receiveTeas, removeTea} from './store/teaReducer'

  window.receiveTea = receiveTea
  window.receiveTeas = receiveTeas
  window.removeTea = removeTea

```

Note:
  - Testing: Define a couple of individual teas and a group of teas in the console
```js
  const blackTea = {
      id: 2,
      flavor: 'black tea',
      price: 3.5
  }    

  const passionTea = {
      id: 3,
      flavor: 'passion tea',
      price: 4
      
  }

  const teas = { 
    4: { 
      id: 4, 
      flavor: 'Chai', 
      price: 4.32
    }, 
    5: { 
      id: 5, 
      flavor: 'Rooibos', 
      price: 5.25
    }
  }
```
  - Use these teas to test our three actions and show our Redux store updating
    - `store.dispatch(receiveTea(blackTea))`
    - `store.getState().teas`
    - `store.dispatch(removeTea(blackTea.id));`
    - `store.getState().teas`
    - `store.dispatch(receiveTeas(teas))`
    - `store.getState().teas`


* Return to slides, take a break and continue on with Redux

---

Break

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
	+ Callback takes in the entire Redux state and returns desired portions
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

## DEMO Part 2: useSelector & useDispatch

1. Now that we have our actions working, let's make an index page for our index 
of teas.

Note: 
    - `$ mkdir src/components`
    - `$ mkdir src/components/TeaIndex`
    - `$ touch src/components/TeaIndex/teaIndex.jsx`
    
```js
  // First, we need to import the useSelector hook from react-redux to be able 
  // to access the redux store from our component
  import { useSelector } from "react-redux";

  const TeaIndex = props => {
    // the useSelector hook will take in a callback function that takes the 
    // global state as an argument, and returns desired slices
    const teas = useSelector(state => Object.values(state.teas));
    // useSelector subscribes the component to the specified slice of state (teas). When the 
    // value of teas changes, the component will rerender
    // Object.values will take all the values of an object and return them in an array

    return (
      <div className="tea-index">
        <h2>Hi I'm the TeaIndex</h2>
        {teas.map(tea => (
          <div className="tea-index-item" key={tea.id}>
            <ul>
              <li>
                <h4>Flavor: {tea.flavor}</h4>
              </li>
              <li>
                <p>Price: {tea.price}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  };

  export default TeaIndex;

```
Note: 
- Add some basic styling by creating a `TeaIndex.css` file in the TeaIndex 
component folder and importing it into the `TeaIndex.js`

`TeaIndex.css`
```css
  .tea-index {
      border: 2px solid green;
  }

  .tea-index-item {
      border: 2px solid purple;
      margin: 5px;
  }
```

`TeaIndex.jsx`
```jsx
  import './TeaIndex.css'
  // ...
```

2. Add the `TeaIndex` to `App` and test it on the browser

```jsx
  import TeaIndex from "./components/TeaIndex/TeaIndex";

  function App() {
    return (
      <>
        <h1>Hello from App</h1>
        <TeaIndex />
      </>
    );
  }

  export default App;
```
Note: 
- dispatch actions to populate the `teas` slice of state
  - you should be able to press up a few times in the concole to find the teas
  and dispatched actions we previously tested

3. Next, we will be creating a form so we can create new teas!

Note: 
  - `mkdir src/components/TeaForm`
  - `touch src/components/TeaForm/AddTeaForm.jsx`

```js
  // AddTeaForm.jsx
  import { useState } from "react";
  import { useDispatch } from "react-redux";
  import { receiveTea } from "../../store/teaReducer";

  const AddTeaForm = props => {
    // We can only make updates to the redux store by dispatching actions, the 
    // useDispatch hook is what allows us to do this directly from our functional 
    // component. Its return value is the dispatch function ready to be invoked 
    // with an action. Therefore, we save it to a constant that we can invoke later.

    const dispatch = useDispatch();

    // We will need two slices of local state for the flavor and price to be 
    // updated with user input
    const [flavor, setFlavor] = useState('');
    const [price, setPrice] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        
        // we need a way to generate IDs because we don't have a backend or 
        // database yet.
        let id = Math.floor(Math.random()*1000);

        const tea = {
            id: id,
            flavor: flavor, //value refers to state
            price: price //value refers to state
        };
        // good place to validate

        // once our object is done, it is ready to be dispatched
        dispatch(receiveTea(tea));

        // finally, we clean our form
        setFlavor('');
        setPrice('');
    };

    return (
        <div className="tea-form">
            <h2>I'm the AddTeaForm</h2>
            <form onSubmit={handleSubmit}>
                <label for="flavor">Flavor:</label>
                <input
                id="flavor"
                value={flavor} 
                onChange={e => setFlavor(e.target.value)}
                />
                <label for="price">Price:</label>
                <input
                id="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
                />
                <input type="submit" value="Add Tea" />
            </form>
        </div>
    );
  };

  export default AddTeaForm;
```

- Create a `TeaForm.css` file and add some style

`AddTeaForm.css`
```css
  .tea-form {
    border: 2px solid red;
    padding: 5px;
    margin-top: 5px;
  }

  .tea-form > form > input {
    margin-right: 5px;
  }
```

`AddTeaForm.jsx`
```jsx
  import './TeaIndex.css'
  // ...
```

5. Import and add the `TeaForm` to `App` and test it out!!!

```jsx
  import AddTeaForm from "./components/TeaForm/AddTeaForm.jsx"

  function App() {
    return (
      <>
        <h1>Hello from App</h1>
        <TeaIndex />
        <AddTeaForm />
      </>

    )
  }
```

---

## Questions?

---

## Thanks!