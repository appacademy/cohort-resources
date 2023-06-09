## W11D2
# React Context

---

## Learning Objectives

+ Explain the limitations of prop threading/drilling
+ Share and manage "global" information within a React app using context
	+ Create a new context object
  + Retrieve values from a context object
  + Create a wrapper component to manage a context
  + Describe the relationship between a provider, consumer, and context

---

## Agenda

1. React Review
2. React Context
	+ Context
	+ Provider
		+ Wrapper
	+ Consumer
3. More Hooks

---

## React Review

+ Functional components
	+ `props`
+ React Router
  + `Switch`, `Route` and `Redirect`
  + `Link` and `Navlink`
  + `useParams`
+ More Hooks
	+ `useState`
  + `useEffect`

---

## Demo

---

## Break

---

## Context Overview

+ A typical React application passes data from parent to child via props
	+ Also known as props *threading* or *drilling*
	+ Fine for applications with relatively shallow nesting
  + Quickly becomes tedious in larger applications
+ React context allows a child component - **consumer** - to directly retrieve information from an ancestor - **provider** - no matter how far apart they are
	+ Provider stores data in the form of an object named `value`

---

## Motivation for Context

![prop drilling](https://miro.medium.com/max/1195/0*l-RrGhD6jeQ2z9JK.png)

---

## Context

+ `createContext(defaultValue)`
	+ Creates and returns a new context object
	+ Takes a default value argument (not used very often in practice)
	+ Contains two primary attributes, both of which are components
		+ `Consumer`
		+ `Provider`
+ `useContext(contextObject)`
	+ Hook that turns any component into a consumer (or subscriber)
  + Takes in a context object and gives the component access to that context's value 
	+ All subscribed components re-render when the context updates
	  + We'll use the same concept when we learn about Redux tomorrow. 
	  + Hint: Redux is context but context is not Redux

---

## Example

```jsx
	// ThemeContext.js
	import { createContext } from 'react';

	export const ThemeContext = createContext();
```

---

## Provider

+ Component created when we invoke `createContext()`
	+ Stored as a property of the resulting context object
+ Must take in a `value` prop
+ Rendered above consumers in the component hierarchy
	+ Though provider components themselves can be nested 
+ Allows consumer components to subscribe to changes in context
+ All consumers will re-render when the provider's `value` prop changes

---

## Example

```jsx
	// index.js
	import { ThemeContext } from './context/ThemeContext.js';

	const Root = () => (
		<ThemeContext.Provider value={{ theme: 'dark' }}>
			<App />
		</ThemeContext.Provider>
	);
```

---

## Consumer

+ A component that is subscribed to changes in context
+ One of the properties of the consumer object created using `createConsumer`
	+ Requires a child function that takes in the current value of the context and returns a React node
  
```js
	// MyConsumerComponent.js
	import { ThemeContext } from '../context/ThemeContext.js';

	const MyConsumerComponent = props => {
		return (
			<ThemeContext.Consumer>
				{value => /*render something based on the context value*/}
			</ThemeContext.Consumer>
		);
	};
```

---

## Demo Part 2

---

## Break

---

## Wrapper

+ In the previous example, note that the provider's value is static
+ To fix this, we can:
	+ Wrap the entire provider in a custom provider component
  + Use a state variable to manage its value

---

## Example (Part 1)

```jsx
	// ThemeContext.js
	import { createContext, useState } from 'react';

	export const ThemeContext = createContext();

	export const ThemeProvider = props => {
		const [theme, setTheme] = useState('dark');
	
		return (
			<ThemeContext.Provider value={{ theme, setTheme }}>
				{props.children}
			</ThemeContext.Provider>
		);
	};
```

---

## Example (Part 2)

```js
	// index.js
	import { ThemeProvider } from './context/ThemeContext.js';

	const Root = () => (
		<ThemeProvider>
			<App />
		</ThemeProvider>
	);
```

---

## `useContext`

+ Hook that turns any component into a consumer
+ Invoked with a context object
	+ Looks up the chain for a corresponding `Provider` component
  + Returns the `value` prop
  + If no provider is found, returns `defaultValue` of the context
+ Common practice to create a custom hook alongside a context in order to avoid importing both the context and `useContext` whenever creating a consumer

---

## Example

```jsx
	// ThemeContext.js
	import { createContext, useState, useContext } from 'react';

	/* all the other code we've written */

	export const useThemeContext = () => (
		useContext(ThemeContext);
	);
```

```jsx
	// MyConsumerComponent.js
	import { useThemeContext } from '../context/ThemeContext.js';

	const MyConsumerComponent = props => {
		const { theme } = useThemeContext();
		/* more code goes here */
	};
```

---

## Demo Part 3

---

## Questions?

---

## Thanks all!