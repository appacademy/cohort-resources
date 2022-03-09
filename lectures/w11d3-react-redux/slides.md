# W11D3 - React-Redux

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

![redux_with_components](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w10d5-react-redux/assets/redux_with_components.png?token=GHSAT0AAAAAABQMGM3BF7VP2OZBGA7MSVZ6YRPXFHQ)

---

## Getting the State to Components

+ `Provider`
  + takes in store as a prop
  + provides the store to the component hierarchy
+ `connect`
  + connect given component to a specific part of store (specific slices of state/actions to dispatch)

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
![redux-with-react](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w10d5-react-redux/assets/redux-cycle-only.png?token=GHSAT0AAAAAABQMGM3BJEAD5NHNWW7IG7DUYRPXG7A)

---

## Code Demo: Components and React-Redux

---

## Recap the Redux cycle!
![redux-with-react](https://raw.githubusercontent.com/appacademy/worldwide-lecture-notes/master/react/w10d5-react-redux/assets/redux-cycle-only.png?token=GHSAT0AAAAAABQMGM3BJEAD5NHNWW7IG7DUYRPXG7A)

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=c7f26447-0632-4822-84a2-22282e22b67a)

---

### Future State Shape
```js
{
  entities: {
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
      }
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
