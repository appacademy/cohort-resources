## W10D5
# Intro to React

---

## Remember These?

+ Ruby
+ SQL
+ Rails
+ JavaScript
+ AJAX 

---

## Let's Talk About React!
![youre-a-wizard](https://media.giphy.com/media/4EALRFjyD5odO/giphy.gif)

---

## Learning Goals

+ Describe how React simplifies front-end development
+ Set up a new React project
+ Build simple React components
+ Pass data between components via `props`
+ Conditionally render components using React Router

---

## Agenda

1. React Overview
1. React Components
1. React Router

---

## React Overview

+ Front-end library for building/managing UI
+ Breaks up view up into modular components
	+ Single Responsibility Principle
+ Simplifies the creation of single page applications (SPAs)
	+ Only one backend route that returns HTML
	+ Javascript used to dynamically update the DOM

---

![single-page-app](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/traditional-and-spa.jpeg)

---

### Why React?

+ Abstracts away low-level DOM manipulation
	+ Allows developers to focus on content
+ Greatly simplifies creation of HTML elements through use of JSX
	+ Similar to `html.erb` in Ruby
+ Components only rerender as needed
	+ When the data being passed into it changes - called `props`
  + When the internal `state` of the component changes
  + When a parent component rerenders

---

### Virtual DOM

![react-virtual-dom](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/virtualdom.png)

Note:
+ DOM updates can cause unnecessary rerenders and generally be inefficient
+ React compares virtual tree to previous tree to decide which elements are updated

---

### Granular DOM Updates

![react-dom-updates](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/granular-dom-updates.gif)

Note:
+ 

---

### JSX

+ Syntax extension to JavaScript
+ Generates React elements - either components or DOM nodes
+ Doesn't require that HTML elements be wrapped in strings
+ Uses curly braces to interpolate JS expressions into element body
  ```jsx
  const name = 'Josh Perez';
  const element = <h1>Hello, {name}</h1>;
  ```
	+ Or into element attributes
  	```jsx
  const element = <img src={user.avatarUrl}></img>;
  ```
+ Can be used inside of `if` statements, `for` loops, and other control structures

---

### `ReactDOM.render`

+ Remember that React elements are not actual HTML DOM elements
+ The `react-dom` package gives us methods for interacting with the actual DOM at the highest levels of our project

```jsx
import React from 'react';
import ReactDom from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
	const greeting = <h1>Hello world!</h1>;
	const root = document.querySelector('#root');
	ReactDom.render(greeting, root);
}
```
+ Should only need to do this once - where `greeting` is replaced by a single parent component wrapping around our entire application

Note:
+ `ReactDom.render` is React 17 syntax and has been deprecated in React 18
	+ new syntax is `ReactDom.createRoot`

---

### `create-react-app`

+ A great tool for simplifying the process of creating a new React application
+ Abstracts away almost all of the configuration process
	+ Ensures compatible versions, etc.
+ Uses `yarn` package manager by default
+ Can choose to build project using a predefined template

```zsh
# default configuration
npx create-react-app my-app --use-npm

# template configuration
npx create-react-app my-app --template @appacademy/react-v-17 --use-npm
```

---

## Demo!

Note:
1. Create new app using default configuration
	+ `npx create-react-app my-app --use-npm`
1. Remove extraneous content (and corresponding imports)
	+ public: `logo192.png`, `logo512.png`, `robots.txt`
	+ src: `App.css`, `App.test.js`, `logo.svg`, `reportWebVitals.js`, `setupTests.js`
1. Remove `icons` property from `public/manifest.json` and rename project
1. Remove `web-vitals` from `package.json` and `npm i`
1. Create and render random test element in `index.js`
1. Add random site-wide styling to `index.css`
1. Create new app using template configuration
	+ `npx create-react-app my-app --template @appacademy/react-v-17 --use-npm`

---

## Break Time!

---

## React Components

+ Granular building blocks of a React application that encapsulate UI elements
	+ Contain both content (HTML) and the means to manipulate it
+ Each component is a node within the overall React hierarchy/tree
	+ Can have a parent component and multiple children
+ Can be written in either function or class syntax
	+ We will focus almost exclusively on writing *functional components*
+ Need to always `import React from 'react'` when building a component

---

### Philosophy

+ Single Responsibility Principle
	+ Any single component should have just one reason for existing
+ Pure Function
	+ Map a single input to a single output without modifying the input

---

### Single Responsibility Principle

![single-responsibility](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/react_single_responsibility_rule.png)

---

### Anatomy of a Functional Component

+ Almost aways return a React element written using JSX
	+ Can also return `null` and other data types in rare cases
	+ Limited to returning just a single element

```jsx
const MyComponent = { => {
	return (
		<div className="quotes">
			<h1 id="title">I love JavaScript</h1>
		</div>
	);
};
```

**Do you notice anything interesting or different about the HTML here?**

---

### `React.Fragment`

+ Can wrap multiple React elements in a `<React.Fragment>` so that they can be returned without adding a wrapping node to the DOM
	+ Shorthand for `<React.Fragment>` is just `<>`

```jsx
const MyComponent = props => {
	return (
		<React.Fragment>
			<h1>Quotes</h1>
			<div className="quotes">
				<h2 id="title">I love JavaScript</h2>
			</div>
		</React.Fragment>
	);
};
```

---

### `props` and Internal State

+ Components take in a single object containing static data that we call `props`
	+ Key-value pairs declared on instantiation end up inside this object
+ Components can also store and update data through it's internal state
	+ More on this next week!

```jsx
import React from 'react';
import ReactDom from 'react-dom';

const MyComponent = props => {
	return <h1>My name is {props.name} and I like {props.hobby}</h1>;
}

const root = document.querySelector('#root');
ReactDom.render(<MyComponent name="Mike" hobby="reacting" />, root);
```

---

### What causes a React component to rerender?

1. Any change to `props`
1. Update to any state variable
2. Ancestor rerender

Understanding this is key to utilizing React effectively.

---

## Demo!

Note:
1. Create basic `App` component
1. Pass in random info via `props`
1. Create `JobIndex` component and pass in array of job openings
	+ Point out how nicely React renders arrays
1. Create `JobDetail` component
	+ Map through `props.jobs` in `JobIndex` to create `JobDetail`s
1. Add CSS to show border around individual components

---

## React Router

+ Introduces the concept of front-end routes
+ Dynamically renders different components based on the URL
	+ Used to mimic behavior of traditional multi-page applications

---

### The Basics

+ Defines a variety of components, all imported from `react-router-dom`
	+ Router
		+ `BrowserRouter`
  + Route
  	+ `Route`
    + `Switch`
    + `Redirect`
  + Navigation
  	+ `Link`
    + `NavLink`

---

### Router Components

+ There are a few different Router components
	+ We will be be exclusively using `BrowserRouter`
+ This particular implementation requires additional back-end configuration

```jsx
// Other imports omitted for brevity
import { HashRouter } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
```

---

### `Route`

+ Renders specific components based on URL path
+ Renders all matched components inclusively
+ When a path does not match any routes, `null` will be rendered
  
```jsx
import { Route } from 'react-router-dom';

<Route path="/" component={Home} />;
<Route path="/todos" component={TodoIndexContainer} />;
<Route path="/todos/new" component={TodoFormContainer} />;
```

---

### `Route` Props

```jsx
<Route path="/todos" component={TodoIndexContainer} />;
<Route exact path="/" component={Home} />
<Route exact path="/" render={() => <h1>Home</h1>} />
```

---

### `Switch`

+ Renders only the first matching route
+ Beware of ordering!
+ Good to have a catch-all ('/') route as the last nested route

```jsx
<Switch>
  <Route path="/todos/new" component={TodoFormContainer}/>
  <Route path="/todos" component={TodoIndexContainer}/>
  <Route path="/" component={Home}/>
</Switch>
```

---

### `Redirect`

+ `to` property takes a string or object to redirect route to
+ `from` property can only be used within a Switch statement to redirect from one route to another

```jsx
<Switch>
  <Route path='/error' component={Error} />
  <Route path='/' component={Home} />
  <Redirect to='/error' />
</Switch>
```

---

### `Link`

+ Generates an anchor tag in your HTML document to a specific route
+ `to` property takes in a string representing the path to link to
  
```jsx
<Link to="/todos">All Todos</Link>

// <a href="/todos">All Todos</a> renders to your HTML
```

---

### `NavLink`

+ Built on top of `<Link>` with additional props for styling
+ Styling attributes are added to an active `<NavLink>` element when current URL matches `to` prop

---
  
### `NavLink` Props

+ `to`: property takes in a string representing the path to link to
+ `exact`: ensures the path is an exact match
  + Example - `/users/123` will not match to=`/users` with the exact flag
+ `activeClassName`: class name for an active `<NavLink>` element
  + `.active` is default class provided
+ `activeStyle`: inline styling to apply to an active `<NavLink>` element

```jsx
<NavLink
  exact
  to="/users"
  activeClassName="selected"
  activeStyle={{ fontWeight: 'bold' }}
>Users
</NavLink>
```

---

## Demo!
