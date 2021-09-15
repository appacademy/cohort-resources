React-Redux

---

## Learning Objectives (Learn how to do it.)

+ Understand how we connect React and Redux
+ Be able to implement react-redux containers

---

## Lecture Outline

+ React-Redux
+ Components + Containers Demo
+ React forms
+ Kahoot! and the future

---

## React-Redux

+ Library or package for connecting reacting and redux
+ Accomplishes this in 2 ways:
  + Allows the threading of Redux state as props to components
  + Allows threading of functions that can update Redux state to components

---

![redux_with_components](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/redux-revamp/react/w10d5-react-redux/assets/redux_with_components.png?token=AG2UGP3GHVAEUEWCQZFF2JDADDUJS)

+ each circle is like an individual component.
+ the lines connect a component to it's children (Root -> App -> TeaIndex.... etc)
+ the arrows represent the flow of information/data (through prop threading on the left)
+ instead of threading props everywhere we can use the single source of truth that is the redux store
+  much more organized and straightforward it is to make a change.

---

## Getting the State to Components

+ `Provider`
  + takes in store as a prop
  + provides the store to the component hierarchy
+ `connect`
  + connect given component to a specific part of store (specific slices of state/actions to dispatch)

---

## Components/ Containers

+ connect connects react and redux!
  + it takes msp and mdp and returns a function that needs a component as an argument. When it is invoked it will feed the specified props to that component.
+ the purpose of msp and mdp (what they are for)
  

---

## The Redux cycle

+ containers subscribe to changes on certain slices of state
  + this is dictated by what we put in mapStateToProps
  + react's diffing algorithm recognizes when it is given new props and re-renders accordingly
    + note that react is what is responsible for re-renders!
+ an action hits all the reducers 

---
Redux Cycle Again
---
5 minute break
---

## Code Demo: Components and React-Redux



---
5 minute Break
---

## Recap the Redux cycle!

+ we use mapDispatchToProps to ensure that an event action hits the store.


---
React Forms demo
---
### 5 minute break

---
### Selectors Demo
---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=c7f26447-0632-4822-84a2-22282e22b67a)

+ this Kahoot covers yesterday's material as well!

---

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

Note:
Discuss at a high level this future state shape that they are going to have their apps at by the end of the week, and the sort of state shape that they will want for their full stack project. Discuss how the previous state shape we looked at is now just the `entities` slice of state which concerns the data associated with the core resources of our app. However we have other top-level slices to manage other aspects of our app - `session`, `errors`, and `ui`. Talk at a high level about what these slices of state will do but try not go into too low-level of detail with questions. Point is to give them a picture of where they are going and what the bigger picture looks like.

---

## Thanks!