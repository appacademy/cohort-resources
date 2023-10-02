## W12D1
# React Class Components

---

## Learning Objectives

+ Better understand the lifecycle of a React component
+ Compare a class component's lifecycle methods to the `useEffect` hook
+ Refactor a robust class component into an equivalent functional component

---

## Agenda

1. Background
1. Class Syntax
	+ Declaration
	+ Constructor
	+ Render
1. Props and State
1. Lifecycle Methods

---

## Background

+ React Hooks were introduced in version 16
	+ Released in late 2017
	+ Brought utility of functional components up to par with class components
+ Before React 16, only class components could:
	+ Manage local state
  + Define lifecycle methods/behaviors
  	+ Similar to how `useEffect` is used now
    
---

## Class Syntax

```js
import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
    	<h1>{this.props.title}</h1>
    );
  };
};
```

---

## Declaration

+ Uses ES6 class syntax
+ Inherits from `React.Component`
	+ Requires that we import `React`

```js
import React from 'react';

class ClassComponent extends React.Component {
  // ...
};
```

---

## Render

+ Required method in every class-based react component
+ Return value is generally JSX code
	+ Can only return a single React element
    + same as a functional component
+ Invoked whenever the component is rendered to the page
	+ Both on initial mount and every update

```js
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  };
```

---

## Constructor

+ Optional method in every class-based React component
	+ Defaults to the parent's `constructor` method if not defined
    + The parent in most cases will be React's Component class
+ Generally has just one parameter (`props`)
+ Must invoke `super(props)` in order to use `this` keyword within constructor
	+ React will remember to do this for us but only *after* our constructor runs

```js
  constructor(props) {
    super(props); // required when overwriting default constructor
    // sets up local state
    // bind event handler methods
    // other shenanigans
  };
```

---

## Props and State

+ Props
	+ Accessible in the constructor as a parameter
  + Accessible elsewhere as a class property
  	+ `this.props`
+ State
	+ A property with key-value pairs defined in the constructor
		+ `this.state = { key: value }`
	+ Updated with the `setState` method
		+ Defined in `React.Component`

---

## Props

```jsx
import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props); // Reference props as a parameter
    // React.Component sets this.props = props;
  };

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>Reference props as an object parameter</p>
      </>
    );
  };
};
```

---

## Setting State

```js
  constructor(props) {
    super(props); // must be called if creating a constructor method
    
    // Initialize the component state object
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: ''
    };
  };
```

---

## Updating State

```js
  handleClick(e) {
    // this.setState({ count: this.state.count + 1 });
    this.setState((state, props) => ({ count: state.count + 1 }));
    console.log(this.state.count);
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <div>{this.state.count}</div>
        <button onClick={handleClick.bind(this)}>
          Increment
        </button>
      </>
    );
  };
```

Note:
+ Because class components rely on `this` context, it is important to bind event handlers if not using fat-arrow syntax

---

### `setState`

+ Enqueues changes to component state
	+ Almost always results in component re-rendering
	+ Asynchronous!
+ First argument can be an updater function or an object
	+ Callback function takes in `state` and `props` and returns an object that is 
  then merged into the current state, overwriting shared keys
+ Second argument is a completion callback that will be invoked only after state 
is successfully updated

---

## Demo Part 1

---

## Break

---

## Lifecycle Methods

+ Lifecycle methods are invoked automatically in response to certain events
	+ Typically after the component is rendered, with a few exceptions

![lifecycle](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/lifecycle.png)

---

### `componentDidMount()`

+ Invoked immediately after a component is mounted to the DOM (i.e. inserted into the React component tree)
+ Should perform any initialization that requires access to the DOM
+ Good place to initiate `fetch` requests for external data or to set up subscriptions
  + Don't forget to unsubscribe later in the component's lifecycle
+ Equivalent to `useEffect` invoked with an empty dependency array

---

### Example

```js
  componentDidMount() {
    setTimeout(() => {
      this.setState({ count: 0 });
    }, 1000);
  };
```

```js
  useEffect(() => {
    setTimeout(() => {
      setCount(0);
    }, 1000);
  }, []);
```

---

### `componentDidUpdate(prevProps, prevState)`

+ Invoked immediately after updating (and re-rendering)
	+ Not called on the initial render
+ Gives access to the `props` value in the previous render via the `prevProps` parameter
+ Used to manipulate DOM elements or fire off `fetch` requests for external data
	+ *Consider navigating from one `PostShow` page to another - we want to `fetch` and display new data without unmounting/remounting the component*
+ Must wrap `setState` in a conditional to prevent an infinite loop of re-renders
+ Equivalent to `useEffect` invoked with a non-empty dependency array

---

### Example

```js
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('hello world!');
    };
  };
```

```js
  useEffect(() => {
    console.log('hello world!');
  }, [count]);
```

---

### `componentWillUnmount`

+ Invoked immediately before a component is unmounted and destroyed
+ Should perform any necessary cleanup
	+ e.g. invalidate timers, cancel network requests, clean up subscriptions
+ Should never use `setState` within `componentWillUnmount`
+ Equivalent to a `useEffect` that returns a function

---

### Example

```js
  componentWillUnmount() {
    console.log('cleanup')
  }
```

```js
  useEffect(() => {
    return () => console.log('cleanup');
  }, []);
```

---

## Demo Part 2

---

## Summary

+ Hooks provide an updated syntax for managing state and defining lifecycle methods in functional components
+ We generally initialize a class component's state in its constructor and update it using `setState`
+ Lifecycle methods give us the ability to conditionally execute code at certain points of a component's lifecycle and in response to certain changes in state or props, just like the `useEffect` hook does for functional components.

---

## Questions?

---

## Thanks!
