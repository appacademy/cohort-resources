# Here is a step by step of Redux

# DEMO 1: Setup, Actions & Reducer

1. Start with boilerplate from create-react-app v17:
`npx create-react-app art-museum --template @appacademy/react-v17 --use-npm`

 Note: remove .git

2. install the following dependencies: 
`npm install react-redux react-router-dom@5 redux`

3. create store/index.js

`store/index.js`
```js

import { createStore, combineReducers } from 'redux';
// import teaReducer from './teaReducer';

// const rootReducer = combineReducers({
//   teas: teaReducer
// });

const dummyReducer = (state, action) => (state);
// Since we do not have a reducer yet, we will make a dummy reducer to setup our store, we return state for now so we don't overwrite the initial state.

const configureStore = (preloadedState = {}) => (
  createStore(dummyReducer, preloadedState)
);

export default configureStore;
```

    Note: 
    - configureStore is a function that we create, it will take a preloadedState (initial global state of our application), and will return the output of createStore.

    - createStore is a function from redux that returns a Redux store. The store is nothing but an object where we will hold relevant data, and every component will have access to it. It allows us to read the global state of our application, dispatch actions, and subscribe our React Components to changes in that state. 

    - createStore takes one reducer function as an argument, a preloaded state, and an optional enhancer, we will be learning about middleware tomorrow, and we will pass it as a third argument then.

    - For now, we will use a dummyReducer: 
`const dummyReducer = (state, action) => ({});` Once we have an actual reducer, we will use that one instead

    - Because we can only pass one reducer function to createStore, we will be using the combineReducers function from redux in a bit. This will allow us to have one rootReducer that delegates to all the other reducer functions.

    - There should only be one store in the whole application. 


4. Now that we have a function that creates our store, we will go to src/index.js. Here we need to require Provider from `react-redux`. This component will provide access to the store to all of it's children. We will give it our store as a prop, and we will not need to thread it down. Our whole app will have access to it

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

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
  // The provider component will allow every child component to have acess to the store. We will be using hooks from react-redux achieve this.
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

```

---------------------------

Now we are done with setting up our redux store.

---------------------------

5. We will proceed to building actions and reducers.

Note: `$ touch src/store/teaReducer.js`

```js

//Every action must have a type, although we could get away with just using strings, we will use constants to prevent any silent errors, like typos.


const RECEIVE_TEA = 'RECEIVE_TEA';
const RECEIVE_TEAS = 'RECEIVE_TEAS';
const REMOVE_TEA = 'REMOVE_TEA';


// Next we will build our action creators. Actions are plain objects that must at least have a type.

/* ----ACTION CREATORS---- */

export const receiveTea = tea => {
    return {
        type: RECEIVE_TEA,
        tea: tea
    }
};
// this action takes in a tea object, and returns an object with two key value pairs, the type, and the tea object. We will use this action to dispatch our tea to the redux store and update the global state of our application.

export const receiveTeas = teas => {
    return {
        type: RECEIVE_TEAS,
        teas
    }
};
// Similarly, an action creator for multiple teas, sometimes, we will be getting a lot of teas at a time and not just one, i.e. if we fetch all teas.

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  teaId
});
// Finally, an action that we will use when we intend to remove a tea, we will not need anything but the id because of the way our redux store is setup, an id holds the whole object. We will remove the key-value pair where the key matches that id.


/* ----REDUCER---- */
// A reducer is a pure function that takes in 2 arguments, state, and action. return values are identical for identical arguments, and the function has no side effects, like mutating.
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
       // when the action.type is RECEIVE_TEA, we create a new key-value pair in our state. The key is the id of the tea, and the value is the tea object. (whiteboard it)
    case RECEIVE_TEAS:
      return { ...nextState, ...action.teas };
        // When we receive many teas, we add them to the nextState, and return it.
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
        // When the action type is REMOVE_TEA, we want to delete the key-value pair from the state where the id of the input matches a tea in our state, and return the new state after the removal.
    default:
      return nextState;
        // By default, we always return the copy of the state. This is because the root reducer will delegate to every single reducer. If the reducer did not receive the action.type, by default it will return the previous state. 
  };
};

export default teaReducer;

```

6. Since the createStore function can only take one reducer, and we will most likely have more than one entity, we are going to need a rootReducer that will delegate to all of our reducers.

Note: 
    -  Go to src/store/index.js and define a root reducer:
```js

const rootReducer = combineReducers({
  teas: teaReducer
});

const configureStore = (preloadedState = {}) => {
    return legacy_createStore(rootReducer, preloadedState)
}


// The combineReducers function takes in an object where the values are reducer functions. It turns that object into a single reducer function. Every time an action is dispatched, combine reducers will delegate the action to every single value, and each individual reducer will return their own slice of state.

```

6. Let's import our actions in index.js from the root of src so we can assign them to the window and test our actions and reducer.

Add to index.js (src/index.js)
```js
import {receiveTea, receiveTeas, removeTea} from './store/teaReducer'

window.receiveTea = receiveTea
window.receiveTeas = receiveTeas
window.removeTea = removeTea

```

Note:
    - Testing: Ddefine a couple of teas in the console:
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
```

# DEMO 2. useSelector & useDispatch

7. Now that we have our actions working, let's make an index page for our index of teas.

Note: 
    - `$ mkdir src/components`
    - `$ mkdir src/components/TeaIndex`
    - `$ touch src/components/TeaIndex/teaIndex.jsx`
    
```js

// First, we need to import the useSelector hook from react-redux to be able to access the redux store from our component
import { useSelector } from "react-redux";

const TeaIndex = props => {

    // the useSelector hook will take in a callback function that takes the global state as an argument, and returns desired slices
  const teas = useSelector(state => Object.values(state.teas));
  // It suscribes the component to the specified slice of state. When the value of teas changes, the component will rerender

  return(
    <div className="tea-index">
      <h2>Hi I'm the TeaIndex</h2>
      {teas.map(tea => (
        <div key={tea.id}>
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
  )
};

export default TeaIndex;

```

8. Test it on the browser, we should find the previously defined teas by pressing up a few times.


9. Next, we will be creating a form so we can create new teas!

Note: 
    -   `mkdir src/components/TeaForm`
    -   `touch src/components/TeaForm/teaForm.jsx`

teaForm.js
```js

import { useState } from "react";
import { useDispatch } from "react-redux";
import { receiveTea } from "../../store/teaReducer";

const AddTeaForm = props => {

    // We can only make updates to the redux store by dispatching actions, the useDispatch hook is what allows us to do this directly from our functional component. It's return value is the dispatch function ready to be invoked with an action. Therefore, we save it to a constant that we can invoke later.

    const dispatch = useDispatch();

    // We will need two slices of local state for the flavor and price to be updated with user input
    const [flavor, setFlavor] = useState('');
    const [price, setPrice] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        
        //we need a way to generate IDs because we don't have a backend or database yet.
        let id = Math.floor(Math.random()*1000);

        const tea = {
            id: id,
            flavor: flavor, //value refers to state
            price: price //value refers to state
        };
        // good place to validate

        // once our object is done, it is ready to be dispatched
        dispatch(receiveTea(tea));

        //finally, we clean our form
        setFlavor('');
        setPrice('');
    };

    return(
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
    )
};

export default AddTeaForm;

```