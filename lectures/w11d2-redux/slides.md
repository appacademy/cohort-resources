# W11D2 - Redux

---

## Learning Roadmap (The slow build...)

+ Today: Intro to the Redux Pattern/Cycle
+ Tomorrow: Connecting React and Redux
+ Thrusday: Adding a backend + Middleware
+ Friday: Formatting backend response + putting it all together
+ Monday: Frontend Routing
+ Tuesday: Good ol' Auth

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
+ Changes on the webpage that don't need to be saved to the database
+ Rendering speed advantage

---

## Flux

+ Frontend application architecture
+ Unidirectional data flow
+ Store manages the global state of an application, and can only be changed via dispatched `actions`

Note that Flux is _not_ specific to React

---

## Flux Pattern

![flux](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w10d4-redux/assets/flux_diagram.png?token=GHSAT0AAAAAABQMGM3ABI54KCCZNSBPCJROYRLQXYA)

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

![redux-diagram](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w10d4-redux/assets/redux_diagram.gif?token=GHSAT0AAAAAABQMGM3B5IMT7JPNEUO57T74YRLQYEQ)

---

### Sample State Shape
```js
{
    teas: {
      1: {
        id: 1,
        name: "Green",
        amount: 2.75
      },
      2: {
        id: 2,
        name: "Earl Gray",
        amount: 2.25
      },
      3: {
        id: 3,
        name: "Chai",
        amount: 3.00
      },
    },
    users: {
      1: {
        id: 1,
        username: "Captain Nemo",
        imgUrl: "https://supercoolcat.com"
      },
      2: {
        id: 2,
        username: "Lady Lola",
        imgUrl: "https://supercooldog.com"
      }
    },
    cookies: {
      1: {
        id: 1,
        flavor: 'Chocolate Chip'
        amount: 1.25
      },
      2: {
        id: 2,
        flavor: 'Oatmeal Raisin'
        amount: 2.25
      },
      3: {
        id: 3,
        flavor: 'Peanut Butter Lovers Delight'
        amount: 5.25
      }
    }
  }
```

---

## File Structure

+ Nest entire React app under `frontend` folder
  + Setup entry file inside
  + Same structure that we learned on Friday with a few new folders
  	+ `components`
  	+ `actions`
    + `reducers`
    + `store`

---

## Code Demo: Store, Actions, & Reducers

---

## Store

+ Object managing the state of the application
+ With Redux, we only have one store (other Flux implementations have multiple)
+ Use `createStore(RootReducer, [preloadedState], [enhancer])` to build store object.
  + (Don't worry about enhancers for now! We'll get into those later in the week.)

---

### Store API

+ `getState()` - see the current state of your application
+ `dispatch(action)` - dispatch an action to update state

There's more in there, but we don't need anything else for now.

---

## Action Creators Recap

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

[The Case for Flux](https://medium.com/swlh/the-case-for-flux-379b7d1982c6) - Dan Abramov

---

## Trade-offs for Redux

+ Pros
  + Makes it easy to reason about complex data and UI changes
  + Complements React well
+ Cons
  + Boilerplate code

Note:

+ By only updating slices of state that changed, only React components subscribed to those slices of state will update, so Redux works really well with React to take advantage of its powerful diffing algorithm.
+ Lots of boilerplate compared to just using React components.
+ React can certainly operate without a Flux implementation using local component state.

---

## Questions about Redux?

---

## Thanks!

Note:

+ We were already, in a way, building MVC with JQuery (AJAX Twitter)
+ Hard to determine what the flow of info really is
+ Redux is the 'feeder' of information
  + Each time we update the state it determines what the component renders
