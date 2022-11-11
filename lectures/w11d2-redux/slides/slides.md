# W11D2 - Redux

---

## Learning Roadmap (The slow build...)

+ Today: Intro to the Redux Pattern/Cycle
+ Tomorrow: Connecting React and Redux
+ Thursday: Adding a backend + Middleware
+ Friday: Formatting backend response + putting it all together
+ Tuesday: Frontend Routing
+ Wednesday: Good ol' Auth

---

## Learning Objectives (Learn how to do it.)

+ Understand what the state of an application is
+ Understand how to use Redux (the most popular implementation of Flux)
+ Get familiar with the Redux pattern
  + Parts: Store, Reducers, Actions

Note:

+ I'm sure you remember learning MVC for the first time. There were a lot of moving parts and this will be similar. Truth be told MVC will probably seem like childs play in comparison
+ To combat this, we will be more flipping from the slides to the demo regularly in an effort to better break the Redux cycle into pieces
+ Our goal is to catch on to the patterns and the goal of each piece

---

## Lecture Outline

+ Redux Principles
+ File Structure
+ Store, Actions, & Reducers Demo

---

## React Review!

---

## Application State

+ All the information that is displayed and/or available to display on the frontend of an application
+ When a change is made to an application resource (i.e. CREATE, UPDATE, or DESTROY) the change is persisted to the database on the back-end and updated in state on the front-end.

Note:
* 1st point: Contrast application state with a database. Database holds ALL of our application's data - state is just meant to hold all information we need on the frontend to properly render the page. EXAMPLE: Facebook
* 2nd Point: When using MVC, we handled our HTTP requests by rendering HTML views. Each button click rendered a new page back to our user.
* Rails will now act as a back-end API similar to what you first implemented when introduced to Rails. This backend will then respond to our HTTP requests with data in the form of JSON to our React frontend, which will then use Redux to update our application state

---

## Why use Application State?

+ Minimize api calls to our backend
+ Changes on the webpage that don't need to be saved to the database
+ Rendering speed advantage

Note: 
* We use it when it makes sense to (An app needs to have enough data and functionality to warrant the use of front end application state)

---

## Flux

+ Frontend application architecture
+ Unidirectional data flow
+ Store manages the global state of an application, and can only be changed via dispatched `actions`

Note that Flux is _not_ specific to React

Note:

+ React was built to work with a Flux implementation and already implements a lot of its principles all by itself
+ React allows components to take in a completely new state and render that new state.
+ Flux does not need models since the app state is kept in one big, organized object (the store).
+ It adds data management to our app with its goal of making data _changes_ easy and predictable.

---

## Flux Pattern

![flux](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/flux_diagram.png)

---

## Redux

+ Most popular implementation of the Flux architecture
+ Application state represented as one giant POJO
+ Powerful because of its restrictions
+ Developed by Dan Abramov in 2015 (shortly after moved to the React team)

Note:

+ Far and away the most popular implementation of Flux.

---

## Redux Principles

+ Single Source of Truth
+ State is read-only
+ Changes are made with pure functions (reducers)

Note:

+ state of entire application stored in single POJO
+ The only way to change the state is to dispatch an *action*
+ Actions determine how the state should be changed
+ Updated state is sent to subscribed components
+ In computer programming, a pure function is a function that has the following properties:[1][2]
  + Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
  + Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).

---

![redux-diagram](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/redux_diagram.gif)

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

## Code Demo: Store, Actions, & Reducers

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

Note:

+ Reducers are a part of the store and help it update state
+ Store owns the reducers, when it gets the action it's going to pass it through the reducers. Whatever gets returned by the reducers becomes the next state
+ Stress that we don't _have_ to use a RootReducer, but typically we never have just one slice of state so we usually use one

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

Note: https://medium.com/swlh/the-case-for-flux-379b7d1982c6

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

Questions about Redux?

---

## Thanks

Note:

+ We were already, in a way, building MVC with JQuery (AJAX Twitter)
+ Hard to determine what the flow of info really is
+ Redux is the 'feeder' of information
  + Each time we update the state it determines what the component renders
