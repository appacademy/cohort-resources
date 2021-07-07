# W10D4 - Redux

---

![dog-finds-fish](https://media0.giphy.com/media/QLUE7bBjOJxe0/giphy.gif)

---

![shaq-cat](https://media0.giphy.com/media/uTvy5kvquPu36/giphy.gif)

---

## Learning Roadmap (The slow build...)

+ Today: Intro to the Redux Pattern/Cycle
+ Tomorrow: Connecting React and Redux
+ Monday: Adding a backend + Middleware
+ Tuesday: Formatting backend response + putting it all together
+ Wednesday: Frontend Routing
+ Thursday: Good ol' Auth

---

## Learning Objectives (Learn how to do it.)

+ Understand what the state of an application is
+ Understand how to use Redux (the most popular implementation of Flux)
+ Get familiar with the Redux pattern
  + Parts: Store, Reducers, Actions

---

## Lecture Outline


+ Redux Principles
+ File Structure
+ Store, Actions, & Reducers Demo

---

## Application State

+ All the information that is displayed and/or available to display on the frontend of an application
+ When a change is made to an application resource (i.e. CREATE, UPDATE, or DESTROY) the change is persisted to the database on the back-end and updated in state on the front-end.

---

## Why use Application State?

+ Minimize api calls to our backend
+ Ability to make changes on the webpage that don't need to be saved to the database
+ Rendering speed advantage

---

## Flux

+ Frontend application architecture
+ Unidirectional data flow
+ Store manages the global state of an application, and can only be changed via dispatched `actions`

Note that Flux is _not_ specific to React

---

## Redux

+ Most popular implementation of the Flux architecture
+ Application state represented as one giant POJO
+ Powerful because of its restrictions
+ Developed by Dan Abramov in 2015 (shortly after moved to the React team)

---

## Redux Principles

+ Single Source of Truth
+ State is read-only
+ Changes are made with pure functions (reducers)

---

![redux-diagram](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w11d1-thunk/assets/redux-cycle-only.png?token=AK6ID6LGCAI5IWH4P6FJVNDAMIMFA)

---

### Sample State Shape
```js
{
    stocks: {
      1: {
        id: 1,
        name: "Starbucks",
        ticker: "SBUX",
        price: 52.00
      },
      2: {
        id: 2,
        name: "Twitter",
        ticker: "TWTR",
        price: 31.96
      },
      3: {
        id: 3,
        name: "Microsoft",
        ticker: "MSFT",
        price: 106.43
      },
    },
    users: {
      1: {
        id: 1,
        username: "Warren Buffett",
        imgUrl: "https://s3.amazonaws.com/easytrade/filename"
      },
      2: {
        id: 2,
        username: "Jordan Belfort",
        imgUrl: "https://s3.amazonaws.com/easytrade/filename"
      }
    },
    watches: {
      1: {
        id: 1,
        stockId: 3,
        userId: 1
      },
      2: {
        id: 2,
        stockId: 1,
        userId: 3
      },
      3: {
        id: 3,
        stockId: 3,
        userId: 2
      }
    },
  }
```

---

## File Structure

+ Nest entire React app under `frontend` folder
  + Setup entry file inside
  + Same structure that we learned on Tuesday with a few new folders
  	+ `components`
  	+ `actions`
    + `reducers`
    + `store`

---

## Store

+ Object managing the state of the application
+ With Redux, we only have one store (other Flux implementations have multiple)
+ Use `createStore(RootReducer, [preloadedState], [enhancer])` to build store object.
  + (Don't worry about enhancers for now! We'll get into this next week.)

---

### Store API 

+ `getState()` - see the current state of your application
+ `dispatch(action)` - dispatch an action to update state

There's more in there, but we don't need anything else for now.

---

## Action Creators 

+ Functions that return an action
  + an action is an object with a `type` property
  + may also carry a payload
+ Use action creators to dynamically determine the payload
  + abstract this logic out of components
+ Use constants for all 'type' values

```js
export const RECEIVE_TEA = "RECEIVE_TEA";

export const receiveTea = (tea) => ({
  type: RECEIVE_TEA,
  tea
});
```

---

## Reducers 

+ **Pure functions** that update state based on the `action`'s type
+ Returns either a new object with the updated state or the same state object
+ `RootReducer` combines multiple reducers into one using `combineReducers`
  + Each reducer receives every dispatched action but only deals with its own slice of state

---

## Code Demo: Store, Actions, & Reducers
  
---

## State Shape Recap

+ Entire *state tree* is a POJO
+ Each reducer corresponds to a key in the store's state
  + i.e. the structure of state tree is determined by reducers and their return values

```js
// reducers/root_reducer.js
combineReducers({
  teas: teasReducer,
  cookies: cookiesReducer
})

// sample store.getState()
{
  teas: {},
  cookies: {}
}
```
---

## When Is Redux a Good Idea?

+ Your data changes over time
+ You want to cache data in memory, but it can change while cached
+ Your data is relational and models include and depend on each other
+ The same data is assembled from different sources and can be rendered in several places throughout the UI.

---

## Trade-offs for Redux

+ Pros
  + Makes it easy to reason about complex data and UI changes
  + Complements React well
+ Cons
  + Boilerplate code

---

## Questions about Redux?

---

## Thanks
