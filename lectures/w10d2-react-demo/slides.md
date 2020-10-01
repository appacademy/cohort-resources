## W10D2
# Intro to React
​
---
​
## What you have learned
​
+ SQL / ORM / Active Record
+ Rails
+ Javascript / Jquery
+ AJAX / XMLHttpRequest
​
​
​
---
​
![youre-a-wizard](https://media.giphy.com/media/4EALRFjyD5odO/giphy.gif)
​
​
​
---
​
## Learning Goals
​
+ Setting up a new React project
+ Build simple React components
+ Become familiar with React lifecyle methods
​
​
​
---
​
## Agenda
​
+ React Overview
+ Setting-Up-Your-Project Demo
+ React Material
+ Code Demo
​
​
​
​
---
​
## React
​
+ Frontend library for building/managing UI
+ The _V_ in _MVC_
+ Breaks view up into modular components
+ As the user interfaces with the app, components _react_ and update if they need to
​
​
​
---
​
![single-respond-rule](https://user-images.githubusercontent.com/51456702/94300609-1aaf0180-ff1e-11ea-9f69-7a0e33a52970.png)
​
​
​
---
​
## Why React?
​
* Abstracts away low-level DOM manipulation allowing developer to focus on how app should look and behave
* Virtual DOM
* JSX - easily incorporate JS into HTML (similar to `html.erb`)
​
​
​
​
​
---
​
![react-dom-updates](https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif)
​
​
​
---
​
## NPM
​
+ Node Package Manager (NPM) is a package manager for JavaScript
+ JS's `package.json` is similar to Ruby's `Gemfile`
​
​
​
---
​
## NPM Demo
​
---
​
## React Components (what)
​
+ The basic building block of a React app
+ Encapsulated pieces of UI containing both the HTML and the means to manipulate it
+ A React app is a hierarchy, or tree, of React components
​
---
​
## React Components (how)
​
+ Created via either **classes** or **functions**
+ Class components must have a `render` function
  + In functional components, the function _is_ the `render` function
+ The `render` function is a product of **state** & **props**
​
---
​
## State & Props
​
+ **State** refers to information that the component itself manages
+ **Props** refer to information that the component receives from a parent component
​
---
​
### React components will re-render when their state or props change
​
​
---
​
## Class Component
​
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
​
```
​
​
---
​
## Functional Component
​
```js
const MyComponent = props => {
	return (
    <div className="quotes">
      <h1 id="title">I love JavaScript</h1>
    </div>
  );
};
```
​
​
---
​
## When to use Class Components
​
* The component needs to maintain its own state
* The component uses React **lifecycle methods** (more on these later)
* The component renders HTML elements that require event handlers
  * In some cases these event handlers may be received via props and a class is not needed
​
---
​
### If all your class component has is a render function, it should be a functional component
​
​
---
​
## Using a React Component
​
* Component name must be capitalized and is rendered as follows
​
```js
// right
<MyComponent />
​
// wrong
<myComponent />
```
​
Note:
​
+ We don't use `new`
+ Must be capitalized to designate that it's a react component, not just an element
​
---
​
## `render`
​
* React calls `render` for us
* Typically will return **React Elements** written using JSX
  * `<div>...</div>` or `<MyComponent />`
  * Can only return one _root_ react element
* Can also return `null` if component is in state where it should not display
* Can also return booleans, arrays, strings, and numbers, but less common
​
​
​
---
​
## Valid Render
​
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
​
---
​
## Invalid Render
​
```js
function BadComponent = (props) => {
  return (
    <h1>Hey</h1>
    <p>You can't do this :(</p>
  )
}
```
​
---
​
## Initializing State
​
* State is initialized inside the constructor function as follows:
​
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
​
* This is the _only_ time you say `this.state = ...`
​
---
​
## Updating State
​
* ALWAYS update state using `this.setState`
+ Updating state is _asynchronous_
+ `this.setState` has two parameters
  + An object that will be merged into the old state
  + (Optional) A callback to execute after the new state is set
​
```js
// this.state = { text: 'hello', cat: 'meow' }
​
this.setState({
  text: 'bye'
}, () => console.log(this.state))
​
// output: { text: 'bye', cat: 'meow' }
```
​
Note:
* Notice how we only specify the `text` property - this leaves the `cat` property unaffected. This is what we mean by merging into old state
* Stress that it is async so if you want to do something _after_ state has been updated it must be in the callback to `setState`
​
---
​
## Props
​
+ Passed to the component when it is instantiated
+ Referenced by `this.props` or `props` (class vs functional)
+ **Do not** tie parts of props to a component's state
+ Component should never directly modify its props
​
```js
<MyComponent name="Ronil" />
​
// Somewhere in MyComponent (if class)
this.props.name; // => "Ronil"
// if functional component, likely
props.name; // => "Ronil"
```
​
Note:
​
+ Don't store props in state because props will already trigger lifecycle methods.
​
​
The inputs into the React pure function are `props` and `state`. Any changes to how the component looks should be performed by changes to `state` or `props`.
​
---
​
## Job Listing Widget
​
---
​
Overview/Entry
​
![Overview and Entry](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/0_blank_template.png?token=AMISVPUA3C254HA4TIYCDDC7PKR42)
​
---
​
Widget
​
![Widget](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/1_widget.png?token=AMISVPQVXTF45TTO4URXKRK7PKR6A)
​
---
​
Job Index/List Component
​
![Index](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/2_jobindex.png?token=AMISVPRQF6YT4R7UXHIKT5C7PKSC6)
​
---
​
Job IndexItems/ListItems Component
​
![Items](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/3_jobindexitem.png?token=AMISVPTECXW5BBUPE374ND27PKSDW)
​
Note:
Each box will be a separate component we will eventually define.
​
---
​
# Code Demo
​
---
​
## Lifecycle Methods
​
![lifecycle](https://user-images.githubusercontent.com/51456702/94391652-e9475900-010a-11eb-9e72-4cb5cd662ce8.png)
​
Note:
Built in functions that React will call under the hood for a react component. You have access to all stages of the mounting/updating process.
​
In an ideal world, we wouldn’t use lifecycle methods. All our rendering issues would be controlled via state and props.
​
Use these methods sparingly when you need more control over how your component updates.
​
---
​
## Mounting
​
+ **constructor()**
+ **render()**
+ **componentDidMount()**
​
Note:
​
+ `constructor()`
+ `render()`
+ `componentDidMount()`
  + Here is where we will call our AJAX requests!
​
You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.
​
---
​
## Updating
​
+ **render()**
+ **componentDidUpdate(prevProps, prevState)**
​
​
​
---
​
## Unmounting
​
+ **componentWillUnmount()**
  + Remove event listeners, setInterval, etc
​
Note:
+ These methods are called in this order and we can overwrite them to have certain actions taken when things happen.
​
---
​
## [Kahoot!](https://play.kahoot.it/v2/?quizId=ec7dc678-656a-4dd2-98c4-f4f8aa54ff73)
​
---
​
## Let's React!
​
