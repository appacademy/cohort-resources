# W10D5 - React-Redux

---

## Learning Objectives (Learn how to do it.)

+ Understand how we connect React and Redux
+ Be able to implement react-redux containers

---

## Lecture Outline

+ React-Redux
+ Components + Containers Demo
+ Kahoot! and the future

---

## React-Redux

+ Library or package for connecting reacting and redux
+ Accomplishes this in 2 ways:
  + Allows the threading of Redux state as props to components
  + Allows threading of functions that can update Redux state to components

---

![redux_with_components](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w10d5-react-redux/assets/redux_with_components.png?token=AK6ID6NVADXVSZHIEQ6OELDAMJ3WM)

---

## Getting the State to Components

+ `Provider`
  + takes in store as a prop
  + provides the store to the component hierarchy
+ `connect`
  + connects given component to a specific part of store (specific slices of state/actions to dispatch)

---

## Components

+ Presentational
  + Solely concerned with rendering jsx as product of props/state
  + May or may not have a corresponding container

+ Container
  + Subscribes the component to the redux store via `connect`
  + Provides relevant slices of state to component via`mapStateToProps`
  + Provides functions that `dispatch` actions from presentational component via `mapDispatchToProps`

---

## Walk through the Redux cycle

![redux-with-react](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w10d5-react-redux/assets/redux-cycle-only.png?token=AK6ID6IBX25MAF2QI33VIELAMJ3ZG)

---

## Code Demo: Components and React-Redux

---

## Recap the Redux cycle!
![redux-with-react](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w10d5-react-redux/assets/redux-cycle-only.png?token=AK6ID6IBX25MAF2QI33VIELAMJ3ZG)

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=c7f26447-0632-4822-84a2-22282e22b67a)

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

---

## Thanks!
