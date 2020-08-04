## W10D2
# Intro to React

---

## What you have learned

+ SQL / ORM / Active Record
+ Rails
+ Javascript / Jquery
+ AJAX 

---

![youre-a-wizard](https://media.giphy.com/media/4EALRFjyD5odO/giphy.gif)

---

## Learning Goals

+ Setting up a new React project
+ Build simple React components
+ Difference between state and props

---

## Agenda

+ React Overview
+ Setting-Up-Your-Project Demo
+ React Material
+ Code Demo

---

## Single Page App

+ Only one backend route that returns HTML
+ Javascript used to dynamically update the DOM

---

## React

+ Frontend library for building/managing UI
+ The _V_ in _MVC_
+ As the user interfaces with the app, components _react_ and update if they need to
+ Breaks view up into modular components

---

![single-respond-rule](https://github.com/appacademy/sf-lecture-notes/raw/master/react/w10d2-react/assets/react_single_respond_rule.png)

---

## Why React?

+ Abstracts away low-level DOM manipulation allowing developer to focus on how app should look and behave
+ JSX - easily incorporate JS into HTML (similar to `html.erb`)
+ Virtual DOM

---

![react-dom-updates](https://github.com/appacademy/sf-lecture-notes/raw/master/react/w10d2-react/assets/granular-dom-updates.gif)

---

## JSX

+ Syntax extension to JavaScript
+ Produces React elements which can be DOM elements or components
+ Use camelCase naming convention
+ May use self closing tags if tag is empty
+ Use {} to embed and interpolate JS expressions
  ```js
  const name = 'Josh Perez';
  const element = <h1>Hello, {name}</h1>;
  ```
+ Can be used inside of `if` statements and `for` loops
+ Use curly braces to embed a JavaScript expression in an attribute
  ```js
  const element = <img src={user.avatarUrl}></img>;
  ```

---

## NPM

+ Node Package Manager (NPM) is a package manager and software registry
+ JS's `package.json` is similar to Ruby's `Gemfile`
+ Use to download various dependencies

---

## Setting-up-your-project Demo

---

## 10 min Break

---

## React Components (what)

+ The basic building block of a React app
+ Encapsulates pieces of UI containing both the HTML and the means to manipulate it
+ A React app is a hierarchy, or tree, of React components

---

## React Components (how)

+ Accepts a single "props" object and returns a React element
+ Created via either **classes** or **functions**
+ Class components must have a `render` function
  + The `render` function is a product of **state** & **props**
+ In functional components, the function _is_ the `render` function

---

## State & Props

+ **State** refers to information that the component itself manages
+ **Props** refer to information that the component receives from a parent component or passes down to a child component

---

## React Component Philosophy

+ Single Responsibility Principle
+ Pure Functions (with respect to props)

---

### React components will re-render when their state or props change

---

## Class Component

```js
class MyComponent extends React.Component {
  render() {
    return (
      <div className ='quotes'>
        <h1 id="title">I love JavaScript</h1>
      </div>
    );
  }
}
```

---

## Functional Component

```js
const MyComponent = props => {
	return (
    <div className="quotes">
      <h1 id="title">I love JavaScript</h1>
    </div>
  );
};
```

---

## When to use Class Components

+ The component needs to maintain its own state
+ The component uses React **lifecycle methods** (more on these later)
+ The component renders HTML elements that require event handlers
  * In some cases these event handlers may be received via props and a class is not needed

---

### When to use Functional Components

+ If you don't need to track local state
+ If all your class component has is a render function, it should be a functional component

---

## Using a React Component

+ Component name must be capitalized and is rendered as follows

```js
// right
<MyComponent />

// wrong
<myComponent />
```

---

## `render`

+ React calls `render` for us
+ Typically will return **React Elements** written using JSX
  * `<div>...</div>` or `<MyComponent />`
  * Can only return one _root_ react element
+ Can also return `null` if component is in state where it should not display
+ Can also return booleans, arrays, strings, and numbers, but less common

---

## Valid Render

```js
function GoodComponent = (props) => {
  return (
    <div>
      <h1>Hello There!</h1>
      <p>This is some good JSX</p>
    </div>
  )
}
```

---

## Invalid Render

```js
function BadComponent = (props) => {
  return (
    <h1>Hey</h1>
    <p>You can't do this :(</p>
  )
}
```

---

## Initializing State

+ State is initialized inside the constructor function of a class component as follows:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ...properties you want in state
    };
  }
  // ...
}
```
+ This is the _only_ time you say `this.state = ...`
+ State is an object with key value pairs

---

## Updating State

+ ALWAYS update state using `this.setState`
+ Updating state is _asynchronous_
+ `this.setState` has two parameters
  * An object that will be merged into the old state
  * (Optional) A callback to execute after the new state is set

```js
// this.state = { text: 'hello', cat: 'meow' }

this.setState({
  text: 'bye'
}, () => console.log(this.state))

// output: { text: 'bye', cat: 'meow' }
```

---

## Props

+ Passed to the component when it is instantiated
+ Referenced by `this.props` or `props` (class vs functional)
+ **Do not** tie parts of props to a component's state
+ Component should never directly modify its props

```js
<MyComponent name="Ronil" hobby="reacting" />

// Somewhere in MyComponent (if class)
this.props.name; // => "Ronil"
// if functional component, likely
props.name; // => "Ronil"
```

---

![single-respond-rule](https://github.com/appacademy/sf-lecture-notes/raw/master/react/w10d2-react/assets/react_single_respond_rule.png)

---

## Handling Events

+ React events named using camelCase
+ Provide event listener when element is rendered
  * No need to call addEventListener
+ Pass a function as event handler

```js
<button onClick={this.handleClick}>
  Click
</button>
```

---

## 5 min Break

---

## Job Listing Widget Demo

---

## Overview/Entry

![Overview and Entry](https://github.com/appacademy/sf-lecture-notes/raw/master/react/w10d2-react/assets/0_blank_template.png)

---

## Widget

![Widget](https://github.com/appacademy/sf-lecture-notes/raw/master/react/w10d2-react/assets/1_widget.png)

---

## Job Index/List Component

![Index](https://github.com/appacademy/sf-lecture-notes/raw/master/react/w10d2-react/assets/2_jobindex.png)

---

## Job IndexItems/ListItems Component

![Items](https://github.com/appacademy/sf-lecture-notes/raw/master/react/w10d2-react/assets/3_jobindexitem.png)

---

## Code Demo

---

## Lifecycle Methods

![pic](https://github.com/appacademy/sf-lecture-notes/raw/master/react/w10d2-react/assets/lifecycle.png)

---

## Mounting

+ **constructor()**
+ **render()**
+ **componentDidMount()**
  * good place to call AJAX requests, set subscriptions like setInterval

---

## Updating

+ shouldComponentUpdate()
+ **render()**
+ componentDidUpdate(prevProps, prevState)

---

## Unmounting

+ **componentWillUnmount()**
  * Remove event listeners, clearInterval, etc

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=ec7dc678-656a-4dd2-98c4-f4f8aa54ff73)

---

## Let's React!
