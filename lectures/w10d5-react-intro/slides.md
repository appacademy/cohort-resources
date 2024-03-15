## W10D5
# Intro to React

---

## Learning Objectives

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

---

![single-page-app](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/react-intro/traditional-and-spa.jpeg)

---

## Why React?

+ Abstracts away low-level DOM manipulation
	+ Allows developers to focus on content
+ Greatly simplifies creation of HTML elements through use of JSX
	+ Similar to `html.erb` in Ruby
+ Components only re-render as needed
	+ When the data being passed into a component changes
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

## `createRoot`

+ React elements are not actual HTML DOM elements
+ The `react-dom` render method effectively turns our virtual DOM elements into actual DOM elements

```jsx
import React from 'react';
import ReactDom from 'react-dom/client';

const rootElement = document.querySelector('#root')
const rootNode = ReactDom.createRoot(rootElement);
rootNode.render(<h1>Hello world!</h1>);
```

---

## Vite

+ A great tool for simplifying the process of creating a new React application
+ Abstracts away almost all of the configuration process
	+ Ensures compatible versions, etc.
+ Can choose to build project using a predefined template

```txt
# default configuration
npm create vite@latest <project-name> --template react

# template configuration
npx tiged appacademy/aa-react18-vite-template#main <new-project-name>

```

---

## Demo!

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

**Do you notice anything interesting or different here?**

---

## React Fragments

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

The first step to frontend routing is to add the `react-router-dom` package to our project dependencies! It gives us access to the following:

+ `createBrowserRouter`: a function that takes in an array of route objects, each of which defines a path and element
+ `RouterProvider`: a component that takes in a router object
---

## Router Setup

+ There are a few different types of routers
	+ We will be be exclusively using `createBrowserRouter`
+ This particular implementation requires additional back-end configuration that we'll learn about next week.

```jsx
const router = createBrowserRouter([
  { path: "/", element: <Home /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
```

---

## Routes

+ Recall that we must invoke `createBrowserRouter` with an array of route objects
	+ A route object is just a regular POJO keys like `path`, `element`, and `children`
  
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'teams',
    element: <TeamsIndex />
  }
]);
```

---

## Route Matching

+ The order in which we create or list routes does not matter as they are automatically ranked based on specificity
+ Each element of a path is known as a *segment*
	+ Generally speaking, routes with a greater number of segments will have higher priority
  
```md
	/teams (one static segment)
	/teams/new (two static segments)
	/teams/:teamId (one static segment + one dynamic segment)
	/teams/* (one static segment + a splat)
```

---

## Nested Routes

+ If the paths associated with two or more routes share a common root, we can nest them

```jsx
{
    path: 'teams',
    children: [
      {
        index: true,
        element: <TeamsIndex />
      },
      {
        path: ':teamId',
        element: <TeamDetails />
      }
    ]
}
```

Note:
+ An `index` route has no additional path elements
	+ We could have also said `path: '/teams'
+ By leaving off a `/` in front of `:teamId`, we are telling Router that this is a relative path
	+ We could have also said `path: '/teams/:teamId'`

---

## Outlet

+ A placeholder component used for rendering child routes
	+ Set as the default value of `element` if not specified
  
```jsx
{
    path: 'teams',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <TeamsIndex />
      },
      {
        path: ':teamId',
        element: <TeamDetails />
      }
    ]
}
```

---

## useParams

+ A special type of function called a *hook*
	+ The first of many with a variety of uses
+ Returns an object with the value of all dynamic segments
+ Allows a component to access information in the URL

```
 const { todoId } = useParams(); // todoId is a dynamic segment
```

---

## `Navigate`

+ Component that redirects  when rendered
+ Destination is specified by the `to` prop
	+ Given path can be absolute or relative
+ Will often see `replace={true}` as an additional prop
	+ Prevents the current page from being added to the browser's history
  
```jsx
{
	path: '*',
	element: <Navigate to='home' replace={true} />
}
```

---

## `useNavigate`


+ Replicates the behavior of the `Navigate` component in that it allows us to dynamically change the url
	+ Biggest difference is that we can do this in event handlers, not just when rendering
  
```jsx
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Do something with the submitted data...
    navigate(`/home`);
  }
```

Note:
+ Some additional functionality:
	+ Can pass in an options object as second argument
  + Can pass in an integer instead of a path to navigate through browser history
  
---

## `Link`

+ Generates an anchor tag in your HTML document
+ `to` prop takes in a path
	+ Path can be absolute or relative
  
```jsx
	<Link to="/todos">All Todos</Link>

	// <a href="/todos">All Todos</a>
```

---

## `NavLink`

+ Augments the more simple `<Link>` with default styling
	+ Dynamically adds the `active` or `pending` classes to the element by matching the `to` prop to the current URL
	+ Can optionally add `end` prop to force comparison with the end of the current URL instead of the beginning

```jsx
  <nav>
    <NavLink to='teams'>Teams</NavLink>
    <NavLink to='teams/1'>Team #1</NavLink>
  </nav>
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