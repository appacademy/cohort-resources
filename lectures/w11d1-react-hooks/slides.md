## React Hooks

---

### What are React Hooks?
A Hook is a special function that lets you “hook into” React features. Hooks let developers use state and other React features directly in a function component, WITHOUT writing a class. In a sense, a hook "listens" for changes in order to trigger a response.

---

## Lecture Objectives 

* Be able to use the ``` useState``` hook to manage a components state
* Be able to use the ``` useEffect``` hook to trigger various operations as a result of side effects
* Be able to use the ``` useRef``` hook to store a mutable value that does not cause a re-render when updated. Also can be used to access a DOM element directly.
* Be able to use the ``` useCallback``` hook to avoid having child components render repeatedly without need. 
* Initialze and update state within a functional component 

---

## useState
* ```useState()``` declares a "state variable" that will be preserved between renders
* ```useState()``` can take an "initial state" as an argument
> *initial state can be a string, object, array, number, etc.*
* ``` useState() ``` returns two things
> 1. the current state
> 2. a function that updates the state

---

!["react diagram"](use_state_diagram.png)

---
### useState Demo
---

### 5 minute break

---

### useEffect Hook

---

### useEffect
* `useEffect` invokes side effect in functional components
>>> anything that affects something outside the scope of the current function being executed
* `useEffect` handles asychronus operations in functional components 
>>> By convention we write asych code in `useEffect` though technically we can write asychronous code outside of this hook. 

---

### When to Use `useEffect` 
1. Data Fetching
> either from our backend or 3rd party API
2. Handling Subscriptions
> websockets
3. Timers
> `setInterval`, `setTimeout` etc. 
4. Directly changing the DOM 
> `document.getElementById()` etc.
5. Updating that is based on state or props
> mimicking `componenDidUpDate `


---

# Great resource for gotchas: 
https://medium.com/fuzz/react-hooks-gotchas-b8fcd25cc1b6

---