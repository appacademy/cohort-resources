### W11D1
## React Hooks

---

## Lecture Objectives 
* Be able to use the `useState` hook to manage a components state.
* Be able to use the `useEffect` hook to trigger side effects when a component is updated.
* Be able to use the `useRef` hook to store a mutable value that does not cause a re-render when updated (`useRef` can also be used to access a DOM element directly). 
* Initialize and update state within a functional component.

---

## What are React Hooks?
* A Hook is a special function that lets you “hook into” React features. 
* Hooks let developers use state and other React features directly in a functional component, WITHOUT writing a class. 
* In a sense, a hook "listens" for changes in order to trigger a response.

---

## useState Hook
* `useState()` declares a "state variable" that will be preserved between renders
* `useState()` can take an "initial state" as an argument
  - *initial state can be a string, object, array, number, etc.*
* `useState()` returns two things
  1. The current state of the declared variable
  2. A function that updates the declared variable

---

!["react useState diagram"](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-hooks/use_state_diagram.png)

---

## useState Demo

---

## Break

---

## useEffect Hook
* `useEffect` invokes side effects in functional components
  - Anything that affects something outside the scope of the current function being executed
    - Changes in a component's state or props
    - Re-renders of a component
    - Mounting and unmounting of a component from the DOM
* `useEffect` handles asynchronous operations in functional components 
  - By convention we write async code in `useEffect` though technically we can write asynchronous code outside of this hook as well. 

---

!["react useEffect diagram"](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-hooks/use_effect_diagram.png)

---

## When to Use `useEffect` 
1. Data Fetching
   - either from our backend or 3rd party API
2. Handling Subscriptions
   - websockets
3. Timers
   - `setInterval`, `setTimeout` etc. 
4. Directly changing the DOM 
   - `document.getElementById()` etc.
5. Updating that is based on state or props
   - mimicking `componenDidUpDate`

---

## useEffect Demo

---

## Questions

---

## Thank you!
