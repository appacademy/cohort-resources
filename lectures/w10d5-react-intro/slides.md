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

## Why React?

+ Abstracts away low-level DOM manipulation
	+ Allows developers to focus on content
+ Greatly simplifies creation of HTML elements through use of JSX
	+ Similar to `html.erb` in Ruby
+ Components only rerender as needed
	+ When the data being passed into a component changes - called `props`
    + When the internal `state` of the component changes
    + When a parent component rerenders

---

## Virtual DOM

![react-virtual-dom](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/virtualdom.png)

Note:
+ DOM updates can cause unnecessary rerenders and generally be inefficient
+ React compares virtual tree to previous tree to decide which elements are updated

---

## Granular DOM Updates

![react-dom-updates](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/granular-dom-updates.gif)

---

## JSX

+ Syntax extension to JavaScript
+ Generates React elements - either components or DOM nodes
+ Doesn't require that HTML elements be wrapped in strings
+ Uses curly braces to interpolate JS expressions into element body
  ```jsx
  const name = 'Mike Madsen';
  const element = <h1>Hello, {name}</h1>;
  ```
	+ Or into element attributes
		```jsx
			const element = <img src={user.avatarUrl}></img>;
		```

---

## `ReactDOM.render`

+ React elements are not actual HTML DOM elements
+ The `react-dom` render method effectively turns our virtual DOM elements into actual DOM elements

```jsx
import React from 'react';
import ReactDom from 'react-dom';

const root = document.querySelector('#root');
ReactDom.render(<h1>Hello world!</h1>, root);

```
+ Should only need to do this once - our h1 will be replaced by a single parent react component wrapping around the rest of our app

Note:
+ `ReactDom.render` is React 17 syntax and has been deprecated in React 18
	+ new syntax is `ReactDom.createRoot`

---

## `create-react-app`

+ A great tool for simplifying the process of creating a new React application
+ Abstracts away almost all of the configuration process
	+ Ensures compatible versions, etc.
+ Uses `yarn` package manager by default
+ Can choose to build project using a predefined template

```zsh
# default configuration
npx create-react-app my-app --use-npm

# template configuration
npx create-react-app my-app --template @appacademy/react-v17 --use-npm
```

---

## Demo!

Note:
  1. Create new app using default configuration
    + `npx create-react-app my-app --use-npm`
  2. Remove extraneous content (and corresponding imports)
    + public: `logo192.png`, `logo512.png`, `robots.txt`
    + src: `App.css`, `App.test.js`, `logo.svg`, `reportWebVitals.js`, `setupTests.js`
  3. Remove `icons` property from `public/manifest.json` and rename project to `My App`
  4. Remove `web-vitals` from `package.json` and run `npm i` (i.e. `npm install`)
  5. Remove imports for `logo` and `App.css` and comment out contents of top level `div` in `App.jsx`
  5. Remove import for `reportWebVitals` and `reportWebViatals();` from `index.js`
  6. Create and render random test element in `index.js` in place of `<App />`
  7. Add random site-wide styling to `index.css`
  8. Run `npm start` and view app in browser
  - this will leave you without all the fluff of the default create react app settings. rather than doing this every time, you can just use our template

* Create new app using template configuration
	+ `npx create-react-app my-app --template @appacademy/react-v17 --use-npm`

---

## Break Time!

---

## React Components

+ Building blocks of a React application that encapsulate UI elements
	+ Contains both HTML and JS to manipulate it
+ Each component is a node within an overall component tree
+ Can be written in either function or class syntax
	+ We will focus mostly on writing *functional components*

---

## Philosophy

+ Single Responsibility Principle
	+ Any single component should have just one reason for existing
+ Pure Function
	+ Map an input to an output without modifying the input

---

## Single Responsibility Principle

![single-responsibility](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/react_single_responsibility_rule.png)

---

## Anatomy of a Functional Component

+ Returns a React element written using JSX
	+ Can also return `null` and other data types in rare cases
	+ Limited to returning just a single element

```jsx
const MyComponent = props => {
	return (
		<div className="quotes">
			<h1 id="title">I love JavaScript</h1>
		</div>
	);
};
```

**Do you notice anything interesting or different about the HTML here?**

---

## `React.Fragment`

+ Can wrap multiple React elements in a `<React.Fragment>` so that they can be returned without adding a wrapping node to the DOM
	+ Shorthand for `<React.Fragment>` is just `<>`

