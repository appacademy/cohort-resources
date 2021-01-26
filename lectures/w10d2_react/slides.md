## W10D2
# React

---

## What you have learned

+ SQL / ORM / Active Record
+ Rails
+ Javascript / Jquery
+ AJAX 

Note:
- Now, before we get started, I want to take the time to acknowledge all the things you've learned thus far. Pretty awesome right?
- You already have all the tools to build a fullstack application from Database right through to views.
- You might even be feeling like a bit of a coding wizard...

---

![youre-a-wizard](https://media.giphy.com/media/4EALRFjyD5odO/giphy.gif)

Note:
Don't be fooled! Yes, you should feel super proud of what you have acheived so far. But the journey has only just begun.
If you lose focus, if you decide to take it easy, the next 2 weeks of the program will eat you alive.

---

## Learning Goals

+ Setting up a new React project
+ Build simple React components
+ Difference between state and props


Note: 
- Incorporate an API into your [app](https://appacademy.github.io/curriculum/widgets/)

---

## Agenda

+ React Overview
+ Setting-Up-Your-Project Demo
+ Intro React Material
+ Basic React Demo
+ More on React
+ Job Widgets Demo
+ Lifecycle Methods

Note:
- We have packed agenda today with a few demos that are fairly dense, so please use the raise hand button to ask questions.
- With that said, there is a lot to react, more than we can learn in one session, refer to the docs. React docs are really good!

---

## Single Page App

+ Only one backend route that returns HTML
+ Javascript used to dynamically update the DOM

Note:
- We talked a little about this last week. We're moving away from server side rendering to client side rendering with using JS to dynamically update the DOM.

---

## React

+ Frontend library for building/managing UI
+ The _V_ in _MVC_
+ As the user interfaces with the app, components _react_ and update if they need to
+ Breaks view up into modular components

Note:
- What is React? React is a frontend library created by Jordan Walke while working at Facebook in around 2013, that allows us to build UI components, and ultimately create single page applications which update - or REACT - to user's inputs.
- This leads to great improvements in application performance, and user experience.
- It's effectively the V in the frontend MVC.
- Allows us to break a view into modular components

---

![single-respond-rule](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/react_single_respond_rule.png?token=AMIDLIGGYUQDIKWZP4TWJDTACMMB6)

Note:
- This slide appears again later, but show it now to just give a basic idea. 
- This is an example of a view for a web page, broken into react components which are essentially the logical pieces of a web page
_ We're going to start thinking in terms of react components and how to appropriately structure our webpage accordingly

---

## Why React?

+ Abstracts away low-level DOM manipulation allowing developer to focus on how app should look and behave
+ JSX - easily incorporate JS into HTML (similar to `html.erb`)
+ Virtual DOM

Note:
- We could do all of this stuff using jQuery or Vanilla JS but it would become very cumbersome very quickly in a large app. React allows us to not worry about the low-level work of updating the DOM and instead allows us to write declarative components based on how we want them to look and feel and does the dirty work for us
- JSX makes writing the dynamic HTML much easier, allowing us to inject javascript in where we like
- The Virtual DOM is what makes React so powerful. React keeps track of a Virtual DOM and uses an O(n) diffing algorithm (where n is the amount of HTML elements) to perform efficient re-renders. It recognizes changes and updates corresponding pieces accordingly.

---

![react-dom-updates](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/granular-dom-updates.gif?token=AMIDLIAOJGEWYFH7CXPQPSDACMXFQ)

Note:
- For the more visual among us, this is a nice example of a React app in action.
- As you can see, as the seconds of our clock update, the only element in our HTML that is affected is the time itself. Our other elements are not affected by the updating time.
- This is what React allows us to do. Efficiently update pieces of our dom that has changed without having to re-render anything else.

- I like to open up Twitter, or some other app and move around on the page, taking note of what parts of the page actually change (a lot do not). Open up DevTools, and see what parts of the DOM actually change (if you go on Twitter you can literally see their `react-root` - open it up until you see the main tag and you can see what changes and what doesn't)
- ANY QUESTIONS SO FAR?


---


## JSX

+ Syntax extension to JavaScript
+ Use camelCase naming convention
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

Note:
- In our React components, we will be using JSX syntax to desribe what our UI looks like
- Not required, but improves readability and ease-of-development.
- Will need to be transpiled to JS before being bundled
- React treats components starting with lowercase letters as DOM tags.
- You can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions which makes it flexible and convenient

---

## NPM

+ Node Package Manager (NPM) is a package manager and software registry
+ JS's `package.json` is similar to Ruby's `Gemfile`
+ Use to download various dependencies

Note:

- NPM is the world's largest software registry, with approximately 3 billion downloads per week.
- Modules are stored within a local folder for each project on your machine, based on that project's dependencies. So you may end up with multiple copies of the same program installed.
- Compare this to gems in Ruby, while can be installed locally in our application, or globally on your machine.
- Yarn is an alternative to NPM which is gaining traction - recently adopted by facebook and google - which stores programs in a single global location on your machine.
- NPM is still far more popular than Yarn.
- What is the difference between NPM and yarn?
  + `npm` will store a local folder of the dependency to the project
    + you may have multiple versions of the same program on the same computer
    + npm can create a local and global copy
  + `yarn` and gems store in a single location on my machine
    + yarn and gem only creates global copies
  + Google and FB have recently switched to yarn, but NPM is way more popular
- You will mostly be using npm in this course

---

## Setting-up-your-project Demo

Note:
- npm-demo which goes through npm and webpack
- demo will ba a review of the set up process that you may have seen already
- no need to memorize all of this

---


## React Components (what)

+ The building blocks of a React app
+ Encapsulates pieces of UI containing both the HTML and the means to manipulate it
+ A React app is a hierarchy, or tree, of React components

Note:
- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
- Think back to the diagram at the start where we had the slack app as an example with the direct messages component. This component manages the direct message piece of the UI.

---

## React Components (how)

+ Accepts a single "props" object and returns a React element
+ Created via either **classes** or **functions**
+ Class components must have a `render` function
  + The `render` function is a product of **state** & **props**
+ In functional components, the function _is_ the `render` function

Note: 
- Conceptually, components are like JS functions. 
- Components accepts a single “props” (which stands for properties) object argument with data and returns a React element. 
- We can create components in 2 ways - either through classes or functions
- With the class structure, unlike the function structure, you can't directly return the react element. That's why you need to have an explicit render function.
- Functional components are literally JS functions. They can return react elements directly

---

## State & Props

+ **Props** refer to information that the component receives from a parent component
+ **State** refers to information that the component itself manages

Note:
- State is internal to a class component that it can directly change and manage
- Any information that is passed down is considered props. It is information that a parent passes down to a child, and from child's perspective, it is any information that it receives from its parent.


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

Note:
- Defining a `render()` method is required.
- This is the default `constructor` method, do not need to always write it. This is just to show what it is. Only need to overwrite for binding methods or creation of local state.

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
Note:
- Functional components are a little bit simpler to write out compared to our Class components. No class extends syntax. Do not need a constructor, or any methods. They simply take in props as an argument, and then return some jsx/html to be rendered.

- Common question at this stage is WHY we would use a class vs a functional component. The simple answer is local state. If you need to keep track of local state, you must have a class component.

---


## `render`

+ React calls `render` for us
+ Typically will return **React Elements** written using JSX
  * `<div>...</div>` or `<MyComponent />`
  * Can only return one _root_ react element
+ Can also return `null` if component is in state where it should not display
+ Can also return booleans, arrays, strings, and numbers, but less common

Note:
- Ask the class when React calls render - they should know its when state or props change from the previous slides
- React elemtns can be html tags or other components

---

## DEMO

---
## Valid Render

```jsx
function GoodComponent = (props) => {
  return (
    <div>
      <h1>Hello There!</h1>
      <p>This is some good JSX</p>
    </div>
  )
}
```

Note:
- a valid render has a return, has a one root element (div)
- example is of a functional component, but valid render rules apply to both class and functional components

---

## Invalid Render

```jsx
function BadComponent = (props) => {
  return (
    <h1>Hey</h1>
    <p>You can't do this :(</p>
  )
}
```

Note:
- an invalid render with no root element will error out 
- example is of a functional component, but invalid render rules apply to both class and functional components

---

## Handling Events

+ React events named using camelCase
+ Provide event listener when element is rendered
  * No need to call addEventListener
+ Pass a function as event handler

```jsx
<button onClick={this.handleClick}>
  Click
</button>
```

Note:
- Make sure you still call preventDefault
- Be careful about context of this and make sure it's bound to correct context
- Still need to preventDefault for things like forms

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

Note:
- Remember, we use class components when we need to keep track of local state
- It is in the constructor that we initialize state, and it should be the ONLY time you use `this.state = `.
- State is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it. However, a component may choose to pass its state down as props to its child components.
- Examples of needing to track state are: 
  * our clock example where our clock component needs to track changes each second and re-render after each second
  * forms where we want to track and show what the user is inputting into each input field

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

Note:
- Notice how we only specify the `text` property - this leaves the `cat` property unaffected. This is what we mean by merging into old state
- Stress that it is async so if you want to do something _after_ state has been updated it must be in the callback to `setState`
- This should be the only way you change your state! React gave us this method for a reason!

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

Note:
- When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.
- Here in the example, the name prop is passed to <MyComponent/>
  * syntax for passing props is <nameOfProp> = <prop>
  * when the component receives the different props, in the child component you can access the props as you would an object
    * props is an object and can be accessed by this.props.nameOfProp (if class) or props.nameOfProp (if functional)

- Don't store props in state because props will already trigger lifecycle methods.
- Will be explained in the next slide- 
- The inputs into the React pure function are `props` and `state`. Any changes to how the component looks should be performed by changes to `state` or `props`.

---

### React components will re-render when their state or props change

Note:
- So any time internal state changes, or the props that a component recieves from its parent is different, it will trigger a call to render or re-render
- If a parent passes props to a child component, and state/props change in parent causes a re-render, the child gets re-rendered as well, but that re-render doesn't necessarily change the DOM. It only does if there's a difference. A call to render activates the diffing algorithm but only the elements that have actually changed will get updated on the DOM.
- React uses “unidirectional” data flow. State/prop changes can only affect components “below” them in the tree.
- key takeaway is that any changes to state or props will cause react components to re-render.

ANY QUESTIONS ON COMPONENTS?

---

## React Component Philosophy

+ Single Responsibility Principle
+ Pure Functions (with respect to props)

Note:
- One of the advantages we've mentioned is that react keeps our code modular. Each component represents a piece of the UI.
- React Components should follow Single Responsibility principle. Each component should be independent, reusable, isolated pieces of the UI. It should only have one job. If your component is rendering too many things, think about refactoring them into smaller components
- Whether you declare a component as a function or a class, it must never modify its own props. Remember, all components take in a props object as argument.
- They should be pure functions, which means:
  * have a deterministic output based on the input
  * Produce no side effects
  * they do not attempt to change their inputs, and always return the same result for the same inputs.
- We should never mutate the props it takes in. Now with that said, state allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

- [Pure functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
  
---
  
![single-respond-rule](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/react_single_respond_rule.png?token=AMIDLIHZYAV3JOBWKPSGLITACRH7K)

Note:
- Again, for the more visual in the room, this is a break down of how we would split an application into separate React Components. We should be thinking of the frontend of our app in terms of React Components now. What are the parent components, what are the child components?
- Note that inside our Team Index, we have separate React components for each index item. The Team Index is the parent component that renders the Team Index Item child components.
- The same pattern is repeated in our Direct Messages, Channels, and Starred indexes.

- You may recognise this as looking a lot like the CSS Box Model.

---
  
## Job Listing Widget Demo

Note:
- Explain what app we are making. We are making a widgets app that will allow us to fetch job listings for different  cities using the Github jobs api.
- Go over high level what components we think we need.  
  
---

## When to use Class Components

+ The component needs to maintain its own state
+ The component uses React **lifecycle methods** (more on these later)
+ The component renders HTML elements that require event handlers
  * In some cases these event handlers may be received via props and a class is not needed

Note:
- All of these would be scenarios where you'd want to use a class component
- You initiate initial state in the constructor
- React will run lifecycle methods for class components
- If we need event handlers, we would define them inside the class.

---

### When to use Functional Components

+ If you don't need to track local state and don't need any Lifecycle Methods
+ If all your class component has is a render function, it should be a functional component

Note:
- Functional components are those that are purely presentional in nature and are a product of solely their props.

---


![Items](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/3_jobindexitem.png?token=AMIDLIBLSJW36WBKCKVBYLTACSBVE)

Note:
- Within JobIndex component, we will have a list item component. JobIndex will render the JobIndexItem component
- Each box will be a separate component we will eventually define.

---

## Lifecycle Methods

![pic](https://raw.githubusercontent.com/appacademy/sf-lecture-notes/master/react/w10d2-react/assets/lifecycle.png?token=AMIDLIB3IMVQ4SUVJMN4DKTACSBZ6)

Note:
- Up until this point, we've kind of just accepted that React does the updating for us whenever state or props in our components change.  As long as we have a valid render function, React somehow knows when to call it.
- Under the hood, there are these lifecycle methods which are built in functions that React will call under the hood for a react component. Lifecycle methods apply to class components, not functional components. You have access to all stages of the mounting/updating process.

- In an ideal world, we wouldn’t use lifecycle methods. All our rendering issues would be controlled via state and props.

- But in the cases where we need more control over how our component updates, we do need to overwrite these methods, please do so sparingly. 

---

## Mounting

+ **constructor()**
+ **render()**
+ **componentDidMount()**
  * good place to call AJAX requests, set subscriptions like setInterval

Note:
- In the mounting phase (this is when your component is called/instantiated):
  + `constructor()`
  + `render()`
  + `componentDidMount()`
    + Here is where we will call our AJAX requests!

- We usually want to make our AJAX calls in `componentDidMount()` if we want to have the page already loaded with some information (i.e. from our db).

You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.

- other methods in this phase: static getDerivedStateFromProps()

---

## Updating

+ shouldComponentUpdate()
+ **render()**
+ componentDidUpdate(prevProps, prevState)

Note:
- An update can be caused by changes to props or state. These methods are called in the following order when a component in being re-rendered
- `shouldComponentUpdate()`
  * `setState()` starts here, but must wrap in a condition
  * The default is `return true;`
  * Stop renders in certain cases of changed props
- `render()` triggered by changes to props, state
- `componentDidUpdate(prevProps, prevState)`
  * Will likely be more useful in React 17 or when checking routes to see if a route with a wildcard has changed and need to re-render
  * invoked immediately after updating occurs

- We might want to stop a re-render if our props change but the props that did change do not directly influence what is being rendered. Say, some background data.

- other methods in this phase: static getDerivedStateFromProps(), getSnapshotBeforeUpdate()

---

## Unmounting

+ **componentWillUnmount()**
  * Remove event listeners, clearInterval, etc

Note:
- invoked immediately before a component is unmounted and destroyed
- perform necessary cleanup such as cleaning up subscriptions like timers, setIntervals, etc.
- These methods are called in this order and we can overwrite them to have certain actions taken when things happen.

---

## [Kahoot!](https://play.kahoot.it/v2/?quizId=ec7dc678-656a-4dd2-98c4-f4f8aa54ff73)

---

## Let's React!
![reacting](https://media4.giphy.com/media/Hcw7rjsIsHcmk/giphy.gif?cid=ecf05e4777c2myujvqllqn4lc8pc29lcf59ypeq3gcb2n6m6&rid=giphy.gif)

Note:
- Thank you for sticking with me through the whole lecture. you all have been great so let's go out there and build some react apps!