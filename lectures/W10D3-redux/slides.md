# W10D3 - Redux
​
---
​
![dog-finds-fish](https://media0.giphy.com/media/QLUE7bBjOJxe0/giphy.gif)
​
---
​
## You & Redux <3
​
![shaq-cat](https://media0.giphy.com/media/uTvy5kvquPu36/giphy.gif)
​
---
​
## Learning Roadmap (The slow build...)
​
+ Today: Intro to the Redux Pattern/Cycle
+ Monday: Adding a backend + Middleware
+ Tuesday: Formatting backend response + putting it all together
+ Wednesday: Frontend Routing
+ Thursday: Good ol' Auth
​
---
​
## Learning Objectives (Learn how to do it.)
​
+ Understand what the state of an application is
+ Understand how to use Redux 
+ Understand how to integrate Redux into a React App
​
---
​
## Lecture Outline
​
+ Redux Principles
+ File Structure
+ Store, Actions, & Reducers Demo
+ Components + Containers Demo
+ Kahoot! and the future
​
---
​
## Application State
​
+ All the information that is displayed and/or available to display on the frontend of an application
+ When a change is made to an application resource (i.e. CREATE, UPDATE, or DESTROY) the change is persisted to the database on the back-end and updated in state on the front-end.
​
---
​
## Flux
​
+ Frontend application architecture
+ Unidirectional data flow
+ Store manages the global state of an application, and can only be changed via dispatched actions
​
Note that Flux is _not_ specific to React
​
---
​
## Flux Pattern
​
![flux](https://s3.amazonaws.com/lecture-assets/redux-flux.png)
​
---
​
## Redux
​
+ Particular implementation of the Flux architecture
+ Application state represented as one giant POJO
+ Powerful because of its restrictions
+ Developed by Dan Abramov in 2015 
​
Note:
​
+ Far and away the most popular implementation of Flux.
+ represented by pojo
+ set api and rules on how changes are updated to application state
​
---
​
## Redux Principles
​
+ Single Source of Truth
+ State is read-only
+ Changes are made with pure functions
​
---
​
![redux-diagram](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-only.png?token=AK6ID6IM43PKYK46VBLHHKK7Y32B2)
​
---
​
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
​
---
​
## File Structure
​
+ Nest entire React app under `frontend` folder
  + Setup entry file inside
  + Same structure that we learned on Tuesday with a few new folders
  	+ `components`
  	+ `actions`
    + `reducers`
    + `store`
​
---
​
## Code Demo: Store, Actions, & Reducers
​
---
​
## Store
​
+ Object managing the state of the application
+ With Redux, we only have one store (other Flux implementations have multiple)
+ Use `createStore(RootReducer, [preloadedState], [enhancer])` to build store object.
​
---
​
### Store API
​
+ `getState()` - see the current state of your application
+ `dispatch(action)` - dispatch an action to update state
+ `subscribe(callback)` - trigger a callback to be run after an action has been dispatched
  + `Provider` and `connect` from `react-redux` library handle invoking this method with appropriate callbacks to update React components.
​
---
​
## Action Creators Recap
​
+ Functions that return an action
  + an action is an object with a `type` property
  + may also carry a payload
+ Use action creators to dynamically determine the payload
  + abstract this logic out of components
+ Use constants for all 'type' values
​
```js
export const RECEIVE_TEA = "RECEIVE_TEA";
​
export const receiveTea = (tea) => ({
  type: RECEIVE_TEA,
  tea
});
```
​
---
​
## Reducers
​
+ **Pure functions** that update state based on the `action`'s type
+ Returns either a new object with the updated state or the same state object
+ `RootReducer` combines multiple reducers into one using `combineReducers`
  + Each reducer receives every dispatched action but only deals with its own slice of state
​
---
​
## State Shape Recap
​
+ Entire *state tree* is a POJO
+ Each reducer corresponds to a key in the store's state
  + i.e. the structure of state tree is determined by reducers and their return values
​
```js
// reducers/root_reducer.js
combineReducers({
  teas: teasReducer,
  cookies: cookiesReducer
})
​
// sample store.getState()
{
  teas: {},
  cookies: {}
}
```
​
---
​
## Getting the State to Components
​
+ `Provider`
  + takes in store as a prop
  + provides the store to the component hierarchy
+ `connect`
  + connect given component to a specific part of store (specific slices of state/actions to dispatch)
  
---
​
## Components
​
+ Presentational
  + Solely concerned with rendering jsx as product of props/state
  + May or may not have a corresponding container
​
+ Container
  + Subscribes the component to the redux store via `connect`
  + Provides relevant slices of state to component via`mapStateToProps`
  + Provides functions that `dispatch` actions from presentational component via `mapDispatchToProps`
​
---
​
![redux-with-react](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d5-thunk/redux-cycle-only.png?token=AK6ID6IM43PKYK46VBLHHKK7Y32B2)
​
---
​
## Code Demo: Components
​
---
​
## When Is Redux a Good Idea?
​
+ Your data changes over time
+ You want to cache data in memory, but it can change while cached
+ Your data is relational and models include and depend on each other
+ The same data is assembled from different sources and can be rendered in several places throughout the UI.
​
---
​
## Trade-offs for Redux
​
+ Pros
  + Makes it easy to reason about complex data and UI changes
  + Complements React well
+ Cons
  + Boilerplate code
​
---
​
## [Kahoot!](https://play.kahoot.it/v2/?quizId=c7f26447-0632-4822-84a2-22282e22b67a)
​
---
​
### Future State Shape
```js
{
  entities: {
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
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    tradeForm: ["Not enough buying power"],
  },
  session: { currentUserId: 1 }
}
```
​
---
​
## Thanks!