```jsx
const MyComponent = props => {
	return (
		<>
			<h1>Quotes</h1>
			<div className="quotes">
				<h2 id="title">I love JavaScript</h2>
			</div>
		</>
	);
};
```

---

## `props` and Internal State

+ Components take in a single object containing static data that we call `props`
	+ Props are key-value pairs declared on instantiation
+ Components can also store and update data through its internal state
	+ More on this next week!

```jsx
const MyComponent = props => {
	return <h1>My name is {props.name} and I like {props.hobby}</h1>;
}

const root = document.querySelector('#root');
ReactDom.render(<MyComponent name="Mike" hobby="reacting" />, root);
```

---

## What causes a React component to rerender?

1. Any change to `props`
2. Update to any internal state variable
3. Ancestor rerender

Understanding this is key to utilizing React effectively.

---

## Demo!

Note:

Using an app created with `npx create-react-app my-app --template @appacademy/react-v17 --use-npm`
1. Create basic `App` component
2. Pass in random info via `props`
3. Create `JobIndex` component and pass in array of job openings
	+ Point out how nicely React renders arrays
  + Make sure to explain how to use map, with implicit and explicit returns
  + Explain keys
4. Create `JobIndexItem` components
5. Add CSS to show border around individual components

---

## Break!

---

## React Router

+ Introduces the concept of front-end routes
+ Dynamically renders different components based on the URL
+ Used to mimic behavior of traditional multi-page applications

---

## The Basics

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

## Router Components

+ There are a few different Router components
	+ We will be be exclusively using `BrowserRouter`
+ This particular implementation requires additional back-end configuration that we'll learn about next week.

```jsx
// Other imports omitted for brevity
import { BrowserRouter } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
```

---

## `Route`

+ Renders specific components based on URL path
+ Renders all matched components inclusively
+ When a path does not match any routes, `null` will be rendered
  
```jsx
import { Route } from 'react-router-dom';

<Route path="/" component={Home} />;
<Route path="/todos" component={TodoIndex} />;
<Route path="/todos/:todoId" component={TodoShow} />;
```

---

## `Route` Props

```jsx
<Route path="/todos" component={TodoIndex} />;
<Route exact path="/" component={Home} />
<Route exact path="/" render={() => <h1>Home</h1>} />
```

---

## `Switch`

+ Renders only the first matching route
+ Beware of ordering!
+ Good to have a catch-all ('/') route as the last nested route

```jsx
<Switch>
  <Route path="/todos/:todoId" component={TodoShow}/>
  <Route path="/todos" component={TodoIndex}/>
  <Route path="/" component={Home}/>
</Switch>
```

---

## `Redirect`

+ `to` property takes a string or object to redirect the route to
+ `from` property can only be used within a Switch statement to redirect from one route to another

```jsx
<Switch>
  <Route path='/error' component={Error} />
  <Route path='/' component={Home} />
  <Redirect to='/error' />
</Switch>
```

---

## `Link`

+ Generates an anchor tag in your HTML document to a specific route
+ `to` property takes in a string representing the path to link to
  
```jsx
<Link to="/todos">All Todos</Link>

// <a href="/todos">All Todos</a> renders to your HTML
```

---

## `NavLink`

+ Built on top of `<Link>` with additional props for styling
+ Styling attributes are added to an active `<NavLink>` element when current URL matches `to` prop

---
  
## `NavLink` Props

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

## useParams

- Our first hook!
- Invoking it returns an object from our url
- Key into it to access a value from the url

```
 const { todoId } = useParams(); // assuming todoId is a wildcard
```

---

## Demo!

Note: 
+ In order to easily show some routing behavior, we need to create a show component to route to based on the url
+ set up the JobShow to grab a jobId using useParams()
+ add the component to the App using Routes, one for the jobIndex and one for jobShow, show how it works by changing the url directly
  + don't forget, the path needs a leading slash, ex: `path='/jobs'`
+ compare it to using Switch
+ create an error component and route to it with /error, show how to Redirect to it if the other routes don't match
+ Refactor the Job Index into a navbar
  + add css to make the job index look like a navbar (flex and justify content space between is good enough, maybe add color styling)
+ Change the job titles to Links, show that it works!
+ Finally change them to NavLinks, add an activeStyle prop to change the color

---

## Questions?

---

## Thank you!