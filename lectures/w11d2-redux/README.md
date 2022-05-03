To prepare for this lecture you should be familiar with redux without react. It's a pretty basic lecture but we need to ensure that students understand that redux can work without react. 

The lecturer should run through the demo and make sure they know when to jump between the demo and slides to reinforce the information being presented. 

# Lecture Walkthrough

---

# W10D4 - Redux

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

Note:

+ I'm sure you remember learning MVC for the first time. There were a lot of moving parts and this will be similar. Truth be told MVC will probably seem like childs play in comparison
+ To combat this, we will be more flipping from the slides to the demo regularly in an effort to better break the Redux cycle into pieces
+ Our goal is to catch on to the patterns and the goal of each piece

Explain to students that while we will be using redux with react, redux is a separate library and that they should be able to know where one ends and the other begins in their code.

---

## Lecture Outline

+ Redux Principles
+ File Structure
+ Store, Actions, & Reducers Demo

---

## React Review - Widgets!

Go over React State vs. Props: (Get students to participate)
+ Props: What the component will receive from parent components.
+ State: The internal state of the component. What it is keeping track of for itself.
+ Props: Comes from the outside. State: Only what's inside
+ We can use callbacks to pass state information around, but it's not always a great solution, and redux will allow us to do this way better.
+ Functional Components vs. Class Components

*** Pull open the widgets project solution ***

Point out and go over:
+ Save interval in clock component so can clear in componentWillUnmount
+ Threaded props from tabs
+ Functional component - Root vs. Class component - Clock
  + Functional Component: Acts like a pure function. It receives input as props, and renders itself with those props. It does not keep state, does not have methods, and it does not have access to component lifecycle methods (componenetDidMount, componentWillUnmount, etc.)!
  + Class Components: A component that does keep state, and has access to it's own methods and the component lifecycle methods. It renders just like a functional component, but holds on to a lot more information about itself.
  + Functional components are preferred where they are possible because they are lighter weight and more predictable.

---

## Application State

* 1st point: Contrast application state with a database. Database holds ALL of our application's data - state is just meant to hold all information we need on the frontend to properly render the page. EXAMPLE: Facebook
* 2nd Point: When using MVC, we handled our HTTP requests by rendering HTML views. Each button click rendered a new page back to our user.
* Rails will now act as a back-end API similar to what you first implemented when introduced to Rails. This backend will then respond to our HTTP requests with data in the form of JSON to our React frontend, which will then use Redux to update our application state

---

## Why use Application State?

* We use it when it makes sense to (An app needs to have enough data and functionality to warrant the use of front end application state)

---

## Flux

+ Explain that the Flux framework organizes the flow of information to make it easier to track changes on our app. (This is difficult to show without an example) 
+ React was built to work with a Flux implementation and already implements a lot of its principles all by itself
+ React allows components to take in a completely new state and render that new state.
+ Flux does not need models since the app state is kept in one big, organized object (the store).
+ It adds data management to our app with its goal of making data _changes_ easy and predictable.

---

## Flux Pattern

![flux](https://s3.amazonaws.com/lecture-assets/redux-flux.png)

---

## Redux

+ Far and away the most popular implementation of Flux.
+ Emphasize that state is just a POJO!

---

## Redux Principles

+ state of entire application stored in single POJO
+ The only way to change the state is to dispatch an *action*
+ Actions determine how the state should be changed
+ Updated state is sent to subscribed components
+ In computer programming, a pure function is a function that has the following properties:[1][2]
  + Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
  + Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).

---

![redux-diagram](./assets/redux_diagram.gif)

+ Walk through this diagram.
+ Tell them not to worry about APIs and Middleware for now.
+ The store handles the state and updates it through the reducers. Each reducer is a pure function that manage a "slice" of state. Explain the concept of a slice!
+ The view is also not covered in this lecture. It could be plain html with javascript or react.

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
+ Point out that the different "enitities"
+ This helps illustrate the use case for combineReducer

---

## File Structure


+ Walk through what each folder is for. 


---

**Switch to demo**
## Code Demo: Store, Actions, & Reducers (see demo guide!)
Hop back to slides when you reach the appropriate parts!

---

## Store

+ Object managing the state of the application
+ With Redux, we only have one store (other Flux implementations have multiple)
+ Use `createStore(RootReducer, [preloadedState], [enhancer])` to build store object.
  + (Don't worry about enhancers for now! We'll get into this next week.)

---

### Store API

+ Let students know that these are the primary parts of the redux store that they will be using.

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

+ Reducers are a part of the store and help it update state
+ Point out how they are linked together in the store.js file. (We configure our store to know what our root reducer is)
+ It forms a tree-like structure of reducers that defines the "shape" of your front end data.
+ Store owns the reducers, when it gets the action it's going to pass it through the reducers. Whatever gets returned by the reducers becomes the next state
+ Stress that we don't _have_ to use a RootReducer, but typically we never have just one slice of state so we usually use one

---

*** demo should be done by this point ***

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

+ By only updating slices of state that changed, only React components subscribed to those slices of state will update, so Redux works really well with React to take advantage of its powerful diffing algorithm. This is a preview to what they will be doing tomorrow. 
+ We'll connect the data in our redux store very deliberately to make sure out app runs fast and clean. (Seperation of concerns. Each part of our front end only knows about what it needs to)
+ Con: Lots of boilerplate compared to just using React components.
+ React can certainly operate without a Flux implementation using local component state.

---

Questions about Redux?

+ Recap and make sure students understand the how information flows in the redux pattern.
+ Make sure they understand that the actions we invoked in the console will isntead be invoked by events triggered in our react components going forward.
+ Redux is the 'feeder' of information
  + Each time we update the state it determines what the component renders

---

## Thanks!
